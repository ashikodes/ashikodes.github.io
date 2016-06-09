var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    appDir = path.dirname(require.main.filename),
    app = express();
    
module.exports = function() {
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(path.join(appDir + '/public')));
  app.get('/', function(req, res) {
    res.sendFile(appDir + '/public/index.html');
  });

  // require('../app/routes/')(app);
  return app;
};