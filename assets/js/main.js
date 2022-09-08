const hamburger = document.querySelector(".hamburger");
const navBarContainer = document.querySelector("#navBarContainer");
const above = document.querySelector("#above");
const woodStand = document.getElementById("woodStand");
const maxsimaStand = document.getElementById("maxsimaStand");
const woodBtnGoster = document.getElementById("woodBtnGoster");
const woodBtnGizle = document.getElementById("woodBtnGizle");
const maxsimaBtnGoster = document.getElementById("maxsimaBtnGoster");
const maxsimaBtnGizle = document.getElementById("maxsimaBtnGizle");
const calismalarimiz = document.getElementById("calismalarimiz")
navBar = document.querySelector(".nav-bar");

const menuList = document.getElementById("menuList");
const menuLinkTrials = menuList.children[0];
const menuLinkAboutUs = menuList.children[1];
const menuLinkReference = menuList.children[2];
const menuLinkContact = menuList.children[3];

menuLinkTrials.onclick = () => {
  navBar.classList.toggle("active");
}
menuLinkAboutUs.onclick = () => {
  navBar.classList.toggle("active");
}
menuLinkReference.onclick = () => {
  navBar.classList.toggle("active");
}
menuLinkContact.onclick = () => {
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
    navBarContainer.style.height = "100px";
    above.style.visibility = "visible";
    navBarContainer.style = "opacity : 0.9;"

  } else {
    navBarContainer.style.height = "100px";
    above.style.visibility = "hidden";
    navBarContainer.style = "opacity : 1;"
    navBarContainer.style = "transition: .5s;"

  }
});

const onload = () => {
  const div = document.getElementById("modalDiv");
  for (let i = 1; i <= 26; i++) {
    axios.get(`productAhsapModals/productAhsapModals${i}.html`).then((res) => {
      const data = res.data;
      div.innerHTML += data;
    });
  }

  const div1 = document.getElementById("modalDiv1");
  for (let i = 1; i <= 16; i++) {
    axios.get(`productMaxsimaModals/productMaxsimaModals${i}.html`).then((res) => {
      const data = res.data;
      div1.innerHTML += data;
    });
  }
};

