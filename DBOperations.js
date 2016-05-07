/**
 * Created by user-pc on 5/7/2016.
 */
var dbModel = require('./DBModel');

var CreateSystemUser = function(username, password, resourceList, callback)
{
    var resList = JSON.stringify(resourceList);

    var user = dbModel.User.build({

        Username: username,
        Password: password,
        ResourceList: resList
    });

    user
        .save()
        .then(function (result)
        {
            callback(null, result);

        }).catch(function(err)
        {
            callback(err, null);
        })
};

module.exports.CreateSystemUser = CreateSystemUser;