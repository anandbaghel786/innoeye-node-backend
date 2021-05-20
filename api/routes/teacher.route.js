const { initializeDb } = require('../controllers/initiateDb.controller');

module.exports = (function () {
  const express = require('express');
  const router = express.Router();
  var teacher = require('../controllers/teacher.controller');
  router.get('/:db', async function (req, res) {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    initializeDb(req, res, fullUrl)
  });
  router.post("/login", teacher.teacherLogin);
  router.post("/saveCustomer", teacher.saveCustomer);
  return router;
})()
// module.exports = function (app) {
//   // var cors = require('cors');
//   // app.use(cors({ origin: 'http://127.0.0.1:5500/' }));

//   console.log("Hiiiiiiiiiiiiiiii")
//   // todoList Routes
//   // app.route('/tasks').get(teacher.list_all_tasks)
//   // app.route('/login').post(teacher.teacherLogin);
//   app.get('/login', async (req, res) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.send({ data: { name: "Anand" }, status: true });
//   });

//   // app.route('/tasks/:taskId')
//   //   .get(teacher.read_a_task)
//   //   .put(teacher.update_a_task)
//   //   .delete(teacher.delete_a_task);
// };