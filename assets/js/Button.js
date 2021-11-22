import '@fortawesome/fontawesome-free/js/all.js';
import {AddInputs} from "./AddInputs";
import {AddArticle} from "./AddArticle";
import {setCookie, getCookie} from "./function";

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
                    document.getElementById("title" + i).classList = "title ";
                    if (document.getElementById("containerArt" + i).classList['value'] === "containerArt absolute flexColumnR black"){
                        document.getElementById("containerArt" + i).classList = "containerArt absolute flexColumnR";
                    }
                }
            }
            else {
                setCookie('theme', 'dark-theme');
                modeNight.innerHTML = "<i class=\"fas fa-sun\"></i>";
                modeNight.classList += theme_dark;
                document.body.classList += theme_dark;
                for (let i = 0; i < 20; i++) {
                    document.getElementById("title" + i).classList = "title " + theme_dark;
                    if (document.getElementById("containerArt" + i).classList['value'] === "containerArt absolute flexColumnR"){
                        document.getElementById("containerArt" + i).classList = "containerArt absolute flexColumnR black";
                    }
                }
            }
        });
    };

    // home page button
    this.home = function () {
        let home = document.createElement("button");
        home.id = "home";
        home.classList = "button ";
        home.innerHTML = "<i class=\"fas fa-home\"></i>";
        document.getElementById("containerButton").appendChild(home);

        home.addEventListener("click", function () {
            location.reload();
        });
    }

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