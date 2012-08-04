var fs = require('fs');
var spawn = require('child_process').spawn;

var bg = function (path, location) {

  var args = ['-geometry', location, '-', path, '-' ];
  var composite = spawn('composite', args);
  composite.stdin.pipe = composite.stdout.pipe.bind(composite.stdout);
  return composite.stdin;

};

module.exports = bg;
