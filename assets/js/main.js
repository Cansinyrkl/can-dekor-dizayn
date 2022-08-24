const hamburger = document.querySelector(".hamburger");
const navBarContainer = document.querySelector("#navBarContainer");
const above = document.querySelector("#above");
const productDiv = document.getElementById("productDiv")

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
    imgStyle: "",
  },
  {
    id: 2,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal2",
    imgSrc: "./assets/img/product img/ahşapS2.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 3,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal3",
    imgSrc: "./assets/img/product img/ahşapS3.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 4,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal4",
    imgSrc: "./assets/img/product img/ahşapS4.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 5,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal5",
    imgSrc: "./assets/img/product img/ahşapS5.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 6,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal6",
    imgSrc: "./assets/img/product img/ahşapS6.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 7,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal7",
    imgSrc: "./assets/img/product img/ahşapS7.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 8,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal8",
    imgSrc: "./assets/img/product img/ahşapS8.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 9,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal9",
    imgSrc: "./assets/img/product img/ahşapS9.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 10,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal10",
    imgSrc: "./assets/img/product img/ahşapS10.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 11,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal11",
    imgSrc: "./assets/img/product img/ahşapS11.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 12,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal12",
    imgSrc: "./assets/img/product img/ahşapS12.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 13,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal13",
    imgSrc: "./assets/img/product img/ahşapS13.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 14,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal14",
    imgSrc: "./assets/img/product img/ahşapS14.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 15,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal15",
    imgSrc: "./assets/img/product img/ahşapS15.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 16,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal16",
    imgSrc: "./assets/img/product img/ahşapS16.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 17,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal17",
    imgSrc: "./assets/img/product img/ahşapS17.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 18,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal18",
    imgSrc: "./assets/img/product img/ahşapS18.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 19,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal20",
    imgSrc: "./assets/img/product img/ahşapS19.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 20,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal21",
    imgSrc: "./assets/img/product img/ahşapS20.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 21,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal22",
    imgSrc: "./assets/img/product img/ahşapS21.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 22,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal23",
    imgSrc: "./assets/img/product img/ahşapS22.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 23,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal24",
    imgSrc: "./assets/img/product img/ahşapS23.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 24,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal25",
    imgSrc: "./assets/img/product img/ahşapS24.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 25,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal26",
    imgSrc: "./assets/img/product img/ahşapS25.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 26,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#PModal27",
    imgSrc: "./assets/img/product img/ahşapS26.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },

]


products.map((product) => {
  productDiv.innerHTML +=
    `
  <div class="card" data-bs-toggle="modal" data-bs-target="${product.databsTarget}" >
  <img src="${product.imgSrc}" alt="${product.imgAlt}" style="${product.imgStyle}" />
  <div class="container">
  <h4 class="text-center"><b>${product.name}</b></h4>
  <p class="text-center">${product.description}</p>
  </div>
</div>
`
})



