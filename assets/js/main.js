const hamburger = document.querySelector(".hamburger");
const navBarContainer = document.querySelector("#navBarContainer");
const above = document.querySelector("#above");
const productDiv = document.getElementById("productDiv");
const productDiv1 = document.getElementById("productDiv1");
const btnShow = document.getElementById("btnShow");
const btnHide = document.getElementById("btnHide");
const btnShow1 = document.getElementById("btnShow1");
const btnHide1 = document.getElementById("btnHide1");
navBar = document.querySelector(".nav-bar");

const menuList = document.getElementById("menuList");
const menuLinkCalismalarimiz = menuList.children[0];
const menuLinkHakkımızda = menuList.children[1];
const menuLinkReferanslar = menuList.children[2];
const menuLinkIletisim = menuList.children[3];

menuLinkCalismalarimiz.onclick = () => {
  navBar.classList.toggle("active");
}
menuLinkHakkımızda.onclick = () => {
  navBar.classList.toggle("active");
}
menuLinkReferanslar.onclick = () => {
  navBar.classList.toggle("active");
}
menuLinkIletisim.onclick = () => {
  navBar.classList.toggle("active");
}
hamburger.onclick = function () {
  navBar.classList.toggle("active");
}

function addListenerMulti(element, eventNames, listener) {
  var events = eventNames.split(" ");
  for (var i = 0, iLen = events.length; i < iLen; i++) {
    element.addEventListener(events[i], listener, false);
  }
}

addListenerMulti(window, "scroll resize", function () {
  const width = window.innerWidth;
  let scroll = window.scrollY;
  if (scroll > 225 && width > 1000) {
    navBarContainer.style.height = "115px";
    navBarContainer.style.transition = "0.4s";
    navBarContainer.style.borderBottomLeftRadius = "42%";
    navBarContainer.style.borderBottomRightRadius = "42%";
    above.style.visibility = "visible";
  } else {
    navBarContainer.style.height = "90px";
    navBarContainer.style.transition = "0.6s";
    navBarContainer.style.borderBottomLeftRadius = "0%";
    navBarContainer.style.borderBottomRightRadius = "0%";
    above.style.visibility = "hidden";
  }
});









const PModal = () => {
  const div = document.getElementById("modalDiv");
  for (let i = 1; i <= 26; i++) {
    axios.get(`productModals/PModal${i}.html`).then((res) => {
      const data = res.data;
      div.innerHTML += data;
    });
  }
};
const PModal1 = () => {
  const div1 = document.getElementById("modalDiv1");
  for (let i = 1; i <= 26; i++) {
    axios.get(`productModals1/PModal${i}.html`).then((res) => {
      const data = res.data;
      div1.innerHTML += data;
    });
  }
};

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
];
const products1 = [
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
];

const kesilen1 = products.slice(0, 4);
const kesilen2 = products.slice(5, 15);
const kesilen3 = products.slice(15);
const kesilen4 = products1.slice(0, 4);
const kesilen5 = products1.slice(5, 15);
const kesilen6 = products1.slice(15);
let count = 0;

kesilen1.map((kesilen1) => {
  productDiv.innerHTML += `
    <div class="a-box" data-bs-toggle="modal"  data-bs-target="${kesilen1.databsTarget}">
    <div class="img-container">
        <div class="img-inner">
            <div class="inner-skew">
                <img
                    src="${kesilen1.imgSrc}"> alt="${kesilen1.imgAlt}"
            </div>
        </div>
    </div>
    <div class="text-container">
        <h3>${kesilen1.name}</h3>
        <div>
            ${kesilen1.description}
        </div>
    </div>
    `;
});


const btnGoster = () => {
  count++;
  if (count === 1) {
    kesilen2.map((kesilen2) => {
      productDiv.innerHTML += `
      <div class="a-box" data-bs-toggle="modal"  data-bs-target="${kesilen2.databsTarget}">
      <div class="img-container">
          <div class="img-inner">
              <div class="inner-skew">
                  <img
                      src="${kesilen2.imgSrc}"> alt="${kesilen2.imgAlt}"
              </div>
          </div>
      </div>
      <div class="text-container">
          <h3>${kesilen2.name}</h3>
          <div>
              ${kesilen2.description}
          </div>
      </div>
      `;
    });
  } else if (count === 2) {
    kesilen3.map((kesilen3) => {
      productDiv.innerHTML += `
      <div class="a-box" data-bs-toggle="modal"  data-bs-target="${kesilen3.databsTarget}">
      <div class="img-container">
          <div class="img-inner">
              <div class="inner-skew">
                  <img
                      src="${kesilen3.imgSrc}"> alt="${kesilen3.imgAlt}"
              </div>
          </div>
      </div>
      <div class="text-container">
          <h3>${kesilen3.name}</h3>
          <div>
              ${kesilen3.description}
          </div>
      </div>
      `;
    });
    count = 0;
    btnShow.style.display = "none";
    btnHide.style.display = "block";
  }
};

const btnGizle = () => {
  productDiv.innerHTML = "";

  kesilen1.map((kesilen1) => {
    productDiv.innerHTML += `
    <div class="a-box" data-bs-toggle="modal"  data-bs-target="${kesilen1.databsTarget}">
    <div class="img-container">
        <div class="img-inner">
            <div class="inner-skew">
                <img
                    src="${kesilen1.imgSrc}"> alt="${kesilen1.imgAlt}"
            </div>
        </div>
    </div>
    <div class="text-container">
        <h3>${kesilen1.name}</h3>
        <div>
            ${kesilen1.description}
        </div>
    </div>
    `;
  });
  btnShow.style.display = "block";
  btnHide.style.display = "none";
};


kesilen4.map((kesilen4) => {
  productDiv1.innerHTML += `
    <div class="a-box" data-bs-toggle="modal"  data-bs-target="${kesilen4.databsTarget}">
    <div class="img-container">
        <div class="img-inner">
            <div class="inner-skew">
                <img
                    src="${kesilen4.imgSrc}"> alt="${kesilen4.imgAlt}"
            </div>
        </div>
    </div>
    <div class="text-container">
        <h3>${kesilen4.name}</h3>
        <div>
            ${kesilen4.description}
        </div>
    </div>
    `;
});


const btnGoster1 = () => {
  count++;
  if (count === 1) {
    kesilen5.map((kesilen5) => {
      productDiv1.innerHTML += `
      <div class="a-box" data-bs-toggle="modal"  data-bs-target="${kesilen5.databsTarget}">
      <div class="img-container">
          <div class="img-inner">
              <div class="inner-skew">
                  <img
                      src="${kesilen5.imgSrc}"> alt="${kesilen5.imgAlt}"
              </div>
          </div>
      </div>
      <div class="text-container">
          <h3>${kesilen5.name}</h3>
          <div>
              ${kesilen2.description}
          </div>kesilen5
      </div>
      `;
    });
  } else if (count === 2) {
    kesilen6.map((kesilen6) => {
      productDiv1.innerHTML += `
      <div class="a-box" data-bs-toggle="modal"  data-bs-target="${kesilen6.databsTarget}">
      <div class="img-container">
          <div class="img-inner">
              <div class="inner-skew">
                  <img
                      src="${kesilen6.imgSrc}"> alt="${kesilen6.imgAlt}"
              </div>
          </div>
      </div>
      <div class="text-container">
          <h3>${kesilen6.name}</h3>
          <div>
              ${kesilen6.description}
          </div>
      </div>
      `;
    });
    count = 0;
    btnShow1.style.display = "none";
    btnHide1.style.display = "block";
  }
};

const btnGizle1 = () => {
  productDiv1.innerHTML = "";

  kesilen4.map((kesilen4) => {
    productDiv1.innerHTML += `
    <div class="a-box" data-bs-toggle="modal"  data-bs-target="${kesilen4.databsTarget}">
    <div class="img-container">
        <div class="img-inner">
            <div class="inner-skew">
                <img
                    src="${kesilen4.imgSrc}"> alt="${kesilen4.imgAlt}"
            </div>
        </div>
    </div>
    <div class="text-container">
        <h3>${kesilen4.name}</h3>
        <div>
            ${kesilen4.description}
        </div>
    </div>
    `;
  });
  btnShow1.style.display = "block";
  btnHide1.style.display = "none";
};