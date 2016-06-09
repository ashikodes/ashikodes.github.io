var app = require('./config/express')(),
    port = process.env.PORT || 3300;

app.listen( port, function (err) {
  if (err) {
    return err;
  }
  console.log('App started on port: ' + port);
});

module.exports = app;
