function changeContent() {

    function changePhotos() {
        let photos = document.getElementsByClassName("img");

        for (let i = 0; i < photos.length; i++) {
            photos[i].src = "https://z-p3-scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/46170045_723043544736253_8450186384936796160_n.jpg?_nc_cat=106&_nc_ht=z-p3-scontent-waw1-1.xx&oh=880f1071415abe1985f0091e09b9a6ad&oe=5CF364C6";
        }
    }


    function changeConversationsNames() {

        function changeConversationNamesFor(ariaLabelTag){
            let spans = document.querySelectorAll('[aria-label="' + ariaLabelTag + '"] span');
            if (spans) {
                for (let i = 0; i < spans.length; i++) {
                    spans[i].innerHTML = "Jateusz Machniak";
                }
            }
        }

        changeConversationNamesFor("Lista konwersacji");
        changeConversationNamesFor("Conversation List");
        changeConversationNamesFor("Liste der Unterhaltungen");
    }

    setInterval(function () {
        changePhotos();
        changeConversationsNames()
    }, 1000);
}


window.onload = changeContent();
