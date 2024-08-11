/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dropDown.js":
/*!*************************!*\
  !*** ./src/dropDown.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   galleriesClickMenu: function() { return /* binding */ galleriesClickMenu; }
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/variables.js");

function galleriesClickMenu() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.navigation.addEventListener("keydown", e => {
    if ((e.key === " " || e.key === "Enter") && (e.target.innerText.toLowerCase() === "galleries" || e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownCarat) && !_variables__WEBPACK_IMPORTED_MODULE_0__.dropDownMenu.classList.contains("dropdown-content--active")) {
      activateDropdown();
    } else if ((e.key === " " || e.key === "Enter") && (e.target.innerText.toLowerCase() === "galleries" || e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownCarat) && _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownMenu.classList.contains("dropdown-content--active")) {
      closeDropdown();
    }
  });
  _variables__WEBPACK_IMPORTED_MODULE_0__.navigation.addEventListener("pointerdown", e => {
    if ((e.target.innerText.toLowerCase() === "galleries" || e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownCarat) && !_variables__WEBPACK_IMPORTED_MODULE_0__.dropDownMenu.classList.contains("dropdown-content--active")) {
      activateDropdown();
    } else if ((e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownItems || e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownCarat) && _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownMenu.classList.contains("dropdown-content--active")) {
      console.log(e.target);
      closeDropdown();
    } else if ((e.target.innerText.toLowerCase() === "galleries" || e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownCarat) && _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownMenu.classList.contains("dropdown-content--active")) {
      closeDropdown();
      changeActiveState();
    }
  });
}
function activateDropdown() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownCarat.classList.add("gal-arrow--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownMenu.classList.add("dropdown-content--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownItems.forEach(item => {
    item.classList.add("dropdown-item--active");
  });
  _variables__WEBPACK_IMPORTED_MODULE_0__.menuBtnStyle.forEach(btn => {
    console.log(btn.dataset.name);
    btn.classList.remove("selected");
    if (btn.dataset.name === "galleries") {
      btn.classList.add("selected");
    }
  });
}
function changeActiveState() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.menuBtnStyle.forEach(btn => {
    if (btn.dataset.name === _variables__WEBPACK_IMPORTED_MODULE_0__.shortPageName) {
      btn.classList.add("selected");
      console.log(_variables__WEBPACK_IMPORTED_MODULE_0__.currentPage);
    } else if (btn.dataset.name !== _variables__WEBPACK_IMPORTED_MODULE_0__.shortPageName && (_variables__WEBPACK_IMPORTED_MODULE_0__.shortPageName === "birds-gallery" || _variables__WEBPACK_IMPORTED_MODULE_0__.shortPageName === "insects-gallery" || _variables__WEBPACK_IMPORTED_MODULE_0__.shortPageName === "small-animals-gallery")) {
      _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownDiv.classList.add("selected");
    }
  });
}
function closeDropdown() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.menuBtnStyle.forEach(btn => {
    btn.classList.remove("selected");
  });
  _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownMenu.classList.remove("dropdown-content--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownCarat.classList.remove("gal-arrow--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownItems.forEach(item => {
    item.classList.remove("dropdown-item--active");
  });
}

/***/ }),

/***/ "./src/form-validation.js":
/*!********************************!*\
  !*** ./src/form-validation.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeError: function() { return /* binding */ removeError; },
/* harmony export */   validateFormFields: function() { return /* binding */ validateFormFields; }
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/variables.js");

function validateFormFields() {
  if (_variables__WEBPACK_IMPORTED_MODULE_0__.shortPageName === "contact" && _variables__WEBPACK_IMPORTED_MODULE_0__.formFieldset.disabled) {
    // Adjust styles to show form is disabled
    _variables__WEBPACK_IMPORTED_MODULE_0__.formDisabledText.style.display = "initial";
    _variables__WEBPACK_IMPORTED_MODULE_0__.inputFields.forEach(field => {
      field.style.backgroundColor = "#edf0f0";
      field.style.pointerEvents = "none";
    });
    _variables__WEBPACK_IMPORTED_MODULE_0__.textArea.style.backgroundColor = "#edf0f0";
    _variables__WEBPACK_IMPORTED_MODULE_0__.textArea.style.pointerEvents = "none";
    _variables__WEBPACK_IMPORTED_MODULE_0__.submitBtn.style.backgroundColor = "#edf0f0";
    _variables__WEBPACK_IMPORTED_MODULE_0__.submitBtn.style.pointerEvents = "none";
  } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.shortPageName === "contact" && !_variables__WEBPACK_IMPORTED_MODULE_0__.formFieldset.disabled) {
    // Validate form fields if form is not diabled
    validateFirstNameInput();
    validateLastNameInput();
    validateEmailInput();
    validateMessageInput();
    validateOnSubmit();
  }
}

// First Name Validation

function firstNameErrorFunc() {
  if (_variables__WEBPACK_IMPORTED_MODULE_0__.firstName.validity.valueMissing) {
    showError(_variables__WEBPACK_IMPORTED_MODULE_0__.firstName, _variables__WEBPACK_IMPORTED_MODULE_0__.firstNameError);
    _variables__WEBPACK_IMPORTED_MODULE_0__.firstNameError.textContent = "You need to enter your first name.";
  } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.firstName.validity.typeMismatch) {
    showError(_variables__WEBPACK_IMPORTED_MODULE_0__.firstName, _variables__WEBPACK_IMPORTED_MODULE_0__.firstNameError);
    _variables__WEBPACK_IMPORTED_MODULE_0__.firstNameError.textContent = "Entered value needs to be a name.";
  } else {
    removeError(_variables__WEBPACK_IMPORTED_MODULE_0__.firstName, _variables__WEBPACK_IMPORTED_MODULE_0__.firstNameError);
  }
}
function validateFirstNameInput() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.firstName.addEventListener("blur", e => {
    firstNameErrorFunc();
  });
}

// Last Name Validation

