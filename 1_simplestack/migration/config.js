
module.exports = {
  "development": {
    "username": process.env.DB_USERNAME || "postgres",
    "password": process.env.DB_PASSWORD || "postgres",
    "database": process.env.DB_DATABASE || "postgres",
    "host": process.env.DB_HOST || "database",
    "dialect": "postgres"
  }
}
