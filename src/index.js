import { ctrlTabHighlight, addAriaCurrent } from "./navStyles";

import { galleriesClickMenu } from "./dropDown";

import { gallerySetup } from "./photoSlider";

import { validateFormFields } from "./form-validation";

console.log("photogallery");

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("The page is loaded");
  ctrlTabHighlight();
  addAriaCurrent();
  galleriesClickMenu();
  gallerySetup();
  validateFormFields();
});