const WoodModals = [
  {
    id: 1,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals1",
    imgSrc: "./assets/img/product img/ahşapS1.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 2,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals2",
    imgSrc: "./assets/img/product img/ahşapS2.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 3,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals3",
    imgSrc: "./assets/img/product img/ahşapS3.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 4,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals4",
    imgSrc: "./assets/img/product img/ahşapS4.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 5,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals5",
    imgSrc: "./assets/img/product img/ahşapS5.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 6,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals6",
    imgSrc: "./assets/img/product img/ahşapS6.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 7,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals7",
    imgSrc: "./assets/img/product img/ahşapS7.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 8,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals8",
    imgSrc: "./assets/img/product img/ahşapS8.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 9,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals9",
    imgSrc: "./assets/img/product img/ahşapS9.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 10,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals10",
    imgSrc: "./assets/img/product img/ahşapS10.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 11,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals11",
    imgSrc: "./assets/img/product img/ahşapS11.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 12,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals12",
    imgSrc: "./assets/img/product img/ahşapS12.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 13,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals13",
    imgSrc: "./assets/img/product img/ahşapS13.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 14,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals14",
    imgSrc: "./assets/img/product img/ahşapS14.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 15,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals15",
    imgSrc: "./assets/img/product img/ahşapS15.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 16,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals16",
    imgSrc: "./assets/img/product img/ahşapS16.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 17,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals17",
    imgSrc: "./assets/img/product img/ahşapS17.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 18,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals18",
    imgSrc: "./assets/img/product img/ahşapS18.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 19,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals20",
    imgSrc: "./assets/img/product img/ahşapS19.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 20,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals21",
    imgSrc: "./assets/img/product img/ahşapS20.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 21,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals22",
    imgSrc: "./assets/img/product img/ahşapS21.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 22,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals23",
    imgSrc: "./assets/img/product img/ahşapS22.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 23,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals24",
    imgSrc: "./assets/img/product img/ahşapS23.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 24,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals25",
    imgSrc: "./assets/img/product img/ahşapS24.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 25,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals26",
    imgSrc: "./assets/img/product img/ahşapS25.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 26,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productAhsapModals27",
    imgSrc: "./assets/img/product img/ahşapS26.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
];

const MaxsimaModals = [
  {
    id: 1,
    name: "Delux Tahta",
    description: "abc",
    databsTarget: "#productMaxsimaModals1",
    imgSrc: "./assets/img/product img1/maxsima02.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 2,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productMaxsimaModals2",
    imgSrc: "./assets/img/product img1/maxsima04.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 3,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productMaxsimaModals3",
    imgSrc: "./assets/img/product img1/maxsima09.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 4,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productMaxsimaModals4",
    imgSrc: "./assets/img/product img1/maxsima14.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 5,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productMaxsimaModals5",
    imgSrc: "./assets/img/product img1/maxsima16.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 6,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productMaxsimaModals6",
    imgSrc: "./assets/img/product img1/maxsima17.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 7,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productMaxsimaModals7",
    imgSrc: "./assets/img/product img1/maxsima18.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 8,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productMaxsimaModals8",
    imgSrc: "./assets/img/product img1/maxsima22.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 9,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productMaxsimaModals9",
    imgSrc: "./assets/img/product img1/maxsima24.jpeg",
    imgAlt: "Resim",
    imgStyle: "",
  },
  {
    id: 10,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productMaxsimaModals10",
    imgSrc: "./assets/img/product img1/maxsima27.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },
  {
    id: 11,
    name: "Delux Tahta",
    description: "açıklama",
    databsTarget: "#productMaxsimaModals11",
    imgSrc: "./assets/img/product img1/maxsima29.jpeg",
    imgAlt: "aaa",
    imgStyle: "",
  },


];

const WoodModalsList1 = WoodModals.slice(0, 4);
const WoodModalsList2 = WoodModals.slice(5, 17);
const WoodModalsList3 = WoodModals.slice(17);
const MaxsimaModalsList1 = MaxsimaModals.slice(0, 4);
const MaxsimaModalsList2 = MaxsimaModals.slice(5, 11);

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


const maxsimaStandBtnGoster = () => {
  count++;
  if (count === 1) {
    MaxsimaModalsList2.map((MaxsimaModalsList2) => {
      maxsimaStand.innerHTML += `
      <div class="a-box" data-bs-toggle="modal"  data-bs-target="${MaxsimaModalsList2.databsTarget}">
      <div class="img-container">
          <div class="img-inner">
              <div class="inner-skew">
                  <img
                      src="${MaxsimaModalsList2.imgSrc}"> alt="${MaxsimaModalsList2.imgAlt}"
              </div>
          </div>
      </div>
      <div class="text-container">
          <h3>${MaxsimaModalsList2.name}</h3>
          <div>
              ${MaxsimaModalsList2.description}
          </div>
      </div>
      `;
    });
  } else if (count === 2) {
    MaxsimaModalsList3.map((MaxsimaModalsList3) => {
      maxsimaStand.innerHTML += `
      <div class="a-box" data-bs-toggle="modal"  data-bs-target="${MaxsimaModalsList3.databsTarget}">
      <div class="img-container">
          <div class="img-inner">
              <div class="inner-skew">
                  <img
                      src="${MaxsimaModalsList3.imgSrc}"> alt="${MaxsimaModalsList3.imgAlt}"
              </div>
          </div>
      </div>
      <div class="text-container">
          <h3>${MaxsimaModalsList3.name}</h3>
          <div>
              ${MaxsimaModalsList3.description}
          </div>
      </div>
      `;
    });
    count = 0;
    maxsimaBtnGoster.style.display = "none";
    maxsimaBtnGizle.style.display = "block";
  }
};

const maxsimaStandBtnGizle = () => {
  maxsimaStand.innerHTML = "";

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
  maxsimaBtnGoster.style.display = "block";
  maxsimaBtnGizle.style.display = "none";
  location.href = "#calismalarimiz";
};