function lastNameErrorFunc() {
  if (_variables__WEBPACK_IMPORTED_MODULE_0__.lastName.validity.valueMissing) {
    showError(_variables__WEBPACK_IMPORTED_MODULE_0__.lastName, _variables__WEBPACK_IMPORTED_MODULE_0__.lastNameError);
    _variables__WEBPACK_IMPORTED_MODULE_0__.lastNameError.textContent = "You need to enter your first name.";
  } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.lastName.validity.typeMismatch) {
    showError(_variables__WEBPACK_IMPORTED_MODULE_0__.lastName, _variables__WEBPACK_IMPORTED_MODULE_0__.lastNameError);
    _variables__WEBPACK_IMPORTED_MODULE_0__.lastNameError.textContent = "Entered value needs to be a name.";
  } else {
    removeError(_variables__WEBPACK_IMPORTED_MODULE_0__.lastName, _variables__WEBPACK_IMPORTED_MODULE_0__.lastNameError);
  }
}
function validateLastNameInput() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.lastName.addEventListener("blur", e => {
    lastNameErrorFunc();
  });
}

// Email Validation

function emailErrorFunc() {
  if (_variables__WEBPACK_IMPORTED_MODULE_0__.email.validity.valueMissing) {
    showError(_variables__WEBPACK_IMPORTED_MODULE_0__.email, _variables__WEBPACK_IMPORTED_MODULE_0__.emailError);
    _variables__WEBPACK_IMPORTED_MODULE_0__.emailError.textContent = "Please follow format: your-email@email.com.";
  } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.email.validity.typeMismatch) {
    showError(_variables__WEBPACK_IMPORTED_MODULE_0__.email, _variables__WEBPACK_IMPORTED_MODULE_0__.emailError);
    _variables__WEBPACK_IMPORTED_MODULE_0__.emailError.textContent = "Please follow format: your-email@email.com.";
  } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.email.validity.tooShort) {
    showError(_variables__WEBPACK_IMPORTED_MODULE_0__.email, _variables__WEBPACK_IMPORTED_MODULE_0__.emailError);
    _variables__WEBPACK_IMPORTED_MODULE_0__.emailError.textContent = `Email should be at least ${_variables__WEBPACK_IMPORTED_MODULE_0__.email.minLength} characters; you entered ${_variables__WEBPACK_IMPORTED_MODULE_0__.email.value.length}.`;
  } else {
    removeError(_variables__WEBPACK_IMPORTED_MODULE_0__.email, _variables__WEBPACK_IMPORTED_MODULE_0__.emailError);
  }
}
function validateEmailInput() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.email.addEventListener("blur", e => {
    emailErrorFunc();
  });
}

// Message Validation

function messageErrorFunc() {
  if (_variables__WEBPACK_IMPORTED_MODULE_0__.message.validity.valueMissing) {
    showError(_variables__WEBPACK_IMPORTED_MODULE_0__.message, _variables__WEBPACK_IMPORTED_MODULE_0__.messageError);
    _variables__WEBPACK_IMPORTED_MODULE_0__.messageError.textContent = "You must enter a message to submit this form.";
  } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.message.validity.typeMismatch) {
    showError(_variables__WEBPACK_IMPORTED_MODULE_0__.message, _variables__WEBPACK_IMPORTED_MODULE_0__.messageError);
    _variables__WEBPACK_IMPORTED_MODULE_0__.messageError.textContent = "You must enter a message to submit this form.";
  } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.message.validity.tooShort) {
    showError(_variables__WEBPACK_IMPORTED_MODULE_0__.message, _variables__WEBPACK_IMPORTED_MODULE_0__.messageError);
    _variables__WEBPACK_IMPORTED_MODULE_0__.messageError.textContent = `Message should be at least ${_variables__WEBPACK_IMPORTED_MODULE_0__.message.minLength} characters; you entered ${_variables__WEBPACK_IMPORTED_MODULE_0__.message.value.length}.`;
  } else {
    removeError(_variables__WEBPACK_IMPORTED_MODULE_0__.message, _variables__WEBPACK_IMPORTED_MODULE_0__.messageError);
  }
}
function validateMessageInput() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.message.addEventListener("blur", e => {
    messageErrorFunc();
  });
}

// All Fileds Submit Validation

function validateOnSubmit() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.form.addEventListener("submit", e => {
    if (!_variables__WEBPACK_IMPORTED_MODULE_0__.firstName.validity.valid || !_variables__WEBPACK_IMPORTED_MODULE_0__.lastName.validity.valid || !_variables__WEBPACK_IMPORTED_MODULE_0__.email.validity.valid || !_variables__WEBPACK_IMPORTED_MODULE_0__.message.validity.valid) {
      e.preventDefault();
      firstNameErrorFunc();
      lastNameErrorFunc();
      emailErrorFunc();
      messageErrorFunc();
      _variables__WEBPACK_IMPORTED_MODULE_0__.submitError.style.visibility = "visible";
      _variables__WEBPACK_IMPORTED_MODULE_0__.submitError.textContent = "Please complete all text fields.";
    } else {
      // Code to submit form
    }
  });
}

// Show/Remove Error Functions

function removeError(inputEl, inputError) {
  inputEl.classList.remove("input--invalid");
  inputError.textContent = "";
  inputError.style.visibility = "hidden";
}
function showError(inputEl, inputError) {
  inputEl.classList.add("input--invalid");
  inputError.style.visibility = "visible";
  inputError.setAttribute("aria-live", "polite");
  inputError.focus();
}

/***/ }),

/***/ "./src/navStyles.js":
/*!**************************!*\
  !*** ./src/navStyles.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAriaCurrent: function() { return /* binding */ addAriaCurrent; },
/* harmony export */   ctrlMenuVisibility: function() { return /* binding */ ctrlMenuVisibility; }
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/variables.js");

