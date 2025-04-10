const http = require("http");
const express = require("express");
const RED = require("node-red");

const app = express();
const server = http.createServer(app);

const settings = {
  httpAdminRoot: "/",
  httpNodeRoot: "/api",
  userDir: "./data",
  functionGlobalContext: {},
  flowFile: "flows.json"
  // NOT: Dashboard 2.0 için "ui" ayarı gerekmez, otomatik olarak /ui yerine /api/ui kullanılır.
};

RED.init(server, settings);

// Admin ve node endpoint'leri bağla
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

// Sunucuyu başlat
server.listen(process.env.PORT || 1880);

// Node-RED'i başlat
RED.start();

