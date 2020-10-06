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


