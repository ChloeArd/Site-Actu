
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

        let containerArt = document.createElement("div");
        containerArt.classList = "containerArt";
        document.getElementById("containerArticle").prepend(containerArt);

        let containerInfo = document.createElement("div");
        containerInfo.classList = "containerInfo";
        containerArt.append(containerInfo);

        let containerImage = document.createElement("div");
        containerImage.classList = "containerImage";
        containerArt.append(containerImage);

    };
}
