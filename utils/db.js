const mongoose = require("mongoose");

// Connect to DB
async function connectToDb() {
  try {
    // ! Old Version
    // await mongoose.connect(
    //   `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-b5eo0qn-shard-00-00.poo9ipk.mongodb.net:27017,ac-b5eo0qn-shard-00-01.poo9ipk.mongodb.net:27017,ac-b5eo0qn-shard-00-02.poo9ipk.mongodb.net:27017/restful-api?ssl=true&replicaSet=atlas-q6w28t-shard-0&authSource=admin&retryWrites=true&w=majority`
    // );

    // ! New Version
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.poo9ipk.mongodb.net/restful-api`
    );
    console.log("Connected to DB!");
  } catch (e) {
    console.log(e);
  } finally {
    console.log("connectToDb function finishes running!");
  }
}

module.exports = { connectToDb };
