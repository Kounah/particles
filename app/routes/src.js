const path      = require('path');
const process   = require('process');
const { spawn } = require('child_process');

module.exports = function(app) {
  app.get('/bundle/build', (req, res) => {
    var webpackBuildProcess = spawn('webpack', [], {
      cwd: path.join(__dirname, '..', '..')
    });

    webpackBuildProcess.stderr.on('data', function(data) {
      process.stderr.write(data);
    });

    webpackBuildProcess.stdout.on('data', function(data) {
      process.stdout.write(data);
    });

    webpackBuildProcess.on('exit', code => {
      console.log('webpack build exited with code: ', code);

      res.sendFile(path.join(__dirname, '..', '..', 'dist', 'bundle.js'));
    });
  });

  app.get('/bundle/load', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'dist', 'bundle.js'));
  });
}