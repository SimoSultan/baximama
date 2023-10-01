export const SITE_GAP = "p-5";
export const CARD_GAP = "mt-5";
export const MAX_DESKTOP_WIDTH = "max-w-lg mx-auto";

export const INSAGRAM_URL = "https://www.instagram.com/baxi_ayi/";
export const LINE_URL = "https://line.me/R/ti/p/%40baximama";

export const Z_INDEXES = {
  HEADER: "z-10",
  CONTENT: "z-0", // default value
  FOOTER: "z-0",
  BACKDROP: "z-10",
  MODAL: "z-20",
  MENU: "z-30",
};

export const SECTIONS = {
  ABOUT: "about",
  PRODUCTS: "products",
  ORDER: "order",
  CONTACT: "contact",
};

export const openLink = (url) => {
  window.open(url, "_blank");
};

export const captialise = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const PRODUCTS = [
  {
    id: "cheese-bread",
    image:
      "https://essareceitafunciona.com.br/wp-content/uploads/2022/07/Pao-de-queijo-Essa-Receita-Funciona-9.jpg",
  },
  {
    id: "condensed-milk-balls",
    image:
      "https://www.allrecipes.com/thmb/VSov5pj21Z0AVEMyajtaTRndpbI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/JF_24052_Brigadeiro_Shot_2x1_12851-9de74acd91a6404aa7cb2c3e3cff884d.jpg",
  },
];
