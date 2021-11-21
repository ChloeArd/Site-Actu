import '@fortawesome/fontawesome-free/js/all.js';
import {AddInputs} from "./AddInputs";
import {AddArticle} from "./AddArticle";
import { isWebUri } from 'valid-url';

export const Button = function (theme_dark, theme) {
    this.themeDark = theme_dark;


    // display a input for add a article
    this.mode = function () {
        let mode = document.createElement("button");
        mode.id = "modeNight";
        mode.classList = "button";
        mode.innerHTML = "<i class=\"fas fa-moon\"></i>";
        document.getElementById("containerButton").appendChild(mode);

        let modeNight = document.getElementById("modeNight");
        let addInput = document.getElementById("addInput");

        if (theme === theme_dark) {
            modeNight.innerHTML = "<i class=\"fas fa-sun\"></i>";
            modeNight.classList += theme_dark;
            addInput.classList += theme_dark;
            document.body.classList += theme_dark;
            if (document.getElementById("title")) {
                document.getElementById("title").classList = theme_dark;
            }
        }
        else {
            modeNight.innerHTML = "<i class=\"fas fa-moon\"></i>";
            modeNight.classList = "button ";
            addInput.classList = "button ";
            document.body.classList = "";
            if (document.getElementById("title")) {
                document.getElementById("title").classList = "";
            }
        }

        modeNight.addEventListener("click", function () {
            if (getCookie("theme") === theme_dark) {
                setCookie('theme', 'light');
                modeNight.innerHTML = "<i class=\"fas fa-moon\"></i>";
                modeNight.classList = "button ";
                addInput.classList = "button ";
                document.body.classList = "";
                if (document.getElementById("title")) {
                    document.getElementById("title").classList = "";
                }
            }
            else {
                setCookie('theme', 'dark-theme');
                modeNight.innerHTML = "<i class=\"fas fa-sun\"></i>";
                modeNight.classList += theme_dark;
                addInput.classList += theme_dark;
                document.body.classList += theme_dark;
                if (document.getElementById("title")) {
                    document.getElementById("title").classList = theme_dark;
                }
            }
        });
    };

    // display a input for add a article
    this.add = function () {
        let add = document.createElement("button");
        add.id = "addInput"
        add.classList = "button";
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

    this.addArt = function () {
        let add = document.createElement("button");
        add.id = "addArticle"
        add.classList = "button";
        add.innerHTML = "Ajouter";
        document.getElementById("containerAdd").appendChild(add);

        document.getElementById("addArticle").addEventListener("click", function () {
            let valueAuthor = document.getElementById("inputAuthor").value;
            let valueTitle = document.getElementById("inputTitle").value;
            let valueImage = document.getElementById("inputImage").value;
            let valueContent = document.getElementById("textareaContent").value;

            // get the date
            let dateNow = new Date();
            let dateNow1 = dateNow.toLocaleDateString();

            if (valueAuthor !== "" && valueTitle !== "" && valueImage !== "" && valueContent !== "") {
                if (isWebUri(valueImage)) {
                    let addArticle = new AddArticle(valueAuthor, valueTitle, valueImage, valueContent, dateNow1);
                    addArticle.addArticle();

                    document.getElementById("inputAuthor").value = "";
                    document.getElementById("inputTitle").value = "";
                    document.getElementById("inputImage").value = "";
                    document.getElementById("textareaContent").value = "";
                }
                else {
                    alert("L'URL de l'image est invalide !");
                }
            }
            else {
                alert("Tous les champs ne sont pas complétés !");
            }
        })
    }
}



function setCookie(name, value) {
    let d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

export function getCookie(cname) {

    let theme = cname + "=";
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
