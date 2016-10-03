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
  var formData = urlize(msgObj);
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "sendForm.php" + formData, true);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      showAlert(this.responseText);
      document.querySelector('form').reset()
    }
    else {
      showAlert('<div class="alert error">Sorry, there was an error sending your message. Please try again.</div>');
    }
  };
  xhttp.send();
};

function showAlert(message) {
  var alertDiv = document.getElementById('alert');
  alertDiv.innerHTML = message;
  alertDiv.classList.add('displayed');
  setTimeout(function() {
    alertDiv.classList.remove('displayed');
  }, 5000);
}

function urlize(dataObj) {
  if (typeof dataObj != 'object') return undefined;
  var returnString = "?";
  Object.keys(dataObj).forEach(function(key) {
    returnString += encodeURI(key + "=" + dataObj[key]).replace(/[&=]/g, '*').replace('*', '=') + '&';
  });
  returnString = returnString.substring(0, returnString.length - 1);
  return returnString;
}