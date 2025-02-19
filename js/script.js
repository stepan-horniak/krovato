"use strict"

window.addEventListener("load", windowLoaded)

function windowLoaded() {
  //=======================================================================
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

      if (
        currentChildrenItem.classList.contains("active") &&
        currentChildrenArrow.classList.contains("active")
      ) {
        currentChildrenItem.classList.remove("active")
        currentChildrenArrow.classList.remove("active")
      } else if (currentChildrenItem && currentChildrenArrow) {
        allElementsArrow.forEach((el) => el.classList.remove("active"))
        allElements.forEach((el) => el.classList.remove("active"))
        currentChildrenItem.classList.add("active")
        currentChildrenArrow.classList.add("active")
      }
    }

    //==========================seo-button=======================
    if (el.closest(".seo__button")) {
      const textElement = document.querySelector(".seo__text")
      textElement.classList.toggle("active")
    }

    //============================basket=================================
    if (el.closest(".card-popular-buy__basket")) {
      addProductBasket(el.closest(".card-popular-buy__basket"))
      countBasket()
      totalSumBasket()
    }
    //============================remove-el-basket====================
    if (el.closest(".cross-basket-header")) {
      removeProduct(el.closest(".cross-basket-header"))
      countBasket()
      totalSumBasket()
    }
    //=====================countElementBasket=================
    if (el.closest(".count-basket-header")) {
      countElementBasket(el)
      totalSumBasket()
    }
    //=====================countElementBasket=================
    const baskedContainer = document.querySelector(
      ".header-basket__product"
    ).children
    const baskedIconNumber = document.querySelector(
      ".header-main-favorite__count-element"
    )
    if (baskedContainer.length) {
      baskedIconNumber.classList.add("active")
      baskedIconNumber.textContent = countBasket()
    } else {
      baskedIconNumber.classList.remove("active")
    }

    //==========================basket-open===================================
    const headerBasketBlock = document.querySelector(".header-basket")
    if (
      el.closest(".header-main-favorite__basket") ||
      el.closest(".top-header-basket__cross") ||
      el.closest(".buttons-header-basket__continue")
    ) {
      headerBasketBlock.classList.toggle("active")
    }
    //==========================beds-open===================================
    if (el.closest(".beds__hidden")) {
      const bedsButton = document.querySelector(".beds__hidden")
      const bedsContainer = document.querySelector(".beds__grid")
      bedsContainer.classList.toggle("active")
      bedsButton.classList.toggle("active")
      if (bedsButton.classList.contains("active")) {
        bedsButton.textContent = "Приховати підкатегорії"
      } else bedsButton.textContent = "Показати підкатегорії"
    }
    //========================aside-opensub-menu====================
    if (el.closest(".head-block-catalog")) {
      const currentElement = el.closest(".block-aside-filter-catalog")

      const filterHead = currentElement.querySelector(".head-block-catalog")
      const iconHead = currentElement.querySelector(
        ".head-block-catalog__icons"
      )
      filterHead.classList.toggle("active")
      iconHead.classList.toggle("active")
    }
    //========================add-list-filters====================
    if (el.closest(".checkbox-sub-menu__label")) {
      addCheckedElements()
      filterProductsPrice(beds)

      filtersCatalog(beds)
      buttonseeMoreProduct()
    }
    if (el.closest(".cancel-filter-catalog__button--Yelow")) {
      removeListChecked()
      filterProductsPrice(beds)

      filtersCatalog(beds)
      buttonseeMoreProduct()
    }
    if (el.closest(".cancel-filter-catalog__button")) {
      if (!el.classList.contains("cancel-filter-catalog__button--Yelow")) {
        removeElementChecked(el)
        el.remove()
        filterProductsPrice(beds)
        filtersCatalog(beds)
        buttonseeMoreProduct()
      }
    }
    if (el.closest(".price-sub-menu__button")) {
      addFilterSum()
      filterProductsPrice(beds)
      buttonseeMoreProduct()
    }
    //===================catalog-more-products==============================
    if (el.closest(".catalog__button-more")) {
      showMoreProducts()
    }

    //======================question-popap===========================
    if (el.closest(".card-question__item")) {
      const currentElement = el.closest(".card-question__item")
      const elements = document.querySelectorAll(".card-question__item")

      if (currentElement.classList.contains("active")) {
        currentElement.classList.remove("active")
      } else {
        elements.forEach((el) => el.classList.remove("active"))
        currentElement.classList.add("active")
      }
    }

    //===================hidden-body==============================
    if (
      (burgerHeader.classList.contains("active") && window.innerWidth <= 500) ||
      buttonCatalogHeader.classList.contains("active") ||
      headerBasketBlock.classList.contains("active")
    )
      document.body.style.overflow = "hidden"
    else document.body.style.overflow = "auto"

    //=============================================================
  }
  document.addEventListener("click", (e) => documentActions(e))

  //========================================================================
  function handleScreenChange(e) {
    const screenWidth = window.innerWidth

    const topContainer = document.querySelector(".header-top__container")
    const parrentTopContainer = document.querySelector(".header-top")

    const bottomContainer = document.querySelector(".header-bottom__container")
    const parrentBottomContainer = document.querySelector(".header-bottom")

    const burgerMenu = document.querySelector(".header-main__menu-burger")
    if (burgerMenu) {
      if (screenWidth <= 991.98) {
        burgerMenu.append(bottomContainer)
        burgerMenu.append(topContainer)
      } else {
        parrentTopContainer.append(topContainer)
        parrentBottomContainer.append(bottomContainer)
      }
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
    if (parrentEl) {
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
    if (footerInfoContainer) {
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
    }
    //==================change-img-top-slider=============================
    const topSection = document.querySelector(".top")
    if (topSection) {
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
    }
    //====================blogs===========================
    const blogsParrent = document.querySelectorAll(".blogs__swiper-slide")
    const blogsItems = document.querySelectorAll(".blogs__wrapper")
    const blogsContainer = document.querySelector(".blogs__after-swiper")
    const blogsButton = document.querySelector(".blogs-title__text")
    const blogsButtonParrent = document.querySelector(".blogs-control__title")
    if (blogsContainer) {
      if (screenWidth < 550) {
        blogsItems.forEach((el) => blogsContainer.append(el))
        blogsContainer.append(blogsButton)
      } else {
        blogsParrent.forEach((el, index) => el.append(blogsItems[index]))
        blogsButtonParrent.append(blogsButton)
      }
    }
    //=====================filter=========================

    const catalogText = document.querySelector(".top-filter-catalog__sort-text")
    const catalogSelect = document.querySelector(
      ".top-filter-catalog__sort-popap"
    )
    const catalogFiltersContainer = document.querySelector(
      ".cancel-filter-catalog"
    )
    const catalogElementsFilter = document.querySelector(
      ".cancel-filter-catalog__row"
    )
    const catalogContainerСhoice = document.querySelector(".top-filter-catalog")

    if (catalogFiltersContainer && catalogContainerСhoice) {
      if (screenWidth <= 991.98) {
        catalogFiltersContainer.append(catalogText, catalogSelect)
        catalogContainerСhoice.append(catalogElementsFilter)
      } else {
        catalogContainerСhoice.append(catalogText, catalogSelect)
        catalogFiltersContainer.append(catalogElementsFilter)
      }
    }
    //===============================================
  }
  handleScreenChange()
  window.addEventListener("resize", handleScreenChange)
  //========slider-top===========================
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
  //========slider-Shares========================

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
  //================reviews-swiper===============
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
  //================blogs-swiper=================
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
  //=======================================

  const mainProductReviews = new Swiper(".reviews__swiper", {
    spaceBetween: 20,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      // Медіа-запит для екранів до 460px
      319.98: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // Медіа-запит для екранів до 768px
      767.98: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      // Медіа-запит для екранів до 1024px
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  })
  const mainProduct = new Swiper(".main-slider__swiper", {
    loop: true, // Безкінечний слайдер
    // slidesPerView: 1, // Три слайди на екрані
    spaceBetween: 10, // Відстань між слайдами
    navigation: {
      nextEl: ".main-slider__swiper-button-prev", // Кнопка для переходу до наступного слайду
      prevEl: ".main-slider__swiper-button-next", // Кнопка для повернення до попереднього слайду
    },
    pagination: {
      el: ".main-slider__swiper-pagination", // Пагінація
      clickable: true, // Дозволяє натискати на точки пагінації
    },
    thumbs: {
      swiper: mainProductReviews,
    },
  })
  //=============================================
  //========================aside-range====================
  const rangeSlider = document.getElementById("uiRangeSlider")
  const intutFrom = document.querySelector(".price-sub-menu__price-from")
  const intutTo = document.querySelector(".price-sub-menu__price-to")
  const arrInputs = [intutFrom, intutTo]
  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [5000, 20000],
      connect: true,
      step: 1,
      range: {
        min: 0,
        max: 30000,
      },
    })
    rangeSlider.noUiSlider.on("update", function (values, handle) {
      arrInputs[handle].value = parseFloat(values[handle])
    })
  }
  //======================basket-add=============
  function addProductBasket(elClik) {
    const baskedContainer = document.querySelector(".header-basket__product")
    const clicCard = elClik.closest(".card-popular")

    const titleProduct = clicCard.querySelector(".card-popular__title")
    const allElements = baskedContainer.querySelectorAll(".card-popular")

    let hasElBasked = false
    let countBaskedEl = null

    allElements.forEach((el) => {
      const baskedElTitle = el.querySelector(".card-popular__title")
      if (titleProduct.textContent === baskedElTitle.textContent)
        hasElBasked = true
      countBaskedEl = el.querySelector(".count-basket-header__number")
    })

    if (hasElBasked) {
      let count = parseFloat(countBaskedEl.textContent)
      count += 1
      return (countBaskedEl.textContent = count)
    } else {
      const cardClone = clicCard.cloneNode(true)
      const createCount = `
        <div class="count-basket-header">
          <div class="count-basket-header__minus">-</div>
          <div class="count-basket-header__number">1</div>
          <div class="count-basket-header__plus">+</div>
        </div>
      `
      const createCross = `
        <div class="cross-basket-header _icon-cross"></div>
      `
      cardClone.insertAdjacentHTML("beforeend", createCount)
      cardClone.insertAdjacentHTML("beforeend", createCross)

      baskedContainer.append(cardClone)
    }
  }
  //===============count-basket==================
  function countBasket() {
    const countElement = document.querySelector(".top-header-basket__number")

    const basketWrapper = document.querySelector(".header-basket__wrapper")
    const elementsBasket = basketWrapper.querySelectorAll(".card-popular")
    const count = elementsBasket.length
    countElement.textContent = count
    return count
  }
  //================remove-basket================
  function removeProduct(elClick) {
    const cardEl = elClick.closest(".card-popular")
    cardEl.remove()
  }
  //===============count-basket==================
  function countElementBasket(el) {
    let clicCard = el.closest(".card-popular")

    let currentCountElement = clicCard.querySelector(
      ".count-basket-header__number"
    )
    let count = parseFloat(currentCountElement.textContent)

    if (el.closest(".count-basket-header__minus") && count > 1) {
      count -= 1
    }

    if (el.closest(".count-basket-header__plus")) {
      count += 1
    }

    return (currentCountElement.textContent = count)
  }
  //====================total-sum-basket=========
  function totalSumBasket() {
    const containerBasket = document.querySelector(".header-basket__product")
    const products = containerBasket.querySelectorAll(".card-popular")

    let sum = 0
    products.forEach((el) => {
      const card = el.querySelector(".card-price__price")
      const countElements = el.querySelector(".count-basket-header__number")

      sum +=
        parseFloat(card.textContent.replaceAll(/\s/g, "")) *
        parseFloat(countElements.textContent)
    })
    const containerSum = document.querySelector(
      ".buttons-header-basket__total-sum"
    )

    containerSum.textContent = `${sum} грн`
  }
  //====================filters-checkbox=========
  function removeElementChecked(el) {
    const textEl = el.textContent

    const listChecked = document.querySelectorAll(
      'input[type="checkbox"].checkbox-sub-menu__input:checked'
    )

    listChecked.forEach((el) => {
      const parrentEl = el.parentElement
      if (parrentEl.lastElementChild.textContent === textEl) {
        el.checked = false
      }
    })
  }
  //===========
  function removeListChecked() {
    const containerAddElements = document.querySelector(
      ".cancel-filter-catalog__row"
    )
    while (containerAddElements.children.length > 1) {
      containerAddElements.removeChild(containerAddElements.lastElementChild)
    }
    const listChecked = document.querySelectorAll(
      'input[type="checkbox"].checkbox-sub-menu__input:checked'
    )
    listChecked.forEach((el) => (el.checked = false))
  }
  //===========
  function addCheckedElements() {
    const containerAddElements = document.querySelector(
      ".cancel-filter-catalog__row"
    )
    const currentElements = containerAddElements.querySelectorAll(
      ".cancel-filter-catalog__button"
    )
    const buttonClearList = containerAddElements.querySelector(
      ".cancel-filter-catalog__button--Yelow"
    )
    const buttonPrice = containerAddElements.querySelector(
      ".cancel-filter-catalog__button-price"
    )

    for (const element of currentElements) {
      if (element !== buttonClearList && element !== buttonPrice) {
        element.remove()
      }
    }

    const listChecked = document.querySelectorAll(
      'input[type="checkbox"].checkbox-sub-menu__input:checked'
    )

    listChecked.forEach((el) => {
      const span = el.nextElementSibling.textContent
      const createButton = document.createElement("button")
      createButton.textContent = span
      createButton.classList.add("cancel-filter-catalog__button")
      createButton.classList.add("_icon-cross")
      containerAddElements.append(createButton)
    })
  }
  //===========
  function addFilterSum() {
    const containerAddElements = document.querySelector(
      ".cancel-filter-catalog__row"
    )

    const elements = containerAddElements.querySelectorAll(
      ".cancel-filter-catalog__button"
    )

    elements.forEach((el) => {
      if (el.textContent.startsWith("Ціна:")) {
        el.remove()
      }
    })
    const inputFrom = document.querySelector(".price-sub-menu__price-from")
    const inputTo = document.querySelector(".price-sub-menu__price-to")
    const createButton = document.createElement("button")
    createButton.textContent = `Ціна: ${inputFrom.value} - ${inputTo.value}`
    createButton.classList.add("cancel-filter-catalog__button-price")
    createButton.classList.add("cancel-filter-catalog__button")
    createButton.classList.add("_icon-cross")
    containerAddElements.append(createButton)
  }

  //=============components-beds====================
  class CreateBeds {
    constructor(arrBebs) {
      this.arrBebs = arrBebs
    }
    createCard(
      manufacturer,
      type,
      size,
      category,
      name,
      availability,
      src,
      price,
      discountPrice
    ) {
      const divContainerCard = document.createElement("div")
      divContainerCard.className = "card-popular"
      divContainerCard.setAttribute("manufacturer", manufacturer)
      divContainerCard.setAttribute("type", type)
      divContainerCard.setAttribute("name", name)
      divContainerCard.setAttribute("category", category)
      divContainerCard.setAttribute("availability", availability)
      divContainerCard.setAttribute("size", size)
      divContainerCard.setAttribute("price", price)
      //=============================
      const aElImage = document.createElement("a")
      aElImage.className = "card-popular__image"
      aElImage.setAttribute("href", "#")
      const imgEl = document.createElement("img")
      imgEl.setAttribute("src", src)
      imgEl.setAttribute("href", "#")
      imgEl.setAttribute("alt", "Bed Image")
      aElImage.append(imgEl)
      divContainerCard.append(aElImage)

      const divElParameter = document.createElement("div")
      divElParameter.className = "card-popular__parameters"
      divElParameter.textContent = `Розмір: ${size} мм`
      divContainerCard.append(divElParameter)

      const divElTitle = document.createElement("div")
      divElTitle.className = "card-popular__title"
      divElTitle.textContent = name
      divContainerCard.append(divElTitle)

      const divElInStock = document.createElement("div")
      divElInStock.classList.add("card-popular__in-stoсk")
      if (availability === "В наявності")
        divElInStock.classList.add("_icon-in-stock")
      else divElInStock.classList.add("_icon-cross")
      divElInStock.textContent = availability
      divContainerCard.append(divElInStock)
      //=================================================
      const divElBay = document.createElement("div")
      divElBay.classList.add("card-popular__buy")
      divElBay.classList.add("card-popular-buy")

      const divElPrice = document.createElement("div")
      divElPrice.classList.add("card-popular-buy__price")
      divElPrice.classList.add("card-price")

      const divElPriceSale = document.createElement("div")
      divElPriceSale.classList.add("card-price__sale")
      divElPriceSale.textContent = discountPrice
      divElPrice.append(divElPriceSale)

      const divElPricePrice = document.createElement("div")
      divElPricePrice.classList.add("card-price__price")
      divElPricePrice.textContent = price
      divElPrice.append(divElPricePrice)

      divElBay.append(divElPrice)

      const divElLikes = document.createElement("div")
      divElLikes.classList.add("card-popular-buy__likes")
      divElLikes.classList.add("_icon-likes")
      divElBay.append(divElLikes)

      const divElBasket = document.createElement("div")
      divElBasket.classList.add("card-popular-buy__basket")
      divElBasket.classList.add("_icon-basket")
      divElBay.append(divElBasket)

      divContainerCard.append(divElBay)
      this.card = divContainerCard
      return divContainerCard
    }
    render() {
      const container = document.querySelector(".catalog__products")
      if (container) {
        for (const element of this.arrBebs) {
          container.append(
            this.createCard(
              element.manufacturer,
              element.type,
              element.size,
              element.category,
              element.name,
              element.availability,
              element.src,
              element.price,
              element.discountPrice
            )
          )
        }
      }
    }
  }
  const containerBeds = document.querySelector(".catalog__products")
  if (containerBeds) {
    const createBeds = new CreateBeds(beds)
    createBeds.render()
  }

  //======================show-content-button===========================
  function seeMoreProduct() {
    const containerBeds = document.querySelector(".catalog__products")
    if (!containerBeds) return

    let count = 9
    const products = Array.from(containerBeds.querySelectorAll(".card-popular"))

    products.forEach((el, index) => {
      el.style.display = index < count ? "flex" : "none"
    })

    return function showMore() {
      count += 6

      products.forEach((el, index) => {
        if (index < count) {
          el.style.display = "flex"
        }
      })

      if (count >= products.length) {
        document.querySelector(".catalog__button-more").style.display = "none"
      }
    }
  }
  const showMoreProducts = seeMoreProduct()
  function buttonseeMoreProduct() {
    const productsContainer = containerBeds.querySelectorAll(".card-popular")
    if (productsContainer) {
      if (productsContainer.length < 9)
        document.querySelector(".catalog__button-more").style.display = "none"
      else
        document.querySelector(".catalog__button-more").style.display = "flex"
    }
  }
  //==================filter-catalog============

  function filtersCatalog(dataList) {
    const filtersContainer = document.querySelector(
      ".cancel-filter-catalog__row"
    )
    const allButtons = filtersContainer.querySelectorAll(
      ".cancel-filter-catalog__button"
    )

    document.querySelector(".catalog__products").innerHTML = ""

    const filtersText = Array.from(allButtons)
      .filter((btn) => btn.parentElement === filtersContainer)
      .map((el) =>
        el.textContent.trim().toLocaleLowerCase().replaceAll(" ", "")
      )

    const res = dataList.filter((list) => {
      return filtersText.some((filter) => {
        return Object.values(list).some((value) => {
          const normalizedValue = value
            .toString()
            .trim()
            .toLowerCase()
            .replaceAll(" ", "")
          const normalizedFilter = filter
          return normalizedValue === normalizedFilter
        })
      })
    })

    const createBeds = new CreateBeds(res)
    createBeds.render()
  }

  function sortProductsPrice(e) {
    const containerBeds = document.querySelector(".catalog__products")

    const cards = Array.from(containerBeds.children)

    if (e.target.value === "downPrice") {
      cards.sort((a, b) => {
        const priceA = parseInt(a.getAttribute("price"))
        const priceB = parseInt(b.getAttribute("price"))

        return priceB - priceA
      })
    }
    if (e.target.value === "upPrice") {
      cards.sort((a, b) => {
        const priceA = parseInt(a.getAttribute("price"))
        const priceB = parseInt(b.getAttribute("price"))

        return priceA - priceB
      })
    }
    containerBeds.innerHTML = ""
    cards.forEach((el) => containerBeds.append(el))
  }
  function filterProductsPrice(dataList) {
    const inputFrom = document.getElementById("price-from")
    const inputTo = document.getElementById("price-to")
    document.querySelector(".catalog__products").innerHTML = ""

    const res = dataList.filter((el) => {
      if (
        parseFloat(el.price) > parseFloat(inputFrom.value) &&
        parseFloat(el.price) < parseFloat(inputTo.value)
      ) {
        return el
      }
    })

    const createBeds = new CreateBeds(res)
    createBeds.render()
  }
  if (document.querySelector(".catalog__container")) {
    addCheckedElements()

    const selectSortBeds = document.querySelector(
      ".top-filter-catalog__sort-popap"
    )
    selectSortBeds.addEventListener("change", (e) => sortProductsPrice(e))
  }
}
