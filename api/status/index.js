const { getAppToken } = require("../auth/getGraphToken");
const { info, error } = require("../shared/log");

module.exports = async function (context, req) {
  try {
    const payload = {
      authenticatorRegistered: false,
      passwordlessEnabled: false,
      fido2Registered: false,
      tapAvailable: true
    };
    context.res = { status: 200, body: payload };
    info("Status returned");
  } catch (e) {
    error(e);
    context.res = { status: 500, body: { error: "Error obteniendo estado" } };
  }
};
