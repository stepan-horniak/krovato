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

    //===========header-auto-cal=================
    if (el.closest(".header-main-tell__icon")) {
      window.location.href = "tel:+380931234567"
    }

    //================================
  }
  document.addEventListener("click", (e) => documentActions(e))
}
