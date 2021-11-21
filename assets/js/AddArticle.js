
/* créer un article a l'aide d'une api voir dans moodle*/

let x = 0;

export const AddArticle = function (author, title, image, content, date) {
    this.author = author;
    this.title = title;
    this.image = image;
    this.content = content;
    this.date = date;

    // display a input for add a article
    this.addArticle = function () {
        let container = document.getElementById("containerArticle");

        // a article
        let containerArt = document.createElement("div");
        containerArt.classList = "containerArt";
        containerArt.id = "containerArt" + x;
        document.getElementById("containerArticle").prepend(containerArt);

        // contains the information
        let containerInfo = document.createElement("div");
        containerInfo.classList = "containerInfo";
        containerArt.append(containerInfo);

        // create a author
        let author = document.createElement("p");
        author.innerHTML = this.author + " - " + this.date;
        author.classList = "author";
        containerInfo.append(author);

        let title = document.createElement("h1");
        title.innerHTML = this.title;
        title.id = "title";
        containerInfo.append(title);

        let content = document.createElement("p");
        content.innerHTML = this.content;
        content.classList = "content";
        containerInfo.append(content);

        // contains image
        let containerImage = document.createElement("div");
        containerImage.classList = "containerImage";
        containerArt.append(containerImage);

        // create a image
        let image = document.createElement("img");
        image.src = this.image;
        image.alt = this.title;
        containerImage.append(image);

        let idClick = document.getElementById("containerArt" + x);
        idClick.addEventListener("click", function () {
            // Faire que la ou je clique prenne tous l'ecran grace a un absolute et cache les autre articles en prenant toutes la page

            idClick.classList = "containerArt absolute";

            alert("Tu as cliqué sur un article");
        });

        x++;
    };
}
