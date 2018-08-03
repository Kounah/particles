const fs    = require('fs');
const path  = require('path');

module.exports = function(app) {
  app.get('/app/:appName', (req, res) => {
    var p = path.join(__dirname, '..', 'templates', req.params.appName);
    if(fs.existsSync(p)) {
      res.sendFile(p)
    } else {
      res.sendStatus(404);
    }
  })
}