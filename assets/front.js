import "./css/front.css";
import {Button} from "./js/Button";
import {getCookie} from "./js/function";

let dark_theme_class = 'dark-theme';
let theme = getCookie('theme');

let button = new Button(dark_theme_class, theme);

button.mode();
button.home();
button.articles();