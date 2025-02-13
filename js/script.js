"use strict"

window.addEventListener("load", windowLoaded)

function windowLoaded() {
  //===========================
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
    //=============burger-menu===================
    const burgerHeader = document.querySelector(".header-main-burger")
    const menuHeader = document.querySelector(".header-main__menu-burger")
    if (el.closest(".header-main-burger")) {
      burgerHeader.classList.toggle("active")
      menuHeader.classList.toggle("active")
    }

    if (
      !el.closest(".header-main-burger") &&
      !el.closest(".header-main__menu-burger")
    ) {
      burgerHeader.classList.remove("active")
      menuHeader.classList.remove("active")
    }
    //================header-search-popap===========================
    if (
      el.closest(".header-main-search") &&
      window.matchMedia("(max-width: 767.98px)").matches
    ) {
      const searchEl = document.querySelector(".header-search__container")
      searchEl.classList.toggle("active")
    }
    if (
      !el.closest(".header-main-search") &&
      !el.closest(".header-search__container")
    ) {
      const searchEl = document.querySelector(".header-search__container")
      searchEl.classList.remove("active")
    }
    //==================header-catalog-button==================
    const buttonCatalogHeader = document.querySelector(
      ".header-main-catalog__button"
    )
    const searchElCatalogHeader = document.querySelector(".header-main-catalog")

    if (el.closest(".header-main-catalog__button")) {
      buttonCatalogHeader.classList.toggle("active")
      searchElCatalogHeader.classList.toggle("active")
    }
    if (
      !el.closest(".header-main-catalog__button") &&
      !el.closest(".header-button-popap__list")
    ) {
      buttonCatalogHeader.classList.remove("active")

      searchElCatalogHeader.classList.remove("active")
    }
    //=================cheader-atalog-button-list===========================
    if (el.closest(".header-button-popap__item")) {
      const allItems = document.querySelectorAll(".header-button-popap__item")
      const allSubMenus = document.querySelectorAll(
        ".header-button-popap-insert__list"
      )
      const clickedItem = el.closest(".header-button-popap__item")

      const subMenu = clickedItem.querySelector(
        ".header-button-popap-insert__list"
      )

      allItems.forEach((item) => item.classList.remove("active"))
      allSubMenus.forEach((sub) => (sub.style.display = "none"))

      if (subMenu) {
        const isActive = clickedItem.classList.contains("active")

        if (!isActive) {
          clickedItem.classList.add("active")
          subMenu.style.display = "block"
        }
      }
    }
    //===================footer-list-active==================
    if (el.closest(".wrapper-info-footer__block")) {
      const allElements = document.querySelectorAll(
        ".wrapper-info-footer__list"
      )

      const currentParrentItem = el.closest(".wrapper-info-footer__block")
      const currentChildrenItem = currentParrentItem.querySelector(
        ".wrapper-info-footer__list"
      )

      const allElementsArrow = document.querySelectorAll(
        ".wrapper-info-footer__title"
      )
      const currentChildrenArrow = currentParrentItem.querySelector(
        ".wrapper-info-footer__title"
      )

      if (currentChildrenItem && currentChildrenArrow) {
        allElementsArrow.forEach((el) => el.classList.remove("active"))
        allElements.forEach((el) => el.classList.remove("active"))
        currentChildrenItem.classList.add("active")
        currentChildrenArrow.classList.add("active")
      }
    }

    //==========================main-button=======================
    if (el.closest(".main__button")) {
      const textElement = document.querySelector(".main__text")
      textElement.classList.toggle("active")
    }
    //===================hidden-body==============================
    if (
      (burgerHeader.classList.contains("active") && window.innerWidth <= 500) ||
      buttonCatalogHeader.classList.contains("active")
    )
      document.body.style.overflow = "hidden"
    else document.body.style.overflow = "auto"

    //============================basket=================================
    if (el.closest(".card-popular-buy__basket")) {
      addBasket(el.closest(".card-popular-buy__basket"))
    }

    //=============================================================
    //=============================================================
  }
  document.addEventListener("click", (e) => documentActions(e))
  //=============================================================
  function addBasket(elClik) {
    const basked = document.querySelector(".header-basket__product")
    const clicCard = elClik.closest(".card-popular")
    const cardClone = clicCard.cloneNode(true)

    basked.append(cardClone)
  }

  //==============================================================
  function handleScreenChange(e) {
    const screenWidth = window.innerWidth

    const topContainer = document.querySelector(".header-top__container")
    const parrentTopContainer = document.querySelector(".header-top")

    const bottomContainer = document.querySelector(".header-bottom__container")
    const parrentBottomContainer = document.querySelector(".header-bottom")

    const burgerMenu = document.querySelector(".header-main__menu-burger")

    if (screenWidth <= 991.98) {
      burgerMenu.append(bottomContainer)
      burgerMenu.append(topContainer)
    } else {
      parrentTopContainer.append(topContainer)
      parrentBottomContainer.append(bottomContainer)
    }

    //===============header-dinamic-change-el============
    const mainContainer = document.querySelector(".header-main__container")
    const parrentEl = document.querySelector(".header-bottom")
    const headerElButton = document.querySelector(
      ".header-main-catalog__button"
    )
    const headerElSearch = document.querySelector(".header-main__search")
    const headerElFavorite = document.querySelector(".header-main__favorite")
    const headerElTel = document.querySelector(".header-main__tell")

    if (screenWidth <= 767.98) {
      parrentEl.append(headerElButton)
      parrentEl.append(headerElSearch)
      parrentEl.append(headerElFavorite)
    } else {
      mainContainer.append(headerElButton)
      mainContainer.append(headerElSearch)
      mainContainer.append(headerElTel)
      mainContainer.append(headerElFavorite)
    }

    //===============header-close-search-header===============
    if (screenWidth > 767.98) {
      const searchEl = document.querySelector(".header-search__container")
      searchEl.classList.remove("active")
    }
    //===============footer===========================
    const footerAdressContainer = document.querySelector(".footer__adress")
    const footerInfoContainer = document.querySelector(".footer-info__wrapper")
    const footerMainContainer = document.querySelector(".footer__row")
    const footerSocialsContainer = document.querySelector(".footer__socials")
    const footerLogo = document.querySelector(".footer-socials__logo")
    const footerParrentLogo = document.querySelector(".footer-socials__row")

    //==================

    if (screenWidth < 991.98) {
      footerInfoContainer.prepend(footerLogo)
      footerInfoContainer.append(footerAdressContainer)
      footerInfoContainer.append(footerSocialsContainer)
    } else {
      footerParrentLogo.prepend(footerLogo)
      footerMainContainer.prepend(footerSocialsContainer)
      footerInfoContainer.append(footerAdressContainer)
    }

    if (screenWidth >= 991.98 && screenWidth < 1100) {
      footerInfoContainer.append(footerAdressContainer)
    } else if (screenWidth >= 1100) {
      footerMainContainer.append(footerAdressContainer)
    }
    //==================change-img-top-slider=============================
    if (screenWidth < 767.98) {
      document.querySelectorAll(".top__swiper-slide img").forEach((img) => {
        img.src = "./images/top-slider767.png" // Для мобільних
      })
    }
    if (screenWidth > 767.98) {
      document.querySelectorAll(".top__swiper-slide img").forEach((img) => {
        img.src = "./images/top-slider.png" // Для десктопа
      })
    }
    //====================blogs===========================
    const blogsParrent = document.querySelectorAll(".blogs__swiper-slide")
    const blogsItems = document.querySelectorAll(".blogs__wrapper")
    const blogsContainer = document.querySelector(".blogs__after-swiper")
    const blogsButton = document.querySelector(".blogs-title__text")
    const blogsButtonParrent = document.querySelector(".blogs-control__title")

    if (screenWidth < 550) {
      blogsItems.forEach((el) => blogsContainer.append(el))
      blogsContainer.append(blogsButton)
    } else {
      blogsParrent.forEach((el, index) => el.append(blogsItems[index]))
      blogsButtonParrent.append(blogsButton)
    }
    //===============================================
  }
  handleScreenChange()
  window.addEventListener("resize", handleScreenChange)
  //========slider-top=============
  const swiperMainTop = new Swiper(".top__swiper", {
    loop: true, // Безкінечний слайдер
    slidesPerView: 1, // Один слайд на екрані
    spaceBetween: 20, // Відстань між слайдами
    pagination: {
      el: ".top__swiper-pagination", // Пагінація
      clickable: true, // Дозволяє натискати на точки пагінації
    },
    navigation: {
      nextEl: ".top__swiper-button-next", // Кнопка для переходу до наступного слайду
      prevEl: ".top__swiper-button-prev", // Кнопка для повернення до попереднього слайду
    },
  })
  //========slider-Shares=============

  const swiperMainShares = new Swiper(".shares__swiper", {
    loop: true, // Безкінечний слайдер
    slidesPerView: 3, // Три слайди на екрані
    spaceBetween: 30, // Відстань між слайдами
    navigation: {
      nextEl: ".shares__swiper-button-next", // Кнопка для переходу до наступного слайду
      prevEl: ".shares__swiper-button-prev", // Кнопка для повернення до попереднього слайду
    },
    breakpoints: {
      // Медіа-запит для екранів до 460px
      319.98: {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: ".shares__swiper-pagination", // Пагінація
          clickable: true, // Дозволяє натискати на точки пагінації
        },
      },
      // Медіа-запит для екранів до 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // Медіа-запит для екранів до 1024px
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
    },
  })
  //================reviews-swiper=========================
  const swiperReviews = new Swiper(".slider-reviews__swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    scrollbar: {
      el: ".reviews-slider-scroll",
      dragClass: "reviews-slider-scroll-image",
      hide: false,
      dragSize: 50,
      draggable: true,
      clickable: true,
    },
    pagination: {
      el: ".slider-reviews__swiper-pagination", // Пагінація
      clickable: true, // Дозволяє натискати на точки пагінації
    },
  })
  //================blogs-swiper=========================
  const swiperMainBlogs = new Swiper(".blogs__swiper", {
    loop: true, // Безкінечний слайдер
    slidesPerView: 3, // Три слайди на екрані
    spaceBetween: 30, // Відстань між слайдами
    navigation: {
      nextEl: ".blogs__swiper-button-next", // Кнопка для переходу до наступного слайду
      prevEl: ".blogs__swiper-button-prev", // Кнопка для повернення до попереднього слайду
    },
    breakpoints: {
      // Медіа-запит для екранів до 460px
      319.98: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // Медіа-запит для екранів до 768px
      550: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // Медіа-запит для екранів до 1024px
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
    },
  })
  //=============================
}
