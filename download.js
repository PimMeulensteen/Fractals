var button = document.getElementById('btn-download');
button.addEventListener('click', function(e) {
    d = new Date()
    button.setAttribute("download", 'fractal ' + d.getFullYear() + '-' + d.getMonth()+1 + '-' +
        d.getDate() + ' ' + d.getHours() + '.' + d.getMinutes() + '.' + d.getSeconds())
    var dataURL = ca.toDataURL('image/png');
    button.href = dataURL;
});
