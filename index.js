const express = require("express");
const app = express();
require("dotenv").config();
const logger = require("morgan");
const connectToMongoDB = require("./db/mongodb");
const cors = require("cors");

const corsOptions = {
  origin: "*",
  optionSuccessStatus: 200,
};

app.use(logger("dev"));
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const img = require("./routes/img");
app.use("/api/img", img);

const msg = require("./routes/msg");
app.use("/api/msg", msg);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);

  connectToMongoDB();
});