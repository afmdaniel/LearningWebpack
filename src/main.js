import './assets'

document.querySelector("button").onclick = e => {
    const black = "rgb(0, 0, 0)"
    const green = "rgb(101, 221, 127)"
    const body = document.querySelector('body')

    body.style.backgroundColor = body.style.backgroundColor === black? green : black
}