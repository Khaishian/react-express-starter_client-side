const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api/customers",
    createProxyMiddleware({
      target: "https://react-express-starter-server.herokuapp.com",
      changeOrigin: true,
    })
  );
};
