/* =========================
    TODO: 
    ==========================*/

var tid = setInterval(function () {
    if (document.readyState !== 'complete') return;
    clearInterval(tid);

    document.getElementById('menuButton').addEventListener('click', function (e) {

        var nav = document.getElementById('verticalNav');
        var wrapper = document.getElementById('wrapper');
        var icons = document.getElementsByTagName('i');

        for (var i = 0; i < icons.length; i++) {
            icons[i].classList.toggle('menu__icon--isCollapsed');
        }
        nav.classList.toggle('toggle-menu');
        wrapper.classList.toggle('toggle-content');


        e.preventDefault();
    });

    navRoot = document.getElementById("js-menu");
    for (i = 0; i < navRoot.childNodes.length; i++) {
        node = navRoot.childNodes[i];
        if (node.className == "menu__item") {
            node.onclick = function () {
                this.classList.toggle('menu__subitens--isOpened');
            }
        }
    }


}, 100);