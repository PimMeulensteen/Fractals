//sleep

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Canvas
var ca = document.getElementById('canvas');
var ctx = ca.getContext("2d");
ca.width = window.innerWidth;
ca.height = window.innerHeight;
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.translate(canvas.width / 2, canvas.height / 2);
var progress = document.getElementById('progress');
running = false;
async function update_canvas() {

    if (running) {
        running = false;
        setTimeout(update_canvas, 40)
        return false
    }
    running = true;
    update_values();

    //Clears canvas
    ca.width = ca.width;

    if(check){
        value =  document.getElementById("enable_high_res").value;
        ca.width = value;
        ca.height = value;
    } else {
        ca.width = window.innerWidth;
        ca.height = window.innerHeight;
    }
        factor = Math.round(Math.min(canvas.width, canvas.height) / 4)

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.translate(canvas.width / 2, canvas.height / 2);

    for (var x = -.5 * canvas.width; x < .5 * canvas.width; x++) {
        if (!running) {
            break
        }
        progress.innerHTML = 'Progress: ' + (x + (.5 * canvas.width))+ '/' + canvas.width;
        for (var y = -.5 * canvas.height; y < .5 * canvas.height; y++) {
            result = (algorithm(x / factor, y / factor) / its) * 240;
            ctx.fillStyle = 'hsl(' + result + ',100%,50%)';
            ctx.fillRect(x, y, 1, 1);
        }
        await sleep(1);
    }
    ctx.stroke();
}


c = [0.69, 0.31632]

function update_values() {
    its = document.getElementById('its_input').value;
    c = [parseFloat(document.getElementById('real_input').value), parseFloat(document.getElementById('imag_input').value)];
}

function algorithm(x, y) {
    z = [x, y];
    i = its;
    while (abs(z) < 2 && i > 0) {
        i = i - 1;
        z = f(z, c)

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
