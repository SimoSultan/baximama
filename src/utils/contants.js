export const SITE_GAP = "p-5";
export const CARD_GAP = "mt-5";
export const MAX_DESKTOP_WIDTH = "max-w-lg mx-auto";

export const Z_INDEXES = {
  HEADER: "z-10",
  CONTENT: "z-0", // default value
  FOOTER: "z-0",
  MODAL: "z-20",
  MENU: "z-30",
};

export const SECTIONS = {
  ABOUT: "about",
  PRODUCTS: "products",
  ORDER: "order",
  CONTACT: "contact",
};

export const openLine = () => {
  window.open("https://linecorp.com/en/", "_blank");
};

export const captialise = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const scrollIntoViewWithOffset = (selector, offset) => {
  const section = document.getElementById(selector);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
};
