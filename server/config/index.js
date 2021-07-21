require('dotenv').config();


module.exports = {
  development: {
    sitename: 'Development phase',
    database: {dsn: process.env.DEVELOPMENT_DB_DSN}
  },
  production: {
    sitename: 'Production phase',
    database: {dsn: process.env.PRODUCTION_DB_DSN},
  }
};