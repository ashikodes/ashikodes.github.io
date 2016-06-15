var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    appDir = path.dirname(require.main.filename),
    app = express(),
    transporter = require("nodemailer").createTransport();
    
module.exports = function() {
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(path.join(appDir + '/public')));
  app.get('/', function(req, res) {
    res.render(appDir + '/public/index.html');
  });
  app.post('/sendMail', function(req, res) {
    var data = req.body;
    transporter.sendMail({
      from: "ashikodi.com.ng ✔ <no-reply@ashikodi.com.ng>",
      to: process.env.OWNER_MAIL,
      subject: data.subject + ' from ' + data.name + ' - ' + data.email,
      text: data.message
    }, function(err, result) {
      if (err) {
        return err;
      }
      console.log(result);
      res.status(200).redirect('http://www.ashikodi.com.ng');
    });
  });
  return app;
};