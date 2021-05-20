const { initializeDb } = require('../controllers/initiateDb.controller');

module.exports = (function () {
  const express = require('express');
  const router = express.Router();
  var user = require('../controllers/user.controller');
  router.get('/db/:db', async function (req, res) {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    initializeDb(req, res, fullUrl)
  });
  router.post("/saveUser", user.saveUser);
  router.delete("/deleteUser", user.deleteUser);
  router.get("/", user.getUsers);
  return router;
})()