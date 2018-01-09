//Toggle menu;
var display_menu = true;
var menu = document.getElementById('menu')
var expand_arrow_menu = document.getElementById('menu_expand');
menu_items = menu.children;
var menu_items_length = menu_items.length

function toggle_menu() {
    display_menu = !display_menu;
    if (display_menu) {
        menu.style.height = '300px';
        display_menu_items = 'inline';
        timeout = 50;
        expand_arrow_menu.innerHTML = '-'
    } else {
        menu.style.height = '25px';
        display_menu_items = 'none';
        timeout = 50;
        expand_arrow_menu.innerHTML = '+';
    }
    for (n = 1; n < menu_items_length; n++) {
        console.log(menu_items[n]);
        menu_items[n].style.display = display_menu_items;
    }
}
