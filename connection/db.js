const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pataleankush12:vOWL8rrELLqZo0SL@form-cluster.hhv7p.mongodb.net/?retryWrites=true&w=majority&appName=form-cluster",

      {
        serverSelectionTimeoutMS: 30000,
      }
    );
    console.log(`Database is connected`);
  } catch (error) {
    console.log(`Database is not connected`);
  }
};
module.exports = connectDB;
