module.exports = {

    development: {
      client: 'pg',
      connection: {
        database: 'cluckr_dev',
        username: "jon",
        password: "thePass"
      },
      migrations: {
        tableName: "knex_migrations",
        /// this table will hold migration state information
        directory: "./db/migrations"
        // this property specifies which directory will hold our migration files.  
      }
    },
  };
  