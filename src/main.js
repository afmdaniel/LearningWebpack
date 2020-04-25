import './assets'

document.querySelector("button").onclick = e => {
    const black = "rgb(0, 0, 0)"
    const white = "rgb(255, 255, 255)"
    const body = document.querySelector('body')

    body.style.backgroundColor = body.style.backgroundColor === black? white : black
}