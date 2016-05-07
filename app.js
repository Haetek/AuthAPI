/**
 * Created by user-pc on 5/7/2016.
 */
var restify = require('restify');
var dbOps = require('./DBOperations.js');

var server = restify.createServer({
    name: 'localhost',
    version: '1.0.0'
});

restify.CORS.ALLOW_HEADERS.push('authorization');
server.use(restify.CORS());
server.use(restify.fullResponse());
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.post('/Authentication/API/:version/Auth/Register', function(req, res, next)
{
    try
    {
        var username = req.body.Username;
        var password = req.body.Password;
        var resList = req.body.ResourceList;

        dbOps.CreateSystemUser(username, password, resList, function(err, resp)
        {
            res.end('DONE');
        })
    }
    catch(ex)
    {
        res.end(ex.Message);

    }

    return next();

});




server.listen(8870, '127.0.0.1', function () {
    console.log('%s listening at %s', server.name, server.url);
});