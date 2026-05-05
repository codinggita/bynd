const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Sovereign DB Node Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Sovereign DB Connection Failed: ${err.message}`);
    throw err;
  }
};

module.exports = connectDB;
