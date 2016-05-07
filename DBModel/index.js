/**
 * Created by user-pc on 5/7/2016.
 */

var Sequelize = require('sequelize');
var Config = require('config');

var dbType = Config.DATABASE.Type;
var database = Config.DATABASE.Database;
var dbuser = Config.DATABASE.User;
var dbpassword = Config.DATABASE.Password;
var dbport = Config.DATABASE.Port;
var dbhost = Config.DATABASE.Host;

var sequelize = new Sequelize(database, dbuser, dbpassword, {
    dialect:dbType, // or 'sqlite', 'postgres', 'mariadb'
    port:dbport, // or 5432 (for postgres)
    host:dbhost //host address
});

var models = ['User'];

models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname +'/'+ model);
});

module.exports.SequelizeConn = sequelize;