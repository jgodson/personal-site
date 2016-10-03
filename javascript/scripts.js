'use strict'

function closeMenu() {
  // close navigation if it is open
  if (document.getElementsByTagName('nav')[0].classList.length > 0) {
    document.getElementsByTagName('nav')[0].classList.remove('open');
    var icon = document.getElementById('nav-button').children[0];
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
}

function transition(destination) {
  destination = document.getElementById(destination);
  document.getElementById('container').style.opacity = 0;
  setTimeout(function() {
    var offset = destination.scrollTop || destination.offsetTop;
    window.scrollTo(0 , offset);
    document.getElementById('container').style.opacity = 1;
  }, 200);
  closeMenu();
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

function submitForm(event) {
	event.preventDefault();
  var msgObj = {
    name : document.getElementsByName('name')[0].value,
    email : document.getElementsByName('email')[0].value,
    phone : document.getElementsByName('phone')[0].value,
    comments : document.getElementsByName('message')[0].value
  }
	$.post("sendForm.php", msgObj, function(result) {
    showAlert(result);
  });
};

function showAlert(message) {
  var alertDiv = document.getElementById('alert');
  alertDiv.innerHTML = message;
  alertDiv.classList.add('displayed');
  setTimeout(function() {
    alertDiv.classList.remove('displayed');
  }, 5000);
}