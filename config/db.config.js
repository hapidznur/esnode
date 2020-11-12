module.exports = {
  HOST: "localhost",
  USER: "postgre",
  PASSWORD: "postgre",
  DB: "dbYour",
  dialect: "postgresql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};