function ctrlMenuVisibility() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.menuIconDiv.addEventListener("pointerdown", e => {
    if ((e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.menuIconDiv || e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.menuIcon) && !_variables__WEBPACK_IMPORTED_MODULE_0__.menuBar.classList.contains("active")) {
      _variables__WEBPACK_IMPORTED_MODULE_0__.menuBar.classList.add("active");
      _variables__WEBPACK_IMPORTED_MODULE_0__.menuIcon.style.width = _variables__WEBPACK_IMPORTED_MODULE_0__.newMenuIconWidth + "px";
      _variables__WEBPACK_IMPORTED_MODULE_0__.menuIcon.setAttribute("alt", "Menu Button: Click to hide menu options");
      ctrlTabHighlight();
    } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.menuBar.classList.contains("active") && (e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.menuIconDiv || e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.menuIcon)) {
      _variables__WEBPACK_IMPORTED_MODULE_0__.menuBar.classList.remove("active");
      _variables__WEBPACK_IMPORTED_MODULE_0__.menuIcon.style.width = _variables__WEBPACK_IMPORTED_MODULE_0__.menuIconWidth + "px";
      _variables__WEBPACK_IMPORTED_MODULE_0__.menuIcon.setAttribute("alt", "Menu Button: Click to expand menu options");
    }
  });
  _variables__WEBPACK_IMPORTED_MODULE_0__.menuIconDiv.addEventListener("keydown", e => {
    if ((e.key === "Enter" || e.key === " ") && (e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.menuIconDiv || e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.menuIcon) && !_variables__WEBPACK_IMPORTED_MODULE_0__.menuBar.classList.contains("active")) {
      _variables__WEBPACK_IMPORTED_MODULE_0__.menuBar.classList.add("active");
      _variables__WEBPACK_IMPORTED_MODULE_0__.menuIcon.style.width = _variables__WEBPACK_IMPORTED_MODULE_0__.newMenuIconWidth + "px";
      _variables__WEBPACK_IMPORTED_MODULE_0__.menuIcon.setAttribute("alt", "Menu Button: Click to hide menu options");
      ctrlTabHighlight();
    } else if ((e.key === "Enter" || e.key === " ") && (e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.menuIconDiv || e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.menuIcon) && _variables__WEBPACK_IMPORTED_MODULE_0__.menuBar.classList.contains("active")) {
      _variables__WEBPACK_IMPORTED_MODULE_0__.menuBar.classList.remove("active");
      _variables__WEBPACK_IMPORTED_MODULE_0__.menuIcon.style.width = _variables__WEBPACK_IMPORTED_MODULE_0__.menuIconWidth + "px";
      _variables__WEBPACK_IMPORTED_MODULE_0__.menuIcon.setAttribute("alt", "Menu Button: Click to expand menu options");
    }
  });
}
function ctrlTabHighlight() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.menuBtnStyle.forEach(btn => {
    if (btn.dataset.name === _variables__WEBPACK_IMPORTED_MODULE_0__.shortPageName) {
      console.log(btn.dataset.name);
      _variables__WEBPACK_IMPORTED_MODULE_0__.menuBtnStyle.forEach(btn => {
        btn.classList.remove("selected");
      });
      btn.classList.add("selected");
    } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.shortPageName === "birds-gallery" || _variables__WEBPACK_IMPORTED_MODULE_0__.shortPageName === "insects-gallery" || _variables__WEBPACK_IMPORTED_MODULE_0__.shortPageName === "small-animals-gallery") {
      showGalNavLink();
    }
  });
}
function showGalNavLink() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownItems.forEach(item => {
    if (item.dataset.name === "birds-gallery" || item.dataset.name === "insects-gallery" || item.dataset.name === "small-animals-gallery") {
      _variables__WEBPACK_IMPORTED_MODULE_0__.menuBtnStyle.forEach(btn => {
        btn.classList.remove("selected");
      });
      _variables__WEBPACK_IMPORTED_MODULE_0__.dropDownDiv.classList.add("selected");
    }
  });
}
function addAriaCurrent() {
  // console.log(menuLinks);
  _variables__WEBPACK_IMPORTED_MODULE_0__.menuLinks.forEach(link => {
    if (link.dataset.name === _variables__WEBPACK_IMPORTED_MODULE_0__.shortPageName) {
      // console.log(link.dataset.name);
      _variables__WEBPACK_IMPORTED_MODULE_0__.menuLinks.forEach(link => {
        link.removeAttribute("aria-current", "page");
      });
      link.setAttribute("aria-current", "page");
    }
  });
}

/***/ }),

/***/ "./src/photoSlider.js":
/*!****************************!*\
  !*** ./src/photoSlider.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gallerySetup: function() { return /* binding */ gallerySetup; }
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/variables.js");

