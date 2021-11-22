
export function modeArticleFullPage(recupId, class1, class2) {
    document.getElementById("containerArt" + recupId).classList = class1;
    if (document.getElementById("title" + recupId)) {
        document.getElementById("title" + recupId).classList = class2;
    }
}

export function themeChanges() {

}