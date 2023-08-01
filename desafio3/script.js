const buttonSend = document.querySelector('#send')


buttonSend.addEventListener('click', () => {
    const back = document.querySelector('#backend')
    const front = document.querySelector('#frontend')
    
    if(back.checked){
        console.log('Meus parabéns! Você escolheu o  BACKEND!')
    }else if(front.checked){
        console.log('Meus parabéns! Você escolheu o FRONTEND!')
    }else{
        console.log('Opção inválida. Tente novamente.')
    }
})






// if(front.cheked){
//     console.log('front')
// }else{
//     console.log('back')

// }
