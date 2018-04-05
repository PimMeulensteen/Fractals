function mandelbrot(real,imag){
  original_real = real;
  original_imag = imag;
  its = 0
  while((real**2+imag**2) < 4 && its < 255) {
    its++;
    real = real**2 - imag**2 +  original_real;
    imag = 2 * real * imag + original_imag;
  }
  return its
}
