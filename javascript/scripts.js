'use strict'

function transition(destination) {
  console.log(destination);
  destination = document.getElementById(destination);
  document.getElementById('container').style.opacity = 0;
  setTimeout(function() {
    var offset = destination.scrollTop || destination.offsetTop;
    window.scrollTo(0 , offset);
    document.getElementById('container').style.opacity = 1;
  }, 400);
}

function toggleMenu(thisElement) {
  var icon = thisElement.children[0];
  var navigation = document.getElementsByTagName('nav')[0];
  if (navigation.classList.length > 0) {
    navigation.classList.remove('open');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
  else {
    navigation.classList.add('open');
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  }
}
