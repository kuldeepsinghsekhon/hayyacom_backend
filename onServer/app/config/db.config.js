module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "1201201200",
    DB: "hayyacom",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };