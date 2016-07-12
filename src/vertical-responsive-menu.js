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

  var menu = document.getElementById("js-menu");
  var subnavs = menu.querySelectorAll('.menu--item__has_sub_menu');    

  // Toggle menu click
  querySelector('.toggle_menu').onclick = function () {

    nav.classList.toggle('vertical_nav__opened');

    wrapper.classList.toggle('toggle-content');

  };


  // Minify menu on menu_minifier click
  querySelector('.collapse_menu').onclick = function () {

    nav.classList.toggle('vertical_nav__minify');

    wrapper.classList.toggle('wrapper__minify');

    for (var j = 0; j < subnavs.length; j++) {
      subnavs[j].classList.remove('menu--subitens__opened');
    }

  };


  // Open Sub Menu
  
  for (var i = 0; i < subnavs.length; i++) {
    
    if (subnavs[i].classList.contains('menu--item__has_sub_menu') ) {
      
      subnavs[i].querySelector('.menu--link').addEventListener('click', function (e) {

          for (var j = 0; j < subnavs.length; j++) {

            if(e.target.offsetParent != subnavs[j])
              subnavs[j].classList.remove('menu--subitens__opened');          

          }

          e.target.offsetParent.classList.toggle('menu--subitens__opened');

      }, false);

    }
  }


}, 100 );

