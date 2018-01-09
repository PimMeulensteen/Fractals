//sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Canvas
var ca = document.getElementById('canvas');
ca.width = window.innerWidth;
ca.height = window.innerHeight;
factor = Math.round(Math.min(window.innerWidth, window.innerHeight) / 4)

async function update_canvas() {
    var ctx = ca.getContext("2d");
    ctx.translate(canvas.width / 2, canvas.height / 2);
    for (var x = -2 * factor; x < 2 * factor; x++) {
        for (var y = -2 * factor; y < 2 * factor; y++) {
            result = algorithm(x / factor, y / factor);
            console.log(algorithm(x / factor, y / factor))
            ctx.fillStyle = 'hsl(' + result + ',100%,50%)';
            ctx.fillRect(x, y, 1, 1);
        }
        await sleep(50);
    }
    ctx.stroke();
}


c = [0.18, -0.72]

function update_c() {
    c = [parseInt(document.getElementById('real_input').value), parseInt(document.getElementById('imag_input').value)];
}

function algorithm(x, y) {
    z = [x, y];
    i = 255;
    while (abs(z) < 2 && i > 0) {
        z = f(z, c)
        i--;
    }
    return i

}

function f(z, c) {
    return [z[0] * z[0] - z[1] * z[1] + c[0], 2 * z[0] * z[1] + c[1]];
}

function abs(z) {
    return Math.sqrt(z[0] * z[0] + z[1] * z[1]);
}




//Resize the window onchange
function resize() {
    //resize the canvas
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    //resize the circle
    factor = Math.round(Math.min(window.innerWidth, window.innerHeight) / 4)
}

window.onresize = resize;
