const axios = require("axios");
async function getAppToken() {
  const tenant = process.env.GRAPH_TENANT_ID;
  const clientId = process.env.GRAPH_CLIENT_ID;
  const clientSecret = process.env.GRAPH_CLIENT_SECRET;
  const url = `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`;
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", clientId);
  params.append("client_secret", clientSecret);
  params.append("scope", "https://graph.microsoft.com/.default");
  const r = await axios.post(url, params.toString(), {
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  });
  return r.data.access_token;
}
module.exports = { getAppToken };
