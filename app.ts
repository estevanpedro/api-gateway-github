import cors from "cors";
import Routers from "./src/routes/index";
var express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use("/", Routers);

app.listen(PORT, (err: any) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${PORT}`);
});