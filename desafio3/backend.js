
export function escolhaBackend() {

    setTimeout(() => {
        const opcoesBackend = document.createElement('div')
    body.appendChild(opcoesBackend)
    const paragrafoJava = document.createElement('p')
    opcoesBackend.appendChild(paragrafoJava)
    paragrafoJava.innerHTML = '<label for="java">Java:</label>'
    paragrafoJava.innerHTML += '<input type="radio" name="javaOuc#" id="java" value="java" >'

    const paragrafoC = document.createElement('p')
    opcoesBackend.appendChild(paragrafoC)
    paragrafoC.innerHTML += '<label for="c#">C#:</label>'
    paragrafoC.innerHTML += '<input type="radio" name="javaOuc#" id="c#" value="backend" >'
    }, 1000);


}



