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
