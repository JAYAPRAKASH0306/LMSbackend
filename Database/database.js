const mongo = require("mongoose");
require("dotenv").config()

exports.Database = () => {
  mongo
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log("Error in the Database connection", err));
};
