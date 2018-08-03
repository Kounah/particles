const jquery = require('jquery');
const mth = require('../math');

let config;

module.exports = class Particle {
  constructor(props) {
    this.loadconfig = this.loadconfig.bind(this);
    this.setup = this.setup.bind(this);

    this.loadconfig(config => {
      console.debug(config);

      this.x = props && props.x ? props.x : eval(config.x);
      this.y = props && props.y ? props.y : eval(config.y);

      this.setup(config);
    });
  }

  loadconfig(callback) {
    if(window) {
      if(window.config && window.config.particle && window.config.particle[this.constructor.name]) {
        callback(window.config[this.constructor.name]);
      } else {
        jquery.ajax({
          method    : 'GET',
          url       : '/config/particle-' + this.constructor.name,
          dataType  : 'json'
        }).done(function(data) {
          console.debug(data);

          if(!window.config) window.config = {};
          if(!window.config.particle) window.config.particle = {};

          if(data.error) {
            console.error(data.error);
            return;
          }

          if(data.result) {
            window.config.particle[this.constructor.name] = data.result;
            callback(data.result);
          }
        }).fail(function(err) {
          console.error(err);
        }) 
      }
    } 
  }

  setup(config) {
    // overwrite to do the actual setup when config has been loaded
  }

  act() {
    // overwrite to handle state transitions
  }

  draw(ctx) {
    // overwrite to handle this particles rendering
  }

  drawDebug(ctx) {
    this.loadconfig(config => {
      let lines = 0;
      ctx.fillStyle = config.style.textStyle;

      function drawLine(text) {
        ctx.fillText(text, this.x + config.debug.xoffset, this.y + config.debug.yoffset + (config.style.fontSize + 2) * lines);
        lines ++;
      }

      config.debug.draw.forEach(drawo => {
        if(config.debug.drawAll || drawo) {
          drawLine(eval(drawo.text));
        }
      });
    })
  }
}