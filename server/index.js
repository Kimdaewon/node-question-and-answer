var express = require('express');
var path    = require('path');

var app = express();


app.set('view engine','jade');
app.set('views', __dirname + '/views');




//var database = require('./config/database')();

var db = require('./config')(app,express);
var base_url = path.normalize(__dirname+'/..');


app.use('/static', express.static(base_url+'/public/components'));
app.use('/public', express.static(base_url+'/public/custom'));


var routes = require('./routes')(app);
var port = process.env.PORT || 8080;
app.listen(port);
console.log('magic happened at'+port);



module.exports = function(){
	return app;
}





// seed 
/*
var seeds = require('./server/seeds/seeds');
seeds.set();
*/
// route 

