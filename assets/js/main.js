const hamburger = document.querySelector(".hamburger");
const navBarContainer = document.querySelector("#navBarContainer");
const above = document.querySelector("#above");
const woodStand = document.getElementById("woodStand");
const maxsimaStand = document.getElementById("maxsimaStand");
const woodBtnGoster = document.getElementById("woodBtnGoster");
const woodBtnGizle = document.getElementById("woodBtnGizle");
const maxsimaBtnGoster = document.getElementById("maxsimaBtnGoster");
const maxsimaBtnGizle = document.getElementById("maxsimaBtnGizle");
const calismalarimiz = document.getElementById("calismalarimiz");
navBar = document.querySelector(".nav-bar");

const menuList = document.getElementById("menuList");
const menuLinkTrials = menuList.children[0];
const menuLinkAboutUs = menuList.children[1];
const menuLinkReference = menuList.children[2];
const menuLinkContact = menuList.children[3];

menuLinkTrials.onclick = () => {
  navBar.classList.toggle("active");
};
menuLinkAboutUs.onclick = () => {
  navBar.classList.toggle("active");
};
menuLinkReference.onclick = () => {
  navBar.classList.toggle("active");
};
menuLinkContact.onclick = () => {
  navBar.classList.toggle("active");
};
hamburger.onclick = function () {
  navBar.classList.toggle("active");
};

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
    navBarContainer.style.height = "100px";
    above.style.visibility = "visible";
    navBarContainer.style = "opacity : 0.9;";
  } else {
    navBarContainer.style.height = "100px";
    above.style.visibility = "hidden";
    navBarContainer.style = "opacity : 1;";
    navBarContainer.style = "transition: .5s;";
  }
});

const onload = () => {
  const div = document.getElementById("modalDiv");
  for (let i = 1; i <= 26; i++) {
    $.get(`productAhsapModals/productAhsapModals${i}.html`, function (data) {
      $("body").append(data);
    });
  }

  const div1 = document.getElementById("modalDiv1");
  for (let i = 1; i <= 10; i++) {
    $.get(
      `productMaxsimaModals/productMaxsimaModals${i}.html`,
      function (data) {
        $("body").append(data);
      }
    );
  }
};

const WoodModals = [
  {
    id: 1,
    name: "Özel Ahşap Standlarımız",
    description: "Mesa-Pol",
    databsTarget: "#productAhsapModals1",
    imgSrc: "./assets/img/product img/ahşapS1.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 2,
    name: "Özel Ahşap Standlarımız",
    description: "DP-TAT",
    databsTarget: "#productAhsapModals2",
    imgSrc: "./assets/img/product img/ahşapS2.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 3,
    name: "Özel Ahşap Standlarımız",
    description: "BENTELER",
    databsTarget: "#productAhsapModals3",
    imgSrc: "./assets/img/product img/ahşapS3.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 4,
    name: "Özel Ahşap Standlarımız",
    description: "NERON",
    databsTarget: "#productAhsapModals4",
    imgSrc: "./assets/img/product img/ahşapS4.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 5,
    name: "Özel Ahşap Standlarımız",
    description: "NERON",
    databsTarget: "#productAhsapModals5",
    imgSrc: "./assets/img/product img/ahşapS5.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 6,
    name: "Özel Ahşap Standlarımız",
    description: "NERON",
    databsTarget: "#productAhsapModals6",
    imgSrc: "./assets/img/product img/ahşapS6.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 7,
    name: "Özel Ahşap Standlarımız",
    description: "ACRAN-BOĞAZİÇİ",
    databsTarget: "#productAhsapModals7",
    imgSrc: "./assets/img/product img/ahşapS7.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 8,
    name: "Özel Ahşap Standlarımız",
    description: "NERON",
    databsTarget: "#productAhsapModals8",
    imgSrc: "./assets/img/product img/ahşapS8.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 9,
    name: "Özel Ahşap Standlarımız",
    description: "Hülger-Seramik",
    databsTarget: "#productAhsapModals9",
    imgSrc: "./assets/img/product img/ahşapS9.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 10,
    name: "Özel Ahşap Standlarımız",
    description: "Segasolar",
    databsTarget: "#productAhsapModals10",
    imgSrc: "./assets/img/product img/ahşapS10.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 11,
    name: "Özel Ahşap Standlarımız",
    description: "Hulka-Çelik K.",
    databsTarget: "#productAhsapModals11",
    imgSrc: "./assets/img/product img/ahşapS11.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 12,
    name: "Özel Ahşap Standlarımız",
    description: "LIANSU",
    databsTarget: "#productAhsapModals12",
    imgSrc: "./assets/img/product img/ahşapS12.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 13,
    name: "Özel Ahşap Standlarımız",
    description: "KOREA-TOURISM",
    databsTarget: "#productAhsapModals13",
    imgSrc: "./assets/img/product img/ahşapS13.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 14,
    name: "Özel Ahşap Standlarımız",
    description: "UMG-Uysal-Medikal",
    databsTarget: "#productAhsapModals14",
    imgSrc: "./assets/img/product img/ahşapS14.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 15,
    name: "Özel Ahşap Standlarımız",
    description: "Zırhsan",
    databsTarget: "#productAhsapModals15",
    imgSrc: "./assets/img/product img/ahşapS15.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 16,
    name: "Özel Ahşap Standlarımız",
    description: "ENDOV",
    databsTarget: "#productAhsapModals16",
    imgSrc: "./assets/img/product img/ahşapS16.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 17,
    name: "Özel Ahşap Standlarımız",
    description: "Salvagnini-Simted",
    databsTarget: "#productAhsapModals17",
    imgSrc: "./assets/img/product img/ahşapS17.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 18,
    name: "Özel Ahşap Standlarımız",
    description: "HASÇELİK",
    databsTarget: "#productAhsapModals18",
    imgSrc: "./assets/img/product img/ahşapS18.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 19,
    name: "Özel Ahşap Standlarımız",
    description: "HAIMER",
    databsTarget: "#productAhsapModals19",
    imgSrc: "./assets/img/product img/ahşapS19.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 20,
    name: "Özel Ahşap Standlarımız",
    description: "Eyüp-Sultan",
    databsTarget: "#productAhsapModals20",
    imgSrc: "./assets/img/product img/ahşapS20.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 21,
    name: "Özel Ahşap Standlarımız",
    description: "Tecno-tel",
    databsTarget: "#productAhsapModals21",
    imgSrc: "./assets/img/product img/ahşapS21.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 22,
    name: "Özel Ahşap Standlarımız",
    description: "Lokman",
    databsTarget: "#productAhsapModals22",
    imgSrc: "./assets/img/product img/ahşapS22.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 23,
    name: "Özel Ahşap Standlarımız",
    description: "Utaş",
    databsTarget: "#productAhsapModals23",
    imgSrc: "./assets/img/product img/ahşapS23.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 24,
    name: "Özel Ahşap Standlarımız",
    description: "Altech",
    databsTarget: "#productAhsapModals24",
    imgSrc: "./assets/img/product img/ahşapS24.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 25,
    name: "Özel Ahşap Standlarımız",
    description: "Kristal-Cola",
    databsTarget: "#productAhsapModals25",
    imgSrc: "./assets/img/product img/ahşapS25.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 26,
    name: "Özel Ahşap Standlarımız",
    description: "MORETTO",
    databsTarget: "#productAhsapModals26",
    imgSrc: "./assets/img/product img/ahşapS26.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
];

const MaxsimaModals = [
  {
    id: 1,
    name: "Maxsima Standlarımız",
    description: "TOPÇU-dental",
    databsTarget: "#productMaxsimaModals1",
    imgSrc: "./assets/img/product img1/maxsima02.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 2,
    name: "Maxsima Standlarımız",
    description: "dm-DİŞMAT",
    databsTarget: "#productMaxsimaModals2",
    imgSrc: "./assets/img/product img1/maxsima04.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 3,
    name: "Maxsima Standlarımız",
    description: "NEMCA-SHOES",
    databsTarget: "#productMaxsimaModals3",
    imgSrc: "./assets/img/product img1/maxsima09.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 4,
    name: "Maxsima Standlarımız",
    description: "ÖZGÜN-Die-Mold",
    databsTarget: "#productMaxsimaModals4",
    imgSrc: "./assets/img/product img1/maxsima14.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
];

const WoodModalsList1 = WoodModals.slice(0, 4);
const WoodModalsList2 = WoodModals.slice(5, 17);
const WoodModalsList3 = WoodModals.slice(17);
const MaxsimaModalsList1 = MaxsimaModals.slice(0, 4);
const MaxsimaModalsList2 = MaxsimaModals.slice(4, 11);

let count = 0;

WoodModalsList1.map((WoodModalsList1) => {
  woodStand.innerHTML += `
    <div class="a-box" data-bs-toggle="modal"  data-bs-target="${WoodModalsList1.databsTarget}">
    <div class="img-container">
        <div class="img-inner">
            <div class="inner-skew">
                <img
                    src="${WoodModalsList1.imgSrc}"> alt="${WoodModalsList1.imgAlt}"
            </div>
        </div>
    </div>
    <div class="text-container">
        <h3>${WoodModalsList1.name}</h3>
        <div>
            ${WoodModalsList1.description}
        </div>
    </div>
    `;
});

const woodStandBtnGoster = () => {
  count++;
  if (count === 1) {
    WoodModalsList2.map((WoodModalsList2) => {
      woodStand.innerHTML += `
      <div class="a-box" data-bs-toggle="modal"  data-bs-target="${WoodModalsList2.databsTarget}">
      <div class="img-container">
          <div class="img-inner">
              <div class="inner-skew">
                  <img
                      src="${WoodModalsList2.imgSrc}"> alt="${WoodModalsList2.imgAlt}"
              </div>
          </div>
      </div>
      <div class="text-container">
          <h3>${WoodModalsList2.name}</h3>
          <div>
              ${WoodModalsList2.description}
          </div>
      </div>
      `;
    });
  } else if (count === 2) {
    WoodModalsList3.map((WoodModalsList3) => {
      woodStand.innerHTML += `
      <div class="a-box" data-bs-toggle="modal"  data-bs-target="${WoodModalsList3.databsTarget}">
      <div class="img-container">
          <div class="img-inner">
              <div class="inner-skew">
                  <img
                      src="${WoodModalsList3.imgSrc}"> alt="${WoodModalsList3.imgAlt}"
              </div>
          </div>
      </div>
      <div class="text-container">
          <h3>${WoodModalsList3.name}</h3>
          <div>
              ${WoodModalsList3.description}
          </div>
      </div>
      `;
    });
    count = 0;
    woodBtnGoster.style.display = "none";
    woodBtnGizle.style.display = "block";
  }
};

const woodStandBtnGizle = () => {
  woodStand.innerHTML = "";

  WoodModalsList1.map((WoodModalsList1) => {
    woodStand.innerHTML += `
    <div class="a-box" data-bs-toggle="modal"  data-bs-target="${WoodModalsList1.databsTarget}">
    <div class="img-container">
        <div class="img-inner">
            <div class="inner-skew">
                <img
                    src="${WoodModalsList1.imgSrc}"> alt="${WoodModalsList1.imgAlt}"
            </div>
        </div>
    </div>
    <div class="text-container">
        <h3>${WoodModalsList1.name}</h3>
        <div>
            ${WoodModalsList1.description}
        </div>
    </div>
    `;
  });
  woodBtnGoster.style.display = "block";
  woodBtnGizle.style.display = "none";
  location.href = "#calismalarimiz";
};

MaxsimaModalsList1.map((MaxsimaModalsList1) => {
  maxsimaStand.innerHTML += `
    <div class="a-box" data-bs-toggle="modal"  data-bs-target="${MaxsimaModalsList1.databsTarget}">
    <div class="img-container">
        <div class="img-inner">
            <div class="inner-skew">
                <img
                    src="${MaxsimaModalsList1.imgSrc}"> alt="${MaxsimaModalsList1.imgAlt}"
            </div>
        </div>
    </div>
    <div class="text-container">
        <h3>${MaxsimaModalsList1.name}</h3>
        <div>
            ${MaxsimaModalsList1.description}
        </div>
    </div>
    `;
});
