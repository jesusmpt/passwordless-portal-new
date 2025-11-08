const axios = require("axios");
const { getAppToken } = require("../auth/getGraphToken");
const { info, error } = require("../shared/log");

module.exports = async function (context, req) {
  try {
    const { durationHours = 1, usableOnce = true } = req.body || {};
    const userId = req.body.userId || req.headers["x-user-id"] || null;
    if (!userId) {
      context.res = { status: 400, body: { error: "Falta userId" } };
      return;
    }

    const token = await getAppToken();
    const now = new Date();
    const expires = new Date(now.getTime() + Number(durationHours) * 3600 * 1000).toISOString();

    const graphUrl = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(userId)}/authentication/temporaryAccessPassMethods`;
    const createResp = await axios.post(graphUrl, {
      isUsableOnce: usableOnce,
      startDateTime: now.toISOString(),
      endDateTime: expires
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });

    const tapValue = createResp.data.value || createResp.data;
    info(`TAP generated for ${userId}`);
    context.res = {
      status: 200,
      body: {
        tap: tapValue,
        expiresAt: expires
      }
    };
  } catch (e) {
    error(e.message || e);
    context.res = { status: 500, body: { error: "Error generando TAP: " + (e.message || "") } };
  }
};
