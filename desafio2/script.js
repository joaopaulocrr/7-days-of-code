let name = document.querySelector('#iname')
let age = document.querySelector('#iage')
let language = document.querySelector('#ilanguage')
let body = document.querySelector('body')

body.insertAdjacentHTML("beforeend", `<p>Olá ${name}, </p>`)