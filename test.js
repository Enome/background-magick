var fs = require('fs');
var bg = require('./');

var input = fs.createReadStream(__dirname + '/avatar.jpg');
var output = fs.createWriteStream(__dirname + '/result.png');
var composite = bg(__dirname + '/marker.png', '+1+1');

input.pipe(composite);
composite.pipe(output);

console.log('Check the result.png file.');
