/* =========================
    TODO: 
==========================*/

var tid = setInterval( function () {
    if ( document.readyState !== 'complete' ) return;
    clearInterval( tid );           

    document.getElementById('menuButton').addEventListener('click', function(e) {
        
        var nav = document.getElementById('verticalNav');
        var wrapper = document.getElementById('wrapper');

        nav.classList.toggle('toggle-menu');
        wrapper.classList.toggle('toggle-content');

        e.preventDefault();
    });


  }, 100 );
