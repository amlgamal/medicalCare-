const path = require("path");

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const dbConnection = require("./config/database");

dotenv.config({ path: "config.env" });

// Routes
const userRoute = require("./routes/userRoute")

// connect to dataBase
dbConnection();

// conect to express
const app = express();

// middleware
app.use(express.json());

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
  console.log(`mode : ${process.env.NODE_ENV}`);
}

// Mount Routes
app.use("/medicalcare/users", userRoute);

app.get("/", (req, res) => {
  res.send("Welcome to our API! smile you arrive ");
});

const port = process.env.PORT || 7000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}..`);
});
