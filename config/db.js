const mongoose = require('mongoose');

const mongooseConnectionConfigObj = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, mongooseConnectionConfigObj);
    console.log('Connected to the mongodb...');
  } catch (error) {
    console.error(error);
    // Exit application with error
    process.exit(1);
  }
};

module.exports = connectToDB;
