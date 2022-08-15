const navBar = document.getElementById("navbar-example2");
const logo = document.getElementById("logo");
const accordionExample = document.getElementById("accordionExample");

function addListenerMulti(element, eventNames, listener) {
  var events = eventNames.split(" ");
  for (var i = 0, iLen = events.length; i < iLen; i++) {
    element.addEventListener(events[i], listener, false);
  }
}

addListenerMulti(window, "scroll resize", function () {
  let scrollY = this.scrollY;
  let clientWidth = this.innerWidth;
  if (scrollY > 50) {
    navBar.style.height = "100px";
    navBar.style.background = "black";
    logo.style.height = "80px";
  } else {
    navBar.style.height = "155px";
    navBar.style.background = "#5b1a1e";
    logo.style.height = "130px";
  }
});
addListenerMulti(window, "scroll resize", function () {
  let clientWidth = this.innerWidth;
  if (innerWidth > 750) {
    navBar();
  } else {
    navBar.style.height = "155px";
    logo.style.height = "130px";
  }
});
