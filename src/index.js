const jquery = require('jquery');
const particles = require('./particles');

let Particle = particles.Particle;
window.particleTypes = particles;

let $ = jquery;

let drawInterval;
let actInterval; 
let canvas;
let ctx;

function addParticle(particle) {
  if(p instanceof Particle) {

  }
}

function setup() {
  window.particles = [];

  $(document.body).append(
    $(document.createElement('canvas'))
    .attr({
      id: 'background-canvas',
      height: window.innerHeight,
      width: window.innerWidth
    }).css({
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      'z-index': -1
    })
  )

  $('#background-canvas').attr({
    height: window.innerHeight,
    width: window.innerWidth
  });

  canvas = document.getElementById('background-canvas');
  if(canvas.getContext) {
    ctx = canvas.getContext('2d');
  }

  actInterval = setInterval(function() {
    window.particles.forEach(function(particle) {
      window.config.particle[particle.constructor.name].preAct(particle);
    })
  }, 1000 / window.config.renderer.framerate)

  drawInterval = setInterval(function() {

  }, 1000 / window.config.renderer.framerate)
}

function cleanup() {
  canvas.parentElement.removeChild(canvas);
  window.particles = [];
}

document.addEventListener('DOMContentLoaded', function() {
  $.ajax({
    method    : 'GET',
    url       : '/config/renderer',
    dataType  : 'json'
  }).done(function(data) {
    if(data.error) {
      console.error(data.error);
      return;
    }

    if(data.result) {
      if(window && !window.config) window.config = {};
      window.config.renderer = data.result;

      setup();
    }
  }).fail(function(err) {
    console.error(err);
  })
});

window.addEventListener('resize', function() {
  cleanup();
  setup();
});