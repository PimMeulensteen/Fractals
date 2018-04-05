//sleep

// Canvas
size = 1000;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
canvas.width = size;
canvas.height = size;
buffer= generate_buffer(size);
// create imageData object
var idata = ctx.createImageData(size, size);

// set our buffer as source
idata.data.set(buffer);

// update canvas with new data
ctx.putImageData(idata, 0, 0);
