import header from "../templates/header.hbs"
import footer from "../templates/footer.hbs"
import cards02 from "../templates/cards02.hbs"
import data from "../js/data.json"

document.querySelector("header").insertAdjacentHTML("afterbegin", header())
document.querySelector(".js-cards").insertAdjacentHTML("beforeend", cards02(data.travels))
document.querySelector("footer").insertAdjacentHTML("beforeend", footer())