// console.log( 'PRODUCTION - DATABASE' );
// console.log( 'parse', parse );
// console.log( 'process.env.DATABASE_URL', process.env.DATABASE_URL );
// console.log( 'config', config );

// console.log( 'ENV VARS' );
// console.log( '---' );
//
// console.log( 'ROOT LEVEL' );
// console.log( 'DB_TEST1', process.env.DB_TEST1 );
// console.log( 'DB_TEST2', process.env.DB_TEST2 );
// console.log( 'DB_TEST3', process.env.DB_TEST3 );
// console.log( '---' );
//
// console.log( 'APP LEVEL' );
// console.log( 'DB_TEST4', process.env.DB_TEST4 );
// console.log( 'DB_TEST5', process.env.DB_TEST5 );
// console.log( 'DB_TEST6', process.env.DB_TEST6 );
// console.log( 'DB_TEST7', process.env.DB_TEST7 );
// console.log( '---' );

console.log( 'ENV VARS' );
console.log( '---' );
console.log( 'WEB SERVICE LEVEL' );
console.log( 'DATABASE_URL', process.env.DATABASE_URL );
console.log( 'DATABASE_HOSTNAME', process.env.DATABASE_HOSTNAME );
console.log( 'DATABASE_PORT', process.env.DATABASE_PORT );
console.log( 'DATABASE_NAME', process.env.DATABASE_NAME );
console.log( 'DATABASE_USERNAME', process.env.DATABASE_USERNAME );
console.log( '---' );

// *** //

const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = () => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false
        },
      },
      options: {}
    },
  },
});
