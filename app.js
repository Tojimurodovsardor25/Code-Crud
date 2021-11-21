const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const navinfoRouter = require("./routes/navinfo");


app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", navinfoRouter);

const start = () => {
  try {
    mongoose.connect(process.env.URI);
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "Consule error"));
    db.once("open", function () {
      console.log("Mongodb succes connection");
    });

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Express working ${port}, port`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
