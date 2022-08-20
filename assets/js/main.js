const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");
const navBarContainer = document.querySelector("#navBarContainer");

hamburger.onclick = function () {
  navBar.classList.toggle("active");
};

function addListenerMulti(element, eventNames, listener) {
  var events = eventNames.split(' ');
  for (var i = 0, iLen = events.length; i < iLen; i++) {
    element.addEventListener(events[i], listener, false);
  }
}

addListenerMulti(window, 'scroll resize', function () {
  let newWidth = window.innerWidth;
  let scroll = window.scrollY;
  if (scroll > 100) {
    console.log(scroll);
    navBarContainer.style.height = "150px";
    navBarContainer.style.transition = "2s";

  } else {
    navBarContainer.style.height = "100px";
    navBarContainer.style.transition = "2s";
  }

});

