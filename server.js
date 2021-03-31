const dotenv = require('dotenv').config({ path: './config.env' });

const app = require('./app');
const connectToDB = require('./config/db');

const PORT = process.env.PORT || 5000;
app.listen(5000, async () => {
  console.log(`App Running On port: ${PORT}`);
  await connectToDB();
});
