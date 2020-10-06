var writelink = document.querySelector(".button-map");

var popupwrite = document.querySelector(".modal-write");

var writeclose = document.querySelector(".modal-close")

writelink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupwrite.classList.add("modal-write-show")
});

writeclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupwrite.classList.remove("modal-write-show")
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupwrite.classList.contains("modal-write-show")) {
            popupwrite.classList.remove("modal-write-show");
        }
    }
});


var maplink = document.querySelector(".map-picture");

var mappopup = document.querySelector(".modal-map");

var mapclose = document.querySelector(".modal-close-map");


maplink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mappopup.classList.add("modal-map-show");
});

mapclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mappopup.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mappopup.classList.contains("modal-map-show")) {
            mappopup.classList.remove("modal-map-show");
        }
    }
});

var slidercontrol1 = document.querySelector(".slider-controls-item-1");
var slidercontrol2 = document.querySelector(".slider-controls-item-2");


var slide1 = document.querySelector(".slider-item-1");
var slide2 = document.querySelector(".slider-item-2");


slidercontrol1.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide1.classList.remove("slider-none");
    slide1.classList.add("slider-show");
    slide2.classList.remove("slider-show");
});


slidercontrol2.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide1.classList.remove("slider-show");
    slide1.classList.add("slider-none");
    slide2.classList.add("slider-show");
});

var arrowleft = document.querySelector(".arrow-left");
var arrowright = document.querySelector(".arrow-right");




arrowleft.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide1.classList.remove("slider-none");
    slide1.classList.add("slider-show");
    slide2.classList.remove("slider-show");
});

arrowright.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide1.classList.remove("slider-show");
    slide1.classList.add("slider-none");
    slide2.classList.add("slider-show");
});


var linkdelivery = document.querySelector(".button-delivery");

var linkguarantee = document.querySelector(".button-guarantee");

var linkcredit = document.querySelector(".button-credit1");

var delivery = document.querySelector(".delivery-item");

var guarantee = document.querySelector(".guarantee-item");

var credit = document.querySelector(".credit-item");

linkdelivery.addEventListener("click", function (evt) {
    evt.preventDefault();
    delivery.classList.remove("services-none");
    delivery.classList.add("services-show");
    guarantee.classList.add("services-none");
    guarantee.classList.remove("services-show");
    credit.classList.add("services-none");
    credit.classList.remove("services-show");

    linkdelivery.classList.add("button-services-active");
    linkguarantee.classList.remove("button-services-active");
    linkcredit.classList.remove("button-services-active");

});

linkguarantee.addEventListener("click", function (evt) {
    evt.preventDefault();
    guarantee.classList.remove("services-none");
    guarantee.classList.add("services-show");
    delivery.classList.add("services-none");
    delivery.classList.remove("services-show");
    credit.classList.add("services-none");
    credit.classList.remove("services-show");

    linkguarantee.classList.add("button-services-active");
    linkdelivery.classList.remove("button-services-active");
    linkcredit.classList.remove("button-services-active");

});

linkcredit.addEventListener("click", function (evt) {
    evt.preventDefault();
    credit.classList.remove("services-none");
    credit.classList.add("services-show");
    delivery.classList.add("services-none");
    delivery.classList.remove("services-show");
    guarantee.classList.add("services-none");
    guarantee.classList.remove("services-show");

    linkcredit.classList.add("button-services-active");
    linkdelivery.classList.remove("button-services-active");
    linkguarantee.classList.remove("button-services-active");

});


var basketpopup = document.querySelector(".modal-basket");

var basketclose = document.querySelector(".modal-close-basket")

var buttons = document.querySelectorAll('.button-buy'),
    index, button;

for (index = 0; index < buttons.length; index++) {
    button = buttons[index];
    button.addEventListener('click', clickHandler);
    button.addEventListener('dblclick', doubleClickHandler);
}

function clickHandler(event) {
    basketpopup.classList.add("modal-basket-show");
    event.preventDefault();
}

function doubleClickHandler(event) {
    console.log('doubleclick', this.innerText);
    this.removeEventListener('click', clickHandler);
    this.removeEventListener('dblclick', doubleClickHandler);
}


basketclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketpopup.classList.remove("modal-basket-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (basketpopup.classList.contains("modal-basket-show")) {
            basketpopup.classList.remove("modal-basket-show");
        }
    }
});

var searchinput = document.querySelector(".search-input");

var searchbutton = document.querySelector(".button-search");

var closeinput = document.querySelector(".header-info")

closeinput.addEventListener("click", function (evt) {
    if (searchinput.classList.contains("search-input-active")) {
        searchinput.classList.add("search-input");
        searchinput.classList.remove("search-input-active");
        searchbutton.classList.remove("button-search-active");
    }
})

searchinput.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchinput.classList.add("search-input-active");
    searchinput.classList.remove("search-input");
    searchbutton.classList.add("button-search-active");
})


