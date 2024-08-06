const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("Db connection established"))
    .catch((error) => {
      console.log("Db connnction unsuccessful");
      console.error(error);
      process.exit(1);
    });
};