function gallerySetup() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.galleryMainDivs.forEach(div => {
    if (div.dataset.name === _variables__WEBPACK_IMPORTED_MODULE_0__.shortPageName) {
      _variables__WEBPACK_IMPORTED_MODULE_0__.getPortraitGal.portraitGalLocale = document.querySelector(".gal-portrait");
      _variables__WEBPACK_IMPORTED_MODULE_0__.getPortraitSliderBox.portraitSliderLocale = document.querySelector(".portrait-slider-box");
      _variables__WEBPACK_IMPORTED_MODULE_0__.getLandscapeGal.landscapeGalLocale = document.querySelector(".gal-landscape");
      _variables__WEBPACK_IMPORTED_MODULE_0__.getLandscapeSliderBox.landscapeSliderLocale = document.querySelector(".landscape-slider-box");
      if (_variables__WEBPACK_IMPORTED_MODULE_0__.windowHeight < _variables__WEBPACK_IMPORTED_MODULE_0__.windowWidth) {
        console.log("landscape");
        setupLandscapeGal();
      } else {
        console.log("portrait");
        setupPortraitGal();
      }
      checkPageOrientation();
    }
  });
}
function checkPageOrientation() {
  const landscape = window.matchMedia("(orientation: landscape)");
  console.log(landscape);
  landscape.addEventListener("change", e => {
    if (e.matches) {
      console.log("landscape");
      clearInterval(_variables__WEBPACK_IMPORTED_MODULE_0__.getAnimationID.animationID);
      clearActiveState();
      resetIndexes();
      setupLandscapeGal();
    } else {
      console.log("portrait");
      clearInterval(_variables__WEBPACK_IMPORTED_MODULE_0__.getAnimationID.animationID);
      clearActiveState();
      resetIndexes();
      setupPortraitGal();
    }
  });
}
function setupPortraitGal() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.getLandscapeGal.galLandscapeView.hidden = true;
  _variables__WEBPACK_IMPORTED_MODULE_0__.getLandscapeSliderBox.landscapeSliderBox.hidden = true;
  _variables__WEBPACK_IMPORTED_MODULE_0__.getPortraitGal.galPortraitView.hidden = false;
  _variables__WEBPACK_IMPORTED_MODULE_0__.getPortraitSliderBox.portraitSliderBox.hidden = false;
  portraitSliderBoxCtrl();
  console.log("Gallery Portrait Mode");
}
function setupLandscapeGal() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.getLandscapeGal.galLandscapeView.hidden = false;
  _variables__WEBPACK_IMPORTED_MODULE_0__.getLandscapeSliderBox.landscapeSliderBox.hidden = false;
  _variables__WEBPACK_IMPORTED_MODULE_0__.getPortraitGal.galPortraitView.hidden = true;
  _variables__WEBPACK_IMPORTED_MODULE_0__.getPortraitSliderBox.portraitSliderBox.hidden = true;
  landscapeSliderBoxCtrl();
  console.log("Gallery Landscape Mode");
}
function portraitSliderBoxCtrl() {
  const currentGallery = _variables__WEBPACK_IMPORTED_MODULE_0__.getPortraitGal.galPortraitView;
  //  console.log(currentGallery);

  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderAnimationCtrlDiv.currentAnimationCtrlDiv = currentGallery.querySelector(".portrait-animation-ctrl-div");
  // console.log(sliderAnimationCtrlDiv.animationCtrlDiv);

  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPauseBtn.currentPauseBtn = currentGallery.querySelector(".portrait-pause-btn");
  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPauseIcon.currentPauseIcon = currentGallery.querySelector(".portrait-pause-icon");
  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPlayBtn.currentPlayBtn = currentGallery.querySelector(".portrait-play-btn");
  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPlayIcon.currentPlayIcon = currentGallery.querySelector(".portrait-play-icon");
  _variables__WEBPACK_IMPORTED_MODULE_0__.activeSliderBox.currentActiveBox = currentGallery.querySelector(".portrait-slider-box");
  // console.log(activeSliderBox.activeBox);

  const portraitSliderBox = _variables__WEBPACK_IMPORTED_MODULE_0__.activeSliderBox.activeBox;
  // console.log(thisSliderBox);

  _variables__WEBPACK_IMPORTED_MODULE_0__.activePhotoBox.currentActivePhotoBox = portraitSliderBox.querySelector(".portrait-photo-box");
  // console.log(activePhotoBox.photoBox);

  _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgsArray = Array.from(_variables__WEBPACK_IMPORTED_MODULE_0__.activePhotoBox.photoBox.children);
  // console.log(galleryImgs.boxImgs);

  _variables__WEBPACK_IMPORTED_MODULE_0__.getRightArrow.rightArrowLocation = portraitSliderBox.querySelector("[data-forward-arrow]");
  // console.log(getRightArrow.rightArrow);

  _variables__WEBPACK_IMPORTED_MODULE_0__.getRightArrowIcon.rightIconLocation = portraitSliderBox.querySelector("[data-icon-forward]");
  _variables__WEBPACK_IMPORTED_MODULE_0__.getLeftArrow.leftArrowLocation = portraitSliderBox.querySelector("[data-back-arrow]");
  // console.log(getLeftArrow.leftArrow);

  _variables__WEBPACK_IMPORTED_MODULE_0__.getLeftArrowIcon.leftIconLocation = portraitSliderBox.querySelector("[data-icon-back]");
  _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.currentSlidePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex];
  // console.log(slidePosition.currentSlidePosition);
  _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.currentSlidePosition.classList.add("picture--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleNav.thisCircleNav = portraitSliderBox.querySelector(".img-dots-container");
  // console.log(circleNav.currentCircleNav);

  _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivsArray = Array.from(portraitSliderBox.getElementsByClassName("circle-icon-div"));
  // console.log(circleIconDivs.circleDivs);

  _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.currentCircleDivPosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex];
  // console.log(circleDivPosition.currentCircleDivPosition);
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex].classList.add("circle-icon-div--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circleIconsArray = Array.from(portraitSliderBox.getElementsByClassName("circle-icon"));
  // console.log(circleIcons.circles);

  _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.currentCirclePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex];
  // console.log(circlePosition.currentCirclePosition);
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex].classList.add("circle-icon--active");
  animationAccessibility();
  sliderAnimationCtrl();
  clickCircles();
  arrowCtrl();
}
function landscapeSliderBoxCtrl() {
  const currentGallery = _variables__WEBPACK_IMPORTED_MODULE_0__.getLandscapeGal.galLandscapeView;
  //  console.log(currentGallery);

  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderAnimationCtrlDiv.currentAnimationCtrlDiv = currentGallery.querySelector(".landscape-animation-ctrl-div");
  // console.log(sliderAnimationCtrlDiv.animationCtrlDiv);

  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPauseBtn.currentPauseBtn = currentGallery.querySelector(".landscape-pause-btn");
  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPauseIcon.currentPauseIcon = currentGallery.querySelector(".landscape-pause-icon");
  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPlayBtn.currentPlayBtn = currentGallery.querySelector(".landscape-play-btn");
  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPlayIcon.currentPlayIcon = currentGallery.querySelector(".landscape-play-icon");
  _variables__WEBPACK_IMPORTED_MODULE_0__.activeSliderBox.currentActiveBox = currentGallery.querySelector(".landscape-slider-box");
  // console.log(activeSliderBox.activeBox);

  const landscapeSliderBox = _variables__WEBPACK_IMPORTED_MODULE_0__.activeSliderBox.activeBox;
  // console.log(thisSliderBox);

  _variables__WEBPACK_IMPORTED_MODULE_0__.activePhotoBox.currentActivePhotoBox = landscapeSliderBox.querySelector(".landscape-photo-box");
  // console.log(activePhotoBox.photoBox);

  _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgsArray = Array.from(_variables__WEBPACK_IMPORTED_MODULE_0__.activePhotoBox.photoBox.children);
  // console.log(galleryImgs.boxImgs);

  _variables__WEBPACK_IMPORTED_MODULE_0__.getRightArrow.rightArrowLocation = landscapeSliderBox.querySelector("[data-forward-arrow]");
  // console.log(getRightArrow.rightArrow);

  _variables__WEBPACK_IMPORTED_MODULE_0__.getRightArrowIcon.rightIconLocation = landscapeSliderBox.querySelector("[data-icon-forward]");
  _variables__WEBPACK_IMPORTED_MODULE_0__.getLeftArrow.leftArrowLocation = landscapeSliderBox.querySelector("[data-back-arrow]");
  // console.log(getLeftArrow.leftArrow);

  _variables__WEBPACK_IMPORTED_MODULE_0__.getLeftArrowIcon.leftIconLocation = landscapeSliderBox.querySelector("[data-icon-back]");
  _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.currentSlidePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex];
  // console.log(slidePosition.currentSlidePosition);
  _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.currentSlidePosition.classList.add("picture--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleNav.thisCircleNav = landscapeSliderBox.querySelector(".img-dots-container");
  // console.log(circleNav.currentCircleNav);

  _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivsArray = Array.from(landscapeSliderBox.getElementsByClassName("circle-icon-div"));
  // console.log(circleIconDivs.circleDivs);

  _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.currentCircleDivPosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex];
  // console.log(circleDivPosition.currentCircleDivPosition);
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex].classList.add("circle-icon-div--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circleIconsArray = Array.from(landscapeSliderBox.getElementsByClassName("circle-icon"));
  // console.log(circleIcons.circles);

  _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.currentCirclePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex];
  // console.log(circlePosition.currentCirclePosition);
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex].classList.add("circle-icon--active");
  animationAccessibility();
  sliderAnimationCtrl();
  clickCircles();
  arrowCtrl();
}
function sliderAnimationCtrl() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderAnimationCtrlDiv.animationCtrlDiv.addEventListener("pointerdown", e => {
    if (e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPauseBtn.currentPauseBtn || e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPauseIcon.currentPauseIcon) {
      sliderAnimationOff();
    }
    if (e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPlayBtn.currentPlayBtn || e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPlayIcon.currentPlayIcon) {
      sliderAnimationOn();
    }
  });
  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderAnimationCtrlDiv.animationCtrlDiv.addEventListener("keydown", e => {
    if ((e.key === " " || e.key === "Enter") && (e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPauseBtn.currentPauseBtn || e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPauseIcon.currentPauseIcon)) {
      sliderAnimationOff();
    }
    if ((e.key === " " || e.key === "Enter") && (e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPlayBtn.currentPlayBtn || e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPlayIcon.currentPlayIcon)) {
      sliderAnimationOn();
    }
  });
}
function animationAccessibility() {
  console.log(_variables__WEBPACK_IMPORTED_MODULE_0__.reduceMotion);
  if (_variables__WEBPACK_IMPORTED_MODULE_0__.reduceMotion) {
    sliderAnimationOff();
  }
  if (!_variables__WEBPACK_IMPORTED_MODULE_0__.reduceMotion) {
    sliderAnimationOn();
  }
}
function sliderAnimationOn() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPauseBtn.currentPauseBtn.classList.add("pause-btn--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPlayBtn.currentPlayBtn.classList.remove("play-btn--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.activePhotoBox.photoBox.setAttribute("aria-live", "off");
  _variables__WEBPACK_IMPORTED_MODULE_0__.getAnimationID.animationIDValue = setInterval(slideRight, 3000);
}
function sliderAnimationOff() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPauseBtn.currentPauseBtn.classList.remove("pause-btn--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.sliderPlayBtn.currentPlayBtn.classList.add("play-btn--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.activePhotoBox.photoBox.setAttribute("aria-live", "polite");
  clearInterval(_variables__WEBPACK_IMPORTED_MODULE_0__.getAnimationID.animationID);
}
function clickCircles() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleNav.currentCircleNav.addEventListener("pointerdown", e => {
    console.log(e.target);
    if (e.target.classList.contains("circle-icon-div") || e.target.classList.contains("circle-icon")) {
      // console.log(e.target.classList);
      _variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex = e.target.dataset.circle;
      clearActiveState();
      handleIndexes();
      addActiveState();
      clearInterval(_variables__WEBPACK_IMPORTED_MODULE_0__.getAnimationID.animationID);
      _variables__WEBPACK_IMPORTED_MODULE_0__.getAnimationID.animationID = setInterval(slideRight, 3000);
    }
  });
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleNav.currentCircleNav.addEventListener("keydown", e => {
    if ((e.key === " " || e.key === "Enter") && (e.target.classList.contains("circle-icon-div") || e.target.classList.contains("circle-icon-div--active"))) {
      _variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex = e.target.dataset.circle;
      clearActiveState();
      handleIndexes();
      addActiveState();
    }
  });
}
function arrowCtrl() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.activeSliderBox.currentActiveBox.addEventListener("pointerdown", e => {
    // console.log(e.target);
    if (e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.getRightArrow.rightArrow || e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.getRightArrowIcon.rightArrowIcon) {
      console.log("right");
      slideRight();
      clearInterval(_variables__WEBPACK_IMPORTED_MODULE_0__.getAnimationID.animationID);
      _variables__WEBPACK_IMPORTED_MODULE_0__.getAnimationID.animationID = setInterval(slideRight, 3000);
    }
    if (e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.getLeftArrow.leftArrow || e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.getLeftArrowIcon.leftArrowIcon) {
      console.log("left");
      slideLeft();
      clearInterval(_variables__WEBPACK_IMPORTED_MODULE_0__.getAnimationID.animationID);
      _variables__WEBPACK_IMPORTED_MODULE_0__.getAnimationID.animationID = setInterval(slideRight, 3000);
    }
  });
  _variables__WEBPACK_IMPORTED_MODULE_0__.activeSliderBox.currentActiveBox.addEventListener("keydown", e => {
    if ((e.key === " " || e.key === "Enter" || e.key === "ArrowRight") && e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.getRightArrow.rightArrow || e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.getRightArrowIcon.rightArrowIcon) {
      slideRight();
    }
    if ((e.key === " " || e.key === "Enter" || e.key === "ArrowLeft") && (e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.getLeftArrow.leftArrow || e.target === _variables__WEBPACK_IMPORTED_MODULE_0__.getLeftArrowIcon.leftArrowIcon)) {
      slideLeft();
    }
  });
}
function handleIndexes() {
  if (_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex < 0) {
    _variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs.length - 1;
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.currentSlidePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.nextSlidePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[0];
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.prevSlidePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex - 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.currentCircleDivPosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.nextCircleDivPosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[0];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.prevCircleDivPosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex - 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.currentCirclePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.nextCirclePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[0];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.prevCirclePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex - 1];
  } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex === 0) {
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.currentSlidePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.nextSlidePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex + 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.prevSlidePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs.length - 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.currentCircleDivPosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.nextCircleDivPosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex + 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.prevCircleDivPosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex - 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.currentCirclePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.nextCirclePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex + 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.prevCirclePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles.lengh - 1];
  } else if (_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex > _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs.length - 1) {
    _variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex = 0;
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.currentSlidePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.nextSlidePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex + 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.prevSlidePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs.length - 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.currentCircleDivPosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.nextCircleDivPosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex + 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.prevCircleDivPosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex - 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.currentCirclePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.nextCirclePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex + 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.prevCirclePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons[_variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles.length - 1];
  } else {
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.currentSlidePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.nextSlidePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex + 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.prevSlidePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs.boxImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex - 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.currentCircleDivPosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.nextCircleDivPosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex + 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.prevCircleDivPosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIconDivs.circleDivs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex - 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.currentCirclePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.nextCirclePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex + 1];
    _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.prevCirclePosition = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons.circles[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex - 1];
  }
}
function slideRight() {
  clearActiveState();
  _variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex++;
  handleIndexes();
  addActiveState();
}
function slideLeft() {
  clearActiveState();
  _variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex--;
  handleIndexes();
  addActiveState();
}
function clearActiveState() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.currentSlidePosition.classList.remove("picture--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.currentCircleDivPosition.classList.remove("circle-icon-div--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.currentCircleDivPosition.removeAttribute("aria-disabled", "true");
  _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.currentCirclePosition.classList.remove("circle-icon--active");
}
function addActiveState() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.currentSlidePosition.classList.add("picture--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.currentCircleDivPosition.classList.add("circle-icon-div--active");
  _variables__WEBPACK_IMPORTED_MODULE_0__.circleDivPosition.currentCircleDivPosition.setAttribute("aria-disabled", "true");
  _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.currentCirclePosition.classList.add("circle-icon--active");
}
function resetIndexes() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.targetIndex = 0;
  _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.currentSlide = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex];
  _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.nextSlide = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex + 1];
  _variables__WEBPACK_IMPORTED_MODULE_0__.slidePosition.prevSlide = _variables__WEBPACK_IMPORTED_MODULE_0__.galleryImgs[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex - 1];
  _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.currentCircle = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex];
  _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.nextCircle = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex + 1];
  _variables__WEBPACK_IMPORTED_MODULE_0__.circlePosition.prevCircle = _variables__WEBPACK_IMPORTED_MODULE_0__.circleIcons[_variables__WEBPACK_IMPORTED_MODULE_0__.setIndex.currentIndex - 1];
}

