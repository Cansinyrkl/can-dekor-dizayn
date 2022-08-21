const hamburger = document.querySelector(".hamburger");
const navBarContainer = document.querySelector("#navBarContainer");

hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
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
  if (scroll > 90) {
    console.log(scroll);
    navBarContainer.style.height = "90px";
    navBarContainer.style.transition = "0.8s";
    navBarContainer.style.borderBottomLeftRadius = "18%";
    navBarContainer.style.borderBottomRightRadius = "18%";


  } else {
    navBarContainer.style.height = "90px";
    navBarContainer.style.transition = "0.8s";
    navBarContainer.style.borderBottomLeftRadius = "0%";
    navBarContainer.style.borderBottomRightRadius = "0%";
  }

});

