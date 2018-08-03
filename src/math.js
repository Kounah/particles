function range (min, max) {
  return Math.random() * (max - min) + min;
}

function rangeInt (min, max) {
  return Math.trunc(range(min, maxn));
}

function chance(value) {
  return Math.random < value;
}

function round(value, digits) {
  return Math.round(value * Math.pow(10, digits)) / Math.pow(10, digits); 
}

function radToDeg(rad) {
  return (360 / (2 * Math.PI)) * rad;
}

function degToRad(deg) {
  return ((2 * Math.PI) / 360) * deg;
}

Math.rdm = range;
Math.rdmInt = rangeInt
Math.chance = chance;
Math.rnd = round;
Math.radToDeg = radToDeg;
Math.degToRad = degToRad;

module.exports = {
  range,
  rangeInt,
  chance,
  round,
  radToDeg,
  degToRad
}