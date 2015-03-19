/*
==========================
Vertical Responsive Menu
==========================
*/

'use strict';


var tid = setInterval( function () {
  if ( document.readyState !== 'complete' ) return;
  clearInterval( tid );


  var querySelector = document.querySelector.bind(document);

  var nav = document.querySelector('.vertical_nav');
  var wrapper = document.querySelector('.wrapper');


  // Toggle menu click
  querySelector('.toggle_menu').onclick = function () {

    nav.classList.toggle('vertical_nav__opened');

    wrapper.classList.toggle('toggle-content');

  };


  // Minify menu on menu_minifier click
  querySelector('.collapse_menu').onclick = function () {

    nav.classList.toggle('vertical_nav__minify');

    wrapper.classList.toggle('wrapper__minify');

  };


  // Open Sub Menu
  var navRoot = document.getElementById("js-menu");
  var subnavs = navRoot.querySelectorAll('.menu--item__has_sub_menu');

  for (var i = 0; i < subnavs.length; i++) {

    if (subnavs[i].classList.contains('menu--item__has_sub_menu') ) {
      subnavs[i].addEventListener('click', function (event) {
        event.preventDefault();
        this.classList.toggle('menu--subitens__opened');
      }, false);
    }
  }


}, 100 );

