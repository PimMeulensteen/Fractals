function generate_buffer(s) {
  var width = s,
    height = s,
    buffer = new Uint8ClampedArray(width * height * 4);

  array = new Array(s)
  w = s;
  h = s;
  for (var x = 0; x < s; x++) {
    array[x] = new Array(s)
  }
  for (var i = 0; i < s; i++) {
    for (var j = 0; j < s; j++) {
      var pos = (i * width + j) * 4;
      var n = mandelbrot(i/width*4-i/width*0.5, j/width*4-j/width*0.5);
      array[i][j] = n;
      buffer[pos] = n;
      buffer[pos+1] = n;
      buffer[pos+2] = n ;
      buffer[pos+3] = 255;

    }
  }
  console.log(array);
  return buffer;

}
