import {getCookie} from "./Button";
import {modeArticleFullPage} from "./function";

let x = 0;

export const AddArticle = function (author, title, image, content, date, theme_dark) {
    this.author = author;
    this.title = title;
    this.image = image;
    this.content = content;
    this.date = date
    this.themeDark = theme_dark;

    // display a input for add a article
    this.addArticle = function () {
        // a article
        let containerArt = document.createElement("div");
        containerArt.id = "containerArt" + x;
        containerArt.classList = "containerArt";
        document.getElementById("containerArticle").prepend(containerArt);

        // contains the information
        let containerInfo = document.createElement("div");
        containerInfo.id = "containerInfo" + x;
        containerInfo.classList = "containerInfo";
        containerArt.append(containerInfo);

        // create a author
        let author = document.createElement("p");
        author.innerHTML = this.author + " - " + this.date;
        author.classList = "author";
        containerInfo.append(author);

        // create a title
        let title = document.createElement("h1");
        title.innerHTML = this.title;
        title.id = "title" + x;
        title.classList = "title ";
        containerInfo.append(title);

        // create a description / content
        let content = document.createElement("p");
        content.innerHTML = this.content;
        content.classList = "content";
        containerInfo.append(content);

        // contains image
        let containerImage = document.createElement("div");
        containerImage.id = "containerImage" + x;
        containerImage.classList = "containerImage";
        containerArt.append(containerImage);

        // create a image
        let image = document.createElement("img");
        image.id = "image" + x;
        image.src = this.image;
        image.alt = this.title;
        containerImage.append(image);

        let idClick = document.getElementById("containerArt" + x);

        // display an article on the same page
        idClick.addEventListener("click", function () {
            let y = this.id;
            let recupId = y.replace("containerArt", "");

            for (let i = 0; i < 20; i++) {
                document.getElementById("containerArt" + i).style.display = "none";
                document.getElementById("containerArt" + recupId).style.display = "flex";
            }

            if (getCookie("theme") === theme_dark) {
                modeArticleFullPage(recupId, "containerArt absolute flexColumnR black", "title " + theme_dark);
            }
            else {
                modeArticleFullPage(recupId, "containerArt absolute flexColumnR", "title");
            }
            document.getElementById("containerInfo" + recupId).classList += " width100";
            document.getElementById("containerImage" + recupId).classList += " width100";
            document.getElementById("image" + recupId).classList = "image1";

        });

        x++;
    };
}
