function resolution_handler() {
    var checkbox = document.getElementById("high_res_input");
    var input =document.getElementById("enable_high_res");
    check = checkbox.checked;
    input.disabled = !check;
    document.getElementById('number_span').innerHTML = input.value;
}
resolution_handler()