/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activePhotoBox: function() { return /* binding */ activePhotoBox; },
/* harmony export */   activeSliderBox: function() { return /* binding */ activeSliderBox; },
/* harmony export */   arrowDivs: function() { return /* binding */ arrowDivs; },
/* harmony export */   circleDivPosition: function() { return /* binding */ circleDivPosition; },
/* harmony export */   circleIconDivs: function() { return /* binding */ circleIconDivs; },
/* harmony export */   circleIcons: function() { return /* binding */ circleIcons; },
/* harmony export */   circleNav: function() { return /* binding */ circleNav; },
/* harmony export */   circlePosition: function() { return /* binding */ circlePosition; },
/* harmony export */   currentPage: function() { return /* binding */ currentPage; },
/* harmony export */   dropDownCarat: function() { return /* binding */ dropDownCarat; },
/* harmony export */   dropDownDiv: function() { return /* binding */ dropDownDiv; },
/* harmony export */   dropDownItems: function() { return /* binding */ dropDownItems; },
/* harmony export */   dropDownMenu: function() { return /* binding */ dropDownMenu; },
/* harmony export */   email: function() { return /* binding */ email; },
/* harmony export */   emailError: function() { return /* binding */ emailError; },
/* harmony export */   firstName: function() { return /* binding */ firstName; },
/* harmony export */   firstNameError: function() { return /* binding */ firstNameError; },
/* harmony export */   form: function() { return /* binding */ form; },
/* harmony export */   formDisabledText: function() { return /* binding */ formDisabledText; },
/* harmony export */   formFieldset: function() { return /* binding */ formFieldset; },
/* harmony export */   fullPageName: function() { return /* binding */ fullPageName; },
/* harmony export */   galleryImgs: function() { return /* binding */ galleryImgs; },
/* harmony export */   galleryMainDivs: function() { return /* binding */ galleryMainDivs; },
/* harmony export */   getAnimationID: function() { return /* binding */ getAnimationID; },
/* harmony export */   getLandscapeGal: function() { return /* binding */ getLandscapeGal; },
/* harmony export */   getLandscapeSliderBox: function() { return /* binding */ getLandscapeSliderBox; },
/* harmony export */   getLeftArrow: function() { return /* binding */ getLeftArrow; },
/* harmony export */   getLeftArrowIcon: function() { return /* binding */ getLeftArrowIcon; },
/* harmony export */   getPortraitGal: function() { return /* binding */ getPortraitGal; },
/* harmony export */   getPortraitSliderBox: function() { return /* binding */ getPortraitSliderBox; },
/* harmony export */   getRightArrow: function() { return /* binding */ getRightArrow; },
/* harmony export */   getRightArrowIcon: function() { return /* binding */ getRightArrowIcon; },
/* harmony export */   indexOfExtension: function() { return /* binding */ indexOfExtension; },
/* harmony export */   inputFields: function() { return /* binding */ inputFields; },
/* harmony export */   lastName: function() { return /* binding */ lastName; },
/* harmony export */   lastNameError: function() { return /* binding */ lastNameError; },
/* harmony export */   menuBar: function() { return /* binding */ menuBar; },
/* harmony export */   menuBtnStyle: function() { return /* binding */ menuBtnStyle; },
/* harmony export */   menuChildrenDiv: function() { return /* binding */ menuChildrenDiv; },
/* harmony export */   menuIcon: function() { return /* binding */ menuIcon; },
/* harmony export */   menuIconDiv: function() { return /* binding */ menuIconDiv; },
/* harmony export */   menuIconWidth: function() { return /* binding */ menuIconWidth; },
/* harmony export */   menuLinks: function() { return /* binding */ menuLinks; },
/* harmony export */   message: function() { return /* binding */ message; },
/* harmony export */   messageError: function() { return /* binding */ messageError; },
/* harmony export */   navigation: function() { return /* binding */ navigation; },
/* harmony export */   newMenuIconWidth: function() { return /* binding */ newMenuIconWidth; },
/* harmony export */   photoBoxes: function() { return /* binding */ photoBoxes; },
/* harmony export */   reduceMotion: function() { return /* binding */ reduceMotion; },
/* harmony export */   setIndex: function() { return /* binding */ setIndex; },
/* harmony export */   shortPageName: function() { return /* binding */ shortPageName; },
/* harmony export */   slidePosition: function() { return /* binding */ slidePosition; },
/* harmony export */   sliderAnimationCtrlDiv: function() { return /* binding */ sliderAnimationCtrlDiv; },
/* harmony export */   sliderPauseBtn: function() { return /* binding */ sliderPauseBtn; },
/* harmony export */   sliderPauseIcon: function() { return /* binding */ sliderPauseIcon; },
/* harmony export */   sliderPlayBtn: function() { return /* binding */ sliderPlayBtn; },
/* harmony export */   sliderPlayIcon: function() { return /* binding */ sliderPlayIcon; },
/* harmony export */   submitBtn: function() { return /* binding */ submitBtn; },
/* harmony export */   submitError: function() { return /* binding */ submitError; },
/* harmony export */   textArea: function() { return /* binding */ textArea; },
/* harmony export */   windowHeight: function() { return /* binding */ windowHeight; },
/* harmony export */   windowWidth: function() { return /* binding */ windowWidth; }
/* harmony export */ });
// Menu Variables
const navigation = document.querySelector("nav");
const menuIconDiv = document.querySelector(".menu-icon-div");
const menuIcon = document.querySelector(".menu-icon");
const menuIconWidth = menuIcon.offsetWidth;
const newMenuIconWidth = menuIconWidth / 2;
const menuBar = document.querySelector(".menu-items");
const currentPage = window.location.href;
const fullPageName = currentPage.substring(currentPage.lastIndexOf("/") + 1);
const indexOfExtension = fullPageName.indexOf(".");
const shortPageName = fullPageName.substring(0, indexOfExtension);

