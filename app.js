const http = require("http");
const express = require('express');
const app = express();
var Sequelize = require('sequelize');
const conn = require("./db")
var teacherRoute = require("./api/routes/routes");
const cors = require("cors");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const corsOptions = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    preflightContinue: true,
    maxAge: 600,
};
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

// app.use("/", (req, res) => {
//     res.statusCode = 200;
//     res.send('Welcome to REST API with Node.js Tutorial!!');
// })
// app.get('/login', (req, res) => {
//     res.statusCode = 200;
//     res.send('Welcome to REST API with Node.js Tutorial!!');
// });
app.use("/v1", teacherRoute)


// app.get('/sample', async (req, res) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.send({ data: { name: "Anand" }, status: true });
// });

// app.post('/login', async (req, res) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.send({ data: { name: "Anand" } });
// });
app.listen(5000, function () {
    console.log('Dev app listening on port 5000!');
});
// conn.sync({
//     logging: console.log,
//     force: false
// }).then(() => {
//     console.log("Database connected successfully!");
//     const port = 8080;
//     app.listen(port, () => console.log(`Listening on port ${port}..`));
// }).catch(err => {
//     console.log("Database not connected!!!: " + err);
// })




