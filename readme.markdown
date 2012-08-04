# background-magick

Pipe an image to ImageMagick's composite to add the image onto a background.

## Api

```js
var bg = require('background-magick');
bg(path_to_background, cords);
```

## Example (test.js)

```js
var fs = require('fs');
var bg = require('./');

var input = fs.createReadStream(__dirname + '/avatar.jpg');
var output = fs.createWriteStream(__dirname + '/result.png');
var composite = gmarker(__dirname + '/marker.png', '+1+1');

input.pipe(composite);
composite.pipe(output);

console.log('Check the result.png file.');
```

# Tests

```sh
make test
```
