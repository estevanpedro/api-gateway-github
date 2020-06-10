"use strict";
// import cors from "cors";
// import Routers from "../../routes/index";
var express = require("express");
// var path = require("path");
var axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;
// const url = 'https://api.github.com';
app.listen(PORT, function () {
    console.log('app started');
});
// route our app
app.get('/', function (req, res) {
    res.send('hello worldx!');
});
// app.get('/', (req: any, res: any) => {
//     console.log('print');
//     // axios.get(url + '/users/estevanpedro')
//     //     .then(function (response) {
//     //         console.log('then response: ', response);
//     //     })
//     //     .catch(function (error) {
//     //         console.log('catch');
//     //         console.log(error);
//     //     })
//     //     .finally(function () {
//     //         console.log('finallyx');
//     //         // always executed
//     //     });
//     res.send('running');
// });
// app.use(cors());
// if (process.env.NODE_ENV !== "test") {
//     app.use(logger("dev"));
//   }
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
//   app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
// app.use("/users", Routers);
// export default app;
// app.listen(PORT, (err: any) => {
//     if (err) {
//         return console.error(err);
//     }
//     return console.log(`server is listening on ${PORT}`);
// });
// app.listen(PORT, function () {
//     console.log('app started');
// });
