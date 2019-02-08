function changeContent() {


    function changePhotos() {
        const JATEUSZ_PHOTO_URL = "https://z-p3-scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/46170045_723043544736253_8450186384936796160_n.jpg?_nc_cat=106&_nc_ht=z-p3-scontent-waw1-1.xx&oh=880f1071415abe1985f0091e09b9a6ad&oe=5CF364C6";
        let personalConversationPhotos = Array.prototype.filter.call(document.getElementsByClassName("img"), photo => photo.className === "img");
        let groupConversationPhotoDivs = Array.prototype.filter.call(document.querySelectorAll('[style*=background-image]'), photo => photo.className === "");

        Array.prototype.forEach.call(personalConversationPhotos, photo => photo.src = JATEUSZ_PHOTO_URL);
        Array.prototype.forEach.call(groupConversationPhotoDivs, photoDiv => {
            photoDiv.style.backgroundImage = 'url("' + JATEUSZ_PHOTO_URL + '")';
        });
    }


    function changeConversationsNames() {
        const JATEUSZ_NAME = "Jateusz Machniak";
        let spans = document.querySelectorAll('[id*="row_header_id"] span');

        Array.prototype.forEach.call(spans, span => span.innerHTML = JATEUSZ_NAME);
    }

    setInterval(function () {
        changePhotos();
        changeConversationsNames();
    }, 1000);
}


window.onload = changeContent();