// Drop Down
const dropDownDiv = document.querySelector(".dropdown-div");
const dropDownCarat = document.querySelector(".gal-arrow");
const dropDownMenu = document.querySelector(".dropdown-content");

// Nav Styles
const menuChildrenDiv = document.querySelector(".menu-items");
const menuBtnStyle = Array.from(document.querySelectorAll(".menu-btn"));
const dropDownItems = Array.from(document.querySelectorAll(".dropdown-item"));

// Accessibility
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)") === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
const menuLinks = document.querySelectorAll(".menu-link");

// Contact Form Validation
const formDisabledText = document.querySelector(".form-disabled");
const form = document.querySelector("#contact");
const formFieldset = document.querySelector("fieldset");
const inputFields = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");
const firstName = document.getElementById("first-name");
const firstNameError = document.querySelector(".firstNameError");
const lastName = document.getElementById("last-name");
const lastNameError = document.querySelector(".lastNameError");
const email = document.getElementById("email");
const emailError = document.querySelector(".emailError");
const message = document.getElementById("message");
const messageError = document.querySelector(".messageError");
const submitBtn = document.querySelector(".send-contact");
const submitError = document.querySelector(".submitError");

// Window Dimensions
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

// Photo Gallery

let getPortraitGal = {
  galPortraitView: undefined,
  get portraitGalLocale() {
    return this.galPortraitView;
  },
  set portraitGalLocale(newPortraitGalLocale) {
    this.galPortraitView = newPortraitGalLocale;
  }
};
let getLandscapeGal = {
  galLandscapeView: undefined,
  get landscapeGalLocale() {
    return this.galLandscapeView;
  },
  set landscapeGalLocale(newLandscapeGalLocale) {
    this.galLandscapeView = newLandscapeGalLocale;
  }
};
let getPortraitSliderBox = {
  portraitSliderBox: undefined,
  get portraitSliderLocale() {
    return this.portraitSliderBox;
  },
  set portraitSliderLocale(newPortraitSliderLocale) {
    this.portraitSliderBox = newPortraitSliderLocale;
  }
};
let getLandscapeSliderBox = {
  landscapeSliderBox: undefined,
  get landscapeSliderLocale() {
    return this.landscapeSliderBox;
  },
  set landscapeSliderLocale(newLandscapeSliderLocale) {
    this.landscapeSliderBox = newLandscapeSliderLocale;
  }
};
let getAnimationID = {
  animationID: undefined,
  get animationIDValue() {
    return this.animationID;
  },
  set animationIDValue(newAnimationValue) {
    this.animationID = newAnimationValue;
  }
};
let sliderAnimationCtrlDiv = {
  animationCtrlDiv: undefined,
  get currentAnimationCtrlDiv() {
    return this.animationCtrlDiv;
  },
  set currentAnimationCtrlDiv(newAnimationCtrlDiv) {
    this.animationCtrlDiv = newAnimationCtrlDiv;
  }
};
let sliderPauseBtn = {
  pauseBtn: undefined,
  get currentPauseBtn() {
    return this.pauseBtn;
  },
  set currentPauseBtn(newPauseBtn) {
    this.pauseBtn = newPauseBtn;
  }
};
let sliderPauseIcon = {
  pauseIcon: undefined,
  get currentPauseIcon() {
    return this.pauseIcon;
  },
  set currentPauseIcon(newPauseIcon) {
    this.pauseIcon = newPauseIcon;
  }
};
let sliderPlayBtn = {
  playBtn: undefined,
  get currentPlayBtn() {
    return this.playBtn;
  },
  set currentPlayBtn(newPlayBtn) {
    this.playBtn = newPlayBtn;
  }
};
let sliderPlayIcon = {
  playIcon: undefined,
  get currentPlayIcon() {
    return this.playIcon;
  },
  set currentPlayIcon(newPlayIcon) {
    this.playIcon = newPlayIcon;
  }
};
const galleryMainDivs = document.querySelectorAll(".gal-main");
const arrowDivs = document.querySelectorAll(".arrow-div");
const photoBoxes = document.querySelectorAll(".photo-box");
let activeSliderBox = {
  activeBox: undefined,
  get currentActiveBox() {
    return this.activeBox;
  },
  set currentActiveBox(currentPageBox) {
    this.activeBox = currentPageBox;
  }
};
let activePhotoBox = {
  photoBox: undefined,
  get currentActivePhotoBox() {
    return this.photoBox;
  },
  set currentActivePhotoBox(currentPagePhotoBox) {
    this.photoBox = currentPagePhotoBox;
  }
};
let galleryImgs = {
  boxImgs: [],
  get boxImgsArray() {
    return this.boxImgs;
  },
  set boxImgsArray(currentBoxImgs) {
    this.boxImgs = currentBoxImgs;
  }
};

