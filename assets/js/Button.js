import '@fortawesome/fontawesome-free/js/all.js';
import {AddInputs} from "./AddInputs";
import {AddArticle} from "./AddArticle";
import { isWebUri } from 'valid-url';

export const Button = function () {

    // display a input for add a article
    this.mode = function () {
        let mode = document.createElement("button");
        mode.id = "modeNight"
        mode.innerHTML = "<i class=\"fas fa-moon\"></i>";
        document.getElementById("containerButton").appendChild(mode);
    };

    // display a input for add a article
    this.add = function () {
        let add = document.createElement("button");
        add.id = "addInput"
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
                    console.log(valueAuthor);
                    console.log(valueTitle);
                    console.log(valueImage);
                    console.log(valueContent);
                    console.log(dateNow1);

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
