/*
=========================
  TODO:
=========================
*/

var tid = setInterval(function () {

  if (document.readyState !== 'complete') return;
  clearInterval(tid);


  // Toggle menu click
  document.getElementById('toggleMenu').addEventListener('click', function (e) {

    var nav = document.getElementById('verticalNav');
    var wrapper = document.getElementById('wrapper');
    var icons = document.getElementsByTagName('i');

    for (var i = 0; i < icons.length; i++) {
      icons[i].classList.toggle('menu__icon--isCollapsed');
    }

    nav.classList.toggle('vertical_nav__opened');
    wrapper.classList.toggle('toggle-content');

    e.preventDefault();

  });


  // Minify menu click
  document.getElementById('vertical_nav--minify_menu').addEventListener('click', function (e) {

    var nav = document.getElementById('verticalNav');
    var wrapper = document.getElementById('wrapper');

    nav.classList.toggle('vertical_nav__minify');
    wrapper.classList.toggle('wrapper__minify');

    e.preventDefault();

  });


  // Open Sub Menu
  // navRoot = document.getElementById("js-menu");
  // for (i = 0; i < navRoot.childNodes.length; i++) {
  //   node = navRoot.childNodes[i];
  //   if (node.className == "menu--item  menu--item__has_sub_menu") {
  //     node.onclick = function () {
  //       this.classList.toggle('menu--subitens__isOpened');
  //     }
  //   }
  // }


}, 100);