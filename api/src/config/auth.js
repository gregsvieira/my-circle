require('dotenv').config();

module.exports = {
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USERBD,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};
