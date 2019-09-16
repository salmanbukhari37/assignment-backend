var mongoose = require("mongoose");

// connection with mongodb
const dbPath = "mongodb://localhost:27017/iagility";

mongoose.connection.openUri(dbPath, { useNewUrlParser: true });

mongoose.connection.on("connected", () => {
  console.log("Connected to DB");
});

mongoose.connection.on("error", err => {
  if (err) console.log(`Error while connecting to DB ${err}`);
});
