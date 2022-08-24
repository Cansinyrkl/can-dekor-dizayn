const hamburger = document.querySelector(".hamburger");
const navBarContainer = document.querySelector("#navBarContainer");
const above = document.querySelector("#above");
const productDiv = document.getElementById("#productDiv")

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
  if (scroll > 220) {
    console.log(scroll);
    navBarContainer.style.height = "100px";
    navBarContainer.style.transition = "0.4s";
    navBarContainer.style.borderBottomLeftRadius = "19%";
    navBarContainer.style.borderBottomRightRadius = "19%";
    above.style.visibility = "visible";

  } else {
    navBarContainer.style.height = "90px";
    navBarContainer.style.transition = "0.6s";
    navBarContainer.style.borderBottomLeftRadius = "0%";
    navBarContainer.style.borderBottomRightRadius = "0%";
    above.style.visibility = "hidden";

  }

});


const onload = () => {
  const div = document.getElementById("modalDiv");
  for (let i = 1; i <= 27; i++) {
    axios.get(`productModals/PModal${i}.html`).then((res) => {
      const data = res.data;
      div.innerHTML += data;
    })
  }
}


const products = [
  {
    id: 1,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal1",
    imgSrc: "./assets/img/product img/ahşapS1.jpeg",
    imgAlt: "aaa",
  },
  {
    id: 2,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal2",
    imgSrc: "./assets/img/product img/ahşapS2.jpeg",
    imgAlt: "aaa",
  },
  {
    id: 3,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal3",
    imgSrc: "./assets/img/product img/ahşapS3.jpeg",
    imgAlt: "Resim",
  },
]


const productList = (productL) => `${productL.id} ${productL.name} ${productL.description} ${productL.databsTarget} ${productL.imgSrc} ${productL.imgAlt}`;

document.getElementById("productDiv").innerHTML = productList;