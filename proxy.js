const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

app.use(
  "/api/proxy",
  createProxyMiddleware({
    target: "https://www.swiggy.com", // Target API
    changeOrigin: true,
    secure: true,
    pathRewrite: { "^/api/proxy": "" }, // Rewrite the path
  })
);

app.listen(3000, () => console.log("Proxy running on port 3000"));
