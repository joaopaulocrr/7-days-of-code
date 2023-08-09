export  function criarBotao() {
    const fourButton = document.createElement('button')
    body.appendChild(fourButton)
    fourButton.setAttribute('id', 'fourButton')
    fourButton.innerText = 'Send'
    fourButton.style.display ='block'
    fourButton.style.marginBlock ='30px'
}