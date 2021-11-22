import {Button} from "./Button";

export const AddInputs = function () {

    // display a input for add a article
    this.createInputs = function () {
        let author = document.createElement("input");
        author.id = "inputAuthor";
        author.type = "text";
        author.placeholder = "Auteur";
        author.maxLength = "20";
        author.required = "required";
        document.getElementById("containerAdd").appendChild(author);

        let title = document.createElement("input");
        title.id = "inputTitle";
        title.type = "text";
        title.placeholder = "Titre";
        title.maxLength = "40";
        title.required = "required";
        document.getElementById("containerAdd").appendChild(title);

        let image = document.createElement("input");
        image.id = "inputImage";
        // A changer plus tard
        image.type = "url";
        image.placeholder = "URL de l'image";
        image.required = "required";
        document.getElementById("containerAdd").appendChild(image);

        let content = document.createElement("textarea");
        content.id = "textareaContent";
        content.placeholder = "Contenu...";
        content.required = "required";
        document.getElementById("containerAdd").appendChild(content);

        // button add a article
        let button = new Button();
        button.articles();
    };
}

/*
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
 */
