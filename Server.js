const corsAnywhere = require("cors-anywhere");

// Vercel Serverless Function Handler
const server = corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  removeHeaders: ["cookie", "cookie2"], // Remove headers for better security
});

module.exports = (req, res) => {
  // Proxy the request using cors-anywhere
  req.url = req.url.replace("/api/proxy", ""); // Strip the `/api/proxy` prefix
  return server.emit("request", req, res);
};
