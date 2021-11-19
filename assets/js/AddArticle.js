
/*créer un article a l'aide d'une api voir dans moodle*/

export let tableArticle = [];

export const AddArticle = function (author, title, image, content, date) {
    this.author = author;
    this.title = title;
    this.image = image;
    this.content = content;
    this.date = date;

    // display a input for add a article
    this.addArticle = function () {
        let container = document.getElementById("containerArticle");
        let x = tableArticle.length;

        // a article
        let containerArt = document.createElement("div");
        containerArt.classList = "containerArt";
        document.getElementById("containerArticle").prepend(containerArt);

        // contains the information
        let containerInfo = document.createElement("div");
        containerInfo.classList = "containerInfo";
        containerArt.append(containerInfo);

        // create a author
        let author = document.createElement("p");
        author.innerHTML = this.author;
        author.classList = "author";
        containerInfo.append(author);

        let title = document.createElement("h1");
        title.innerHTML = this.title;
        containerInfo.append(title);

        // contains image
        let containerImage = document.createElement("div");
        containerImage.classList = "containerImage";
        containerArt.append(containerImage);

        // create a image
        let image = document.createElement("img");
        image.src = this.image;
        image.alt = this.title;
        containerImage.append(image);

    };
}
