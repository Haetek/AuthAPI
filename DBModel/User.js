/**
 * Created by user-pc on 5/7/2016.
 */
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('AUTH_Users', {
            Username: {type:DataTypes.STRING, primaryKey:true},
            Password: DataTypes.STRING,
            ResourceList: DataTypes.STRING
        }
    );


    return User;
};