// export const circleNav = document.querySelectorAll(".img-dots-container");

const circleNav = {
  currentCircleNav: undefined,
  get thisCircleNav() {
    return this.currentCircleNav;
  },
  set thisCircleNav(getTheNav) {
    this.currentCircleNav = getTheNav;
  }
};
let circleIconDivs = {
  circleDivs: [],
  get circleDivsArray() {
    return this.circleDivs;
  },
  set circleDivsArray(newCircleDivsArray) {
    this.circleDivs = newCircleDivsArray;
  }
};
let circleIcons = {
  circles: [],
  get circleIconsArray() {
    return this.circles;
  },
  set circleIconsArray(newCirclesArray) {
    this.circles = newCirclesArray;
  }
};
const getRightArrow = {
  rightArrow: undefined,
  get rightArrowLocation() {
    return this.rightArrow;
  },
  set rightArrowLocation(newRightArrow) {
    this.rightArrow = newRightArrow;
  }
};
const getRightArrowIcon = {
  rightArrowIcon: undefined,
  get rightIconLocation() {
    return this.rightArrowIcon;
  },
  set rightIconLocation(newRightIcon) {
    this.rightArrowIcon = newRightIcon;
  }
};
const getLeftArrow = {
  leftArrow: undefined,
  get leftArrowLocation() {
    return this.leftArrow;
  },
  set leftArrowLocation(newLeftArrow) {
    this.leftArrow = newLeftArrow;
  }
};
const getLeftArrowIcon = {
  leftArrowIcon: undefined,
  get leftIconLocation() {
    return this.leftArrowIcon;
  },
  set leftIconLocation(newLeftIcon) {
    this.leftArrowIcon = newLeftIcon;
  }
};
let setIndex = {
  currentIndex: 0,
  get targetIndex() {
    return this.currentIndex;
  },
  set targetIndex(newTargetIndex) {
    this.currentIndex = newTargetIndex;
  }
};
let slidePosition = {
  currentSlide: galleryImgs.boxImgs[setIndex.currentIndex],
  nextSlide: galleryImgs.boxImgs[setIndex.currentIndex + 1],
  prevSlide: galleryImgs.boxImgs[setIndex.currentIndex - 1],
  get currentSlidePosition() {
    return this.currentSlide;
  },
  set currentSlidePosition(newCurrentSlide) {
    this.currentSlide = newCurrentSlide;
  },
  get nextSlidePosition() {
    return this.nextSlide;
  },
  set nextSlidePosition(newNextSlide) {
    this.nextSlide = newNextSlide;
  },
  get prevSlidePosition() {
    return this.prevSlide;
  },
  set prevSlidePosition(newPrevSlide) {
    this.prevSlide = newPrevSlide;
  }
};
let circleDivPosition = {
  currentCircleDiv: circleIconDivs.circleDivs[setIndex.currentIndex],
  nextCircleDiv: circleIconDivs.circleDivs[setIndex.currentIndex + 1],
  prevCircleDiv: circleIconDivs.circleDivs[setIndex.currentIndex - 1],
  get currentCircleDivPosition() {
    return this.currentCircleDiv;
  },
  set currentCircleDivPosition(newCurrentCircleDiv) {
    this.currentCircleDiv = newCurrentCircleDiv;
  },
  get nextCircleDivPosition() {
    return this.nextCircleDiv;
  },
  set nextCircleDivPosition(newNextCircleDiv) {
    this.nextCircleDiv = newNextCircleDiv;
  },
  get prevCircleDivPosition() {
    return this.prevCircleDiv;
  },
  set prevCircleDivPosition(newPrevCircleDiv) {
    this.prevCircleDiv = newPrevCircleDiv;
  }
};
let circlePosition = {
  currentCircle: circleIcons.circles[setIndex.currentIndex],
  nextCircle: circleIcons.circles[setIndex.currentIndex + 1],
  prevCircle: circleIcons.circles[setIndex.currentIndex - 1],
  get currentCirclePosition() {
    return this.currentCircle;
  },
  set currentCirclePosition(newCurrentCircle) {
    this.currentCircle = newCurrentCircle;
  },
  get nextCirclePosition() {
    return this.nextCircle;
  },
  set nextCirclePosition(newNextCircle) {
    this.nextCircle = newNextCircle;
  },
  get prevCirclePosition() {
    return this.prevCircle;
  },
  set prevCirclePosition(newPrevCircle) {
    this.prevSlide = newPrevCircle;
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navStyles */ "./src/navStyles.js");
/* harmony import */ var _dropDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropDown */ "./src/dropDown.js");
/* harmony import */ var _photoSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photoSlider */ "./src/photoSlider.js");
/* harmony import */ var _form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-validation */ "./src/form-validation.js");




console.log("photogallery");
document.addEventListener("DOMContentLoaded", e => {
  console.log("The page is loaded");
  (0,_navStyles__WEBPACK_IMPORTED_MODULE_0__.ctrlMenuVisibility)();
  (0,_navStyles__WEBPACK_IMPORTED_MODULE_0__.addAriaCurrent)();
  (0,_dropDown__WEBPACK_IMPORTED_MODULE_1__.galleriesClickMenu)();
  (0,_photoSlider__WEBPACK_IMPORTED_MODULE_2__.gallerySetup)();
  (0,_form_validation__WEBPACK_IMPORTED_MODULE_3__.validateFormFields)();
});
/******/ })()
;
//# sourceMappingURL=index.2f83235e.js.map