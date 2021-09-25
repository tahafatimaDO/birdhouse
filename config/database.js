module.exports = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  //database: env('DATABASE_NAME', 'strapi'),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  }
}
  
