const express = require('express');
const bodyParser = require('body-parser');

const fileExplorerRoutes = require("./routes/fileExplorerRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use("/api/fileExplorer", fileExplorerRoutes);

app.use("/api/auth", userRoutes);

module.exports = app;