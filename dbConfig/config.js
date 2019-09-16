var mongoose = require("mongoose");

// connection with mongodb
const dbPath = "mongodb://localhost:27017/assignment-db";

mongoose.connection.openUri(dbPath, { useNewUrlParser: true });

mongoose.connection.on("connected", () => {
  console.log("Connected to DB");
});

mongoose.connection.on("error", err => {
  if (err) console.log(`Error while connecting to DB ${err}`);
});

// mongoose.connection.openUri(
//   "mongodb://salmanbukhari:STep37$$@cluster0-shard-00-00-slpu7.mongodb.net:27017,cluster0-shard-00-01-slpu7.mongodb.net:27017,cluster0-shard-00-02-slpu7.mongodb.net:27017/test?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin",
//   { useNewUrlParser: true }
// );
// mongoose.connection.on("connected", () => {
//   console.log("coonected To db ");
// });
