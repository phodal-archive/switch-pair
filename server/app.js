var restify         = require('restify');
var server          = restify.createServer();

var UserServices        = require('./services/user_services');
var PairServices        = require('./services/pair_services');
var get_response    = new UserServices();
var pair_response   = new PairServices();

server.use(restify.gzipResponse());
server.use(restify.bodyParser());
server.use(restify.acceptParser(['json', 'application/json']));
server.use(
    function crossOrigin(req,res,next){
        'use strict';
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        return next();
    }
);

server.get('/all/account', get_response.findAllAccount);
server.get('/account/id/:id', get_response.getAccountById);
server.get('/last', pair_response.findLastPair);

server.get('/', restify.serveStatic({
    directory: './',
    default: 'index.html'
}));

server.get(/\/?.*/, restify.serveStatic({
    directory: ''
}));


server.listen(9999, function () {
    'use strict';
    console.log('%s listening at %s', server.name, server.url);
});
