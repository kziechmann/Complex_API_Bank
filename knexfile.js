// Update with your config settings.
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5000/decentral_bank'
   },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5000/decentral_bank'
   },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
   }
  }
