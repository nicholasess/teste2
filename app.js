var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session')
var index = require('./routes/index');
var admin = require('./routes/admin');
var api = require('./routes/api');

var app = express();
var swig = require('swig');
// This is where all the magic happens!
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', false);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(session({secret: 'keyboard cat'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
swig.setDefaults({ cache: false });

app.use('/', index);
app.use('/admin', admin);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

mongoose.connect("localhost:27017/bebae");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão ao DB!!!'));
db.once('open', function callback () {console.log('Conectado ao mongodb.');});



module.exports = app;
