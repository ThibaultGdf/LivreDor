module.exports = {
    HOST: "localhost",
    USER: "thibaultgodefroy",
    PASSWORD: "password",
    DB: "livredor",
    DATABASE_URL: "",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };