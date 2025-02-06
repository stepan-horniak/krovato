// Строгий режим
"use strict"
// Touch Screen?
const isTouchScreen = window.matchMedia("(any-hover:none)").matches

window.addEventListener("load", windowLoaded)

function windowLoaded() {
  function documentActions(e) {
    const el = e.target
    // ========header-language============
    const language = document.querySelector(
      ".header-top-consultation__active-language"
    )
    if (el.closest(".header-top-consultation__language")) {
      language.classList.add("active-language")
    } else language.classList.remove("active-language")
    //=============header-tel-popap==============================

    const numberTelPopap = document.querySelector(
      ".header-main-tell-info__popap"
    )
    const numberTelArrow = document.querySelector(
      ".header-main-tell__arrow-popap"
    )
    if (el.closest(".header-main-tell__arrow")) {
      if (numberTelPopap.classList.contains("active")) {
        numberTelPopap.classList.remove("active")
        numberTelArrow.classList.remove("active")
      } else {
        numberTelPopap.classList.add("active")
        numberTelArrow.classList.add("active")
      }
    } else if (!el.closest(".header-main__tell")) {
      numberTelPopap.classList.remove("active")
      numberTelArrow.classList.remove("active")
    }
    console.log(el)

    //===========header-auto-cal=================
    if (el.closest(".header-main-tell__icon")) {
      window.location.href = "tel:+380931234567"
    }
    //=============burger-menu===================
    if (el.closest(".header-main-burger")) {
      const burger = document.querySelector(".header-main-burger")
      const menu = document.querySelector(".header-main__menu-burger")
      burger.classList.toggle("active")
      menu.classList.toggle("active")
    }
    if (
      !el.closest(".header-main-burger") &&
      !el.closest(".header-main__menu-burger")
    ) {
      const burger = document.querySelector(".header-main-burger")
      const menu = document.querySelector(".header-main__menu-burger")
      burger.classList.remove("active")
      menu.classList.remove("active")
    }

    //================================
  }
  document.addEventListener("click", (e) => documentActions(e))

  //========================
  const mediaQuery991 = window.matchMedia("(max-width: 991.98px)")

  function handleScreenChange(e) {
    const topContainer = document.querySelector(".header-top__container")
    const parrentTopContainer = document.querySelector(".header-top")

    const bottomContainer = document.querySelector(".header-bottom__container")
    const parrentBottomContainer = document.querySelector(".header-bottom")

    const burgerMenu = document.querySelector(".header-main__menu-burger")

    if (e.matches) {
      burgerMenu.append(bottomContainer)
      burgerMenu.append(topContainer)
    } else {
      parrentTopContainer.append(topContainer)
      parrentBottomContainer.append(bottomContainer)
    }
  }
  handleScreenChange(mediaQuery991)

  mediaQuery991.addEventListener("change", handleScreenChange)
  //===============================

  //========================
  const mediaQuery767 = window.matchMedia("(max-width: 767.98px)")

  function handleScreenChange767(e) {
    const mainContainer = document.querySelector(".header-main__container")
    const parrentEl = document.querySelector(".header-bottom")
    const headerElButton = document.querySelector(
      ".header-main-catalog__button"
    )
    const headerElSearch = document.querySelector(".header-main__search")
    const headerElFavorite = document.querySelector(".header-main__favorite")
    const headerElTel = document.querySelector(".header-main__tell")

    if (e.matches) {
      parrentEl.append(headerElButton)
      parrentEl.append(headerElSearch)
      parrentEl.append(headerElFavorite)
    } else {
      mainContainer.append(headerElButton)
      mainContainer.append(headerElSearch)
      mainContainer.append(headerElTel)
      mainContainer.append(headerElFavorite)
    }
  }
  handleScreenChange767(mediaQuery767)

  mediaQuery767.addEventListener("change", handleScreenChange767)
}
