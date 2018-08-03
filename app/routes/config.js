// this does not configure anything, it just serves configuration files

module.exports = function(app) {
  
  app.get('/config/:configName', (req, res) => {
      try {
        res.json({
          result: require('../../config/' + req.params.configName),
          error: null
        })
      } catch (err) {
        res.json({
          result: null,
          error: err
        })
      }
  });

}