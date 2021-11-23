import "./css/front.css";
import {Button} from "./js/Button";
import {getCookie} from "./js/function";

/*if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../service-worker.js').then(function(reg) {

        if(reg.installing) {
            console.log('Service worker installing');
        }
        else if(reg.waiting) {
            console.log('Service worker installed');
        }
        else if(reg.active) {
            console.log('Service worker active');
        }

    }).catch(function(error) {
        // registration failed
        console.log('Registration failed with ' + error);
    });
}*/


let dark_theme_class = 'dark-theme';
let theme = getCookie('theme');

let button = new Button(dark_theme_class, theme);

button.mode();
button.home();
button.articles();

