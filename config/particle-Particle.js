// this is the base config for all particles and should be included to all others
// do it like so
// let config = require('./particle-Particle);
// config.myCustomAttribute = 'my customattribute':
// module.exports = config;

module.exports = {
  x: "Math.rdm(0, window.innerWidth)",
  y: "Math.rdm(0, window.innerHeight)",
  debug: {
    xoffset: 20,
    yoffset: 0,
    drawAll: false, // is stronger than the other values, must be set to false that the other settings can take effect
    draw: [
      {
        use: true,
        text: "'type: ' + this.constructor.name;"
      }, { 
        use: false,
        text: "'[x: ' + this.x + ', y: ' + this.y + ']"
      }

    ]
  },
  style: {
    textStyle: 'white',
    fontSize: 12
  },
  preAct: function(particle) {
    // you can add custom functions here to be executed before a particle that is instanceof the configs corresponding Particle type comes to act
  },
  preDraw: function(particle, ctx) {
    // you can add custom functions here to be executed before a particle that is instanceof the configs corresponding Particle type comes to draw
  }
}