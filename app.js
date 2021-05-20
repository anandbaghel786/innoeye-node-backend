
const express = require('express');
const app = express();
var userRoute = require("./api/routes/user.route");
const cors = require("cors");
const bodyParser = require('body-parser');
const conn = require("./db")
const c = require("./api/models/index")
const customer = require("./api/models/customer.model")
const order = require("./api/models/order.model")
conn("");
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
// app.use("/v1", teacherRoute)
app.use("/v1/", userRoute)
app.use("/v1/users", userRoute)
app.listen(5000, function () {
    console.log('Dev app listening on port 5000!');
});




