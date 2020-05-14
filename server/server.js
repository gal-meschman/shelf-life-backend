const express = require("express");
const bodyParser = require("body-parser");
const { mongoose } = require("./db/mongoose");
const config = require("./config.json");
const router = require("./routers/router");
const PORT = config.applicationPort || process.env.PORT;
const cors = require("cors");
const app = express();

const corsConfig = {
  credentials: true,
  origin: [`http://localhost: ${PORT}`, "http://localhost:3000"],
};

app.use(cors(corsConfig));

app.use(bodyParser.json());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Started on port ${PORT}`);
});
