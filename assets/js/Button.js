import '@fortawesome/fontawesome-free/js/all.js';
import {AddInputs} from "./AddInputs";
import {AddArticle} from "./AddArticle";

export const Button = function (theme_dark, theme) {
    this.themeDark = theme_dark;


    // display a input for add a article
    this.mode = function () {
        let mode = document.createElement("button");
        mode.id = "modeNight";
        mode.classList = "button ";
        mode.innerHTML = "<i class=\"fas fa-moon\"></i>";
        document.getElementById("containerButton").appendChild(mode);

        let modeNight = document.getElementById("modeNight");

        if (theme === theme_dark) {
            modeNight.innerHTML = "<i class=\"fas fa-sun\"></i>";
            modeNight.classList += theme_dark;
            document.body.classList += theme_dark;
            for (let i = 0; i < 20; i++) {
                if (document.getElementById("title" + i)) {
                    document.getElementById("title" + i).classList = "title " + theme_dark;
                }
            }
        }
        else {
            modeNight.innerHTML = "<i class=\"fas fa-moon\"></i>";
            modeNight.classList = "button ";
            document.body.classList = "";
            for (let i = 0; i < 20; i++) {
                if (document.getElementById("title" + i)) {
                    document.getElementById("title" + i).classList = "title ";
                }
            }
        }

        // When we click the theme changes
        modeNight.addEventListener("click", function () {
            if (getCookie("theme") === theme_dark) {
                setCookie('theme', 'light');
                modeNight.innerHTML = "<i class=\"fas fa-moon\"></i>";
                modeNight.classList = "button ";
                document.body.classList = "";
                for (let i = 0; i < 20; i++) {
                    if (document.getElementById("title" + i)) {
                        document.getElementById("title" + i).classList = "title ";
                    }
                }
            }
            else {
                setCookie('theme', 'dark-theme');
                modeNight.innerHTML = "<i class=\"fas fa-sun\"></i>";
                modeNight.classList += theme_dark;
                document.body.classList += theme_dark;
                for (let i = 0; i < 20; i++) {
                    if (document.getElementById("title" + i)) {
                        document.getElementById("title" + i).classList = "title " + theme_dark;
                    }
                }
            }
        });
    };

    // display a input for add a article
    this.add = function () {
        let add = document.createElement("button");
        add.id = "addInput"
        add.classList = "button ";
        add.innerHTML = "<i class=\"fas fa-plus\"></i>";
        document.getElementById("containerButton").appendChild(add);

        let click = 0;
        document.getElementById("addInput").addEventListener("click", function () {
            let addArticle = new AddInputs();
            if (click === 0) {
                // create inputs
                addArticle.createInputs();
                click++;
            }
            else if (click === 1){
                // remove the inputs
                document.getElementById("containerAdd").style.display = "none";
                click++;
            }
            else {
                // show the inputs
                document.getElementById("containerAdd").style.display = "flex";
                click = 1;
            }
        });
    };

    // displays 20 articles of a API
    this.articles = function () {
        let url = "http://api.mediastack.com/v1/news?access_key=6686f18aa11ae791d64637c0b67123f1&languages=fr";
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url)
        xhr.responseType = "json";

        xhr.onload = function () {
            let response = xhr.response;
            for (let i = 0; i < 20; i++) {
                let addArticle = new AddArticle(response['data'][i]['author'], response['data'][i]['title'], response['data'][i]['image'], response['data'][i]['description'], response['data'][i]['published_at'], theme_dark);
                addArticle.addArticle();
            }
        }
        xhr.send();
    }
}

// create a cookie
function setCookie(name, value) {
    let d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// get the cookie
export function getCookie(name) {
    let theme = name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');

    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(theme) == 0) {
            return c.substring(theme.length, c.length);
        }
    }
    return "";
}
