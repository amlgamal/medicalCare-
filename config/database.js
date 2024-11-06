const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((con) => {
      console.log(`Database connected : ${con.connection.host}`);
    })
    .catch((err) => {
      console.log(`Error connecting to dataBase : ${err}`);
      process.exit(1);
    });
};

module.exports = dbConnection;
