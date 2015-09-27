var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var React = require('react');
var Router = require('react-router');
var routes = require('./app/routes');

var config = require('./config');
var mongoose = require('mongoose');
var Episode = require('./models/episode');

var app = express();

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
	console.info('Error: Could not connect to MongoDB. Running mongod?');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/live/getcurrentepisode', function(req, res, next) {
	Episode.find().limit(1).sort({$natural: -1}).exec(function(err, episode){
		res.send(episode);
	});
});

app.get('/live/create', function(req, res, next) {
	var numEpisodes = Episode.count();
	var episode = new Episode();
	episode.save(function(err){
		if(err) return next(err);
		res.send({message: "a new episode was added!"});
	});
});

app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    var html = React.renderToString(React.createElement(Handler));
    res.render('index', {html: html});
  });
});

var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket){ 
	onlineUsers++;
	console.log('connection received');
	io.sockets.emit('onlineUsers', {onlineUsers: onlineUsers});

	socket.on('disconnect', function() {
		onlineUsers--;
		io.sockets.emit('onlineUsers', {onlineUsers: onlineUsers});
	});
});

server.listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
}); 