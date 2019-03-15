var closeButton = document.querySelector('#cookies__content__button');
var container = document.querySelector('#cookies');

function setCookie() {
  var d = new Date();
  d.setTime(d.getTime() + (24*24*60*60*1000));
  var expires = 'expires=' + d.toUTCString();
  document.cookie = "expiration=true " + expires;
  container.style.display = 'none';
}

closeButton.addEventListener('click', setCookie);

function cookieExists() {
  return document.cookie.includes('expiration');
}

if (cookieExists()) {
    container.style.display = 'none';
}

 