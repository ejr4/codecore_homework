const knexfile = require("../knexfile.js");

// knex package exports a function. call this function and pass in
// the config from the knexfile with the config type you want to load.
const knex = require("knex")(knexfile["development"]);

module.exports = knex;

