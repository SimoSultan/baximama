// import brazilian from "./languages/br.json" assert { type: "json" };
// import english from "./languages/en.json" assert { type: "json" };

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = [
    {
      name: "Traditional Cheese Bread",
      description:
        "Our classic cheese bread made with a perfect blend of cheese and herbs.",
      image: "./images/cheese-bread-1.jpeg",
    },
    {
      name: "Jalapeno Cheese Bread",
      description:
        "For those who like a little kick, try our jalapeno-infused cheese bread.",
      image: "./images/cheese-bread-2.jpeg",
    },
    // Add more menu items here
  ];

  const menuItemsContainer = document.querySelector(".menu-items");

  menuItems.forEach((item) => {
    const menuItemDiv = document.createElement("div");
    menuItemDiv.classList.add("menu-item");

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.name;
    menuItemDiv.appendChild(image);

    const itemName = document.createElement("h3");
    itemName.textContent = item.name;
    menuItemDiv.appendChild(itemName);

    const itemDescription = document.createElement("p");
    itemDescription.textContent = item.description;
    menuItemDiv.appendChild(itemDescription);

    menuItemsContainer.appendChild(menuItemDiv);
  });
});

function Translate() {
  //initialization
  this.init = (lng = "en") => {
    this.attribute = "lang-tag";
    this.lng = lng;
  };
  //translate
  this.process = () => {
    const xrhFile = new XMLHttpRequest();
    //load content data
    xrhFile.open("GET", "./languages/" + this.lng + ".json", false);
    xrhFile.onreadystatechange = () => {
      if (xrhFile.readyState === 4) {
        if (xrhFile.status === 200 || xrhFile.status == 0) {
          const LngObject = JSON.parse(xrhFile.responseText);
          const allDom = document.getElementsByTagName("*");

          for (let i = 0; i < allDom.length; i++) {
            let elem = allDom[i];
            const key = elem.getAttribute(this.attribute);

            if (key != null) {
              elem.innerHTML = LngObject[key];
            }
          }
        }
      }
    };
    xrhFile.send();
  };
}

function setLanguage(lng) {
  const translate = new Translate();
  translate.init(lng);
  translate.process();
}
