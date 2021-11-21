import "./css/front.css";
import {Button} from "./js/Button";
import {getCookie} from "./js/Button";

let dark_theme_class = 'dark-theme';
let theme = getCookie('theme');

let button = new Button(dark_theme_class, theme);

button.add();
button.mode();


/*const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
});

xhr.open("GET", "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI?pageNumber=1&pageSize=10&withThumbnails=false&location=us");
xhr.setRequestHeader("x-rapidapi-host", "contextualwebsearch-websearch-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "295c2654b3mshfea991e404e656ep1a8222jsnd24204e876da");

xhr.send(data);*/