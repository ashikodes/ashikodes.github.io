var app = require('./config/express')();

app.listen( 3300, function (err) {
  if (err) {
    return err;
  }
  console.log('App started on port: ' + 3300);
});

module.exports = app;
