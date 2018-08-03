module.exports = function(app) {
  require('./config')(app);
  require('./src')(app);
  require('./pages')(app);
}