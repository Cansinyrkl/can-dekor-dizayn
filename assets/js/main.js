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
    name: "??zel Ah??ap Standlar??m??z",
    description: "Mesa-Pol",
    databsTarget: "#productAhsapModals1",
    imgSrc: "./assets/img/product img/ah??apS1.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 2,
    name: "??zel Ah??ap Standlar??m??z",
    description: "DP-TAT",
    databsTarget: "#productAhsapModals2",
    imgSrc: "./assets/img/product img/ah??apS2.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 3,
    name: "??zel Ah??ap Standlar??m??z",
    description: "BENTELER",
    databsTarget: "#productAhsapModals3",
    imgSrc: "./assets/img/product img/ah??apS3.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 4,
    name: "??zel Ah??ap Standlar??m??z",
    description: "NERON",
    databsTarget: "#productAhsapModals4",
    imgSrc: "./assets/img/product img/ah??apS4.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 5,
    name: "??zel Ah??ap Standlar??m??z",
    description: "Promax",
    databsTarget: "#productAhsapModals5",
    imgSrc: "./assets/img/product img/ah??apS5.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },

  {
    id: 6,
    name: "??zel Ah??ap Standlar??m??z",
    description: "ACRAN-BO??AZ??????",
    databsTarget: "#productAhsapModals6",
    imgSrc: "./assets/img/product img/ah??apS7.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },

  {
    id: 7,
    name: "??zel Ah??ap Standlar??m??z",
    description: "H??lger-Seramik",
    databsTarget: "#productAhsapModals7",
    imgSrc: "./assets/img/product img/ah??apS9.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 8,
    name: "??zel Ah??ap Standlar??m??z",
    description: "Segasolar",
    databsTarget: "#productAhsapModals8",
    imgSrc: "./assets/img/product img/ah??apS10.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 9,
    name: "??zel Ah??ap Standlar??m??z",
    description: "Hulka-??elik K.",
    databsTarget: "#productAhsapModals9",
    imgSrc: "./assets/img/product img/ah??apS11.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 10,
    name: "??zel Ah??ap Standlar??m??z",
    description: "LIANSU",
    databsTarget: "#productAhsapModals10",
    imgSrc: "./assets/img/product img/ah??apS12.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 11,
    name: "??zel Ah??ap Standlar??m??z",
    description: "KOREA-TOURISM",
    databsTarget: "#productAhsapModals11",
    imgSrc: "./assets/img/product img/ah??apS13.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 12,
    name: "??zel Ah??ap Standlar??m??z",
    description: "UMG-Uysal-Medikal",
    databsTarget: "#productAhsapModals12",
    imgSrc: "./assets/img/product img/ah??apS14.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 13,
    name: "??zel Ah??ap Standlar??m??z",
    description: "Z??rhsan",
    databsTarget: "#productAhsapModals13",
    imgSrc: "./assets/img/product img/ah??apS15.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 14,
    name: "??zel Ah??ap Standlar??m??z",
    description: "ENDOV",
    databsTarget: "#productAhsapModals14",
    imgSrc: "./assets/img/product img/ah??apS16.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 15,
    name: "??zel Ah??ap Standlar??m??z",
    description: "Salvagnini-Simted",
    databsTarget: "#productAhsapModals15",
    imgSrc: "./assets/img/product img/ah??apS17.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 16,
    name: "??zel Ah??ap Standlar??m??z",
    description: "HAS??EL??K",
    databsTarget: "#productAhsapModals16",
    imgSrc: "./assets/img/product img/ah??apS18.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 17,
    name: "??zel Ah??ap Standlar??m??z",
    description: "HAIMER",
    databsTarget: "#productAhsapModals17",
    imgSrc: "./assets/img/product img/ah??apS19.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 18,
    name: "??zel Ah??ap Standlar??m??z",
    description: "Ey??p-Sultan",
    databsTarget: "#productAhsapModals18",
    imgSrc: "./assets/img/product img/ah??apS20.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 19,
    name: "??zel Ah??ap Standlar??m??z",
    description: "Tecno-tel",
    databsTarget: "#productAhsapModals19",
    imgSrc: "./assets/img/product img/ah??apS21.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 20,
    name: "??zel Ah??ap Standlar??m??z",
    description: "Lokman",
    databsTarget: "#productAhsapModals20",
    imgSrc: "./assets/img/product img/ah??apS22.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 21,
    name: "??zel Ah??ap Standlar??m??z",
    description: "Uta??",
    databsTarget: "#productAhsapModals21",
    imgSrc: "./assets/img/product img/ah??apS23.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 22,
    name: "??zel Ah??ap Standlar??m??z",
    description: "Altech",
    databsTarget: "#productAhsapModals22",
    imgSrc: "./assets/img/product img/ah??apS24.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 23,
    name: "??zel Ah??ap Standlar??m??z",
    description: "Kristal-Cola",
    databsTarget: "#productAhsapModals23",
    imgSrc: "./assets/img/product img/ah??apS25.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 24,
    name: "??zel Ah??ap Standlar??m??z",
    description: "MORETTO",
    databsTarget: "#productAhsapModals24",
    imgSrc: "./assets/img/product img/ah??apS26.jpeg",
    imgAlt: "??zel Ah??ap Standlar??m??z",
    imgStyle: "",
  },
];

const MaxsimaModals = [
  {
    id: 1,
    name: "Maxsima Standlar??m??z",
    description: "TOP??U-dental",
    databsTarget: "#productMaxsimaModals1",
    imgSrc: "./assets/img/product img1/maxsima02.jpeg",
    imgAlt: "??zel Maxsima Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 2,
    name: "Maxsima Standlar??m??z",
    description: "dm-D????MAT",
    databsTarget: "#productMaxsimaModals2",
    imgSrc: "./assets/img/product img1/maxsima04.jpeg",
    imgAlt: "??zel Maxsima Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 3,
    name: "Maxsima Standlar??m??z",
    description: "NEMCA-SHOES",
    databsTarget: "#productMaxsimaModals3",
    imgSrc: "./assets/img/product img1/maxsima09.jpeg",
    imgAlt: "??zel Maxsima Standlar??m??z",
    imgStyle: "",
  },
  {
    id: 4,
    name: "Maxsima Standlar??m??z",
    description: "??ZG??N-Die-Mold",
    databsTarget: "#productMaxsimaModals4",
    imgSrc: "./assets/img/product img1/maxsima14.jpeg",
    imgAlt: "??zel Maxsima Standlar??m??z",
    imgStyle: "",
  },
];

const WoodModalsList1 = WoodModals.slice(0, 4);
const WoodModalsList2 = WoodModals.slice(4, 16);
const WoodModalsList3 = WoodModals.slice(16);
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
