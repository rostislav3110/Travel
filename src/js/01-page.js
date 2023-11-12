import header from "../templates/header.hbs"
import footer from "../templates/footer.hbs"
import cards from "../templates/cards.hbs"
import data from "../js/data.json"

document.querySelector("header").insertAdjacentHTML("afterbegin", header())
document.querySelector(".js-cards").insertAdjacentHTML("beforeend", cards(data.tours))
document.querySelector("footer").insertAdjacentHTML("beforeend", footer())