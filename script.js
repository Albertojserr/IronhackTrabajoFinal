// Secret number: what the user will have to guess
//let secretNumber = Math.floor(Math.random() * 3);
const elecciones=['piedra','papel','tijera'];
//let eleccion=elecciones[secretNumber];
let intento=0;
let ganas=0;
let pierdes=0;

let Botonp=document.getElementById('btnpiedra');
let etiquetaAudio = document.createElement("audio");
etiquetaAudio.setAttribute("src", "audio1.mp3");
Botonp.onclick=function(){
    let guess='piedra';
    checkGuess(guess)
}
let Botont=document.getElementById('btntijera');
Botont.onclick=function(){
    let guess='tijera';
    checkGuess(guess)
}
let Botonpa=document.getElementById('btnpapel');
Botonpa.onclick=function(){
    let guess='papel';
    checkGuess(guess)
}
function checkGuess(guess) {
    etiquetaAudio.pause()
    //set time out
    setTimeout(function sonido(){etiquetaAudio.play()},1000);
    if (intento>0){
        let Div=document.getElementById('Div1')
        Div.remove()
        let Div2=document.getElementById('mensaje')
        Div2.remove()
    }
    intento++;
    let secretNumber = Math.floor(Math.random() * 3);
    let eleccion=elecciones[secretNumber];
    let mensaje= document.createElement('div')
    mensaje.setAttribute("id", "mensaje");
    let text="";
    if (guess===eleccion){
        mensaje.innerHTML=`<br><h2>Empate</h2><p>${guess} no mata ${eleccion}</p>`;
        text="=";
    }
    else if(guess==='piedra' && eleccion==='tijera' ||guess==='tijera' && eleccion==='papel' ||guess==='papel' && eleccion==='piedra'){
        if (guess=='piedra'){
            mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} aplasta ${eleccion}</p>`;
        }
        else if (guess=='tijera'){
            mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} corta ${eleccion}</p>`;
        }
        else{
            mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} envuelve ${eleccion}</p>`;
        }
        ganas++;
        let ganados=document.getElementById('ganados')
        ganados.innerText=`${ganas}`;
        text="+";
    }
    else{
        if (guess=='piedra'){
            mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} envuelve ${guess}</p>`;
        }
        else if (guess=='tijera'){
            mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} aplasta ${guess}</p>`;
        }
        else{
            mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} corta ${guess}</p>`;
        }
        pierdes++;
        let perdidos=document.getElementById('perdidos')
        perdidos.innerText=`${pierdes}`;
        text="-";
    }
    let divTag = document.createElement('div');
    divTag.setAttribute("id", "Div1");
    divTag.innerHTML = `<img src="imagenes5/${guess}.png" alt=${guess} width="200px"> <img src="imagenes5/vs2.png" alt="versus" height="185px"><img src="imagenes5/${eleccion}.png" alt=${eleccion} width="200px">`;
    let parent = document.getElementById("columna2");
    console.log(parent)
    parent.appendChild(divTag);
    parent = document.getElementById("columna2");
    parent.appendChild(mensaje);

    let jugados=document.getElementById('jugados')
    jugados.innerText=`${intento}`;

    let tabla=document.getElementsByClassName("default")
    let tr=document.createElement('tr')
    tr.innerHTML=`<td>${guess}</td><td>${eleccion}</td><td>${text}</td>`;
    tabla[0].appendChild(tr)

}


/*boton.addEventListener("click", () => {
    let etiquetaAudio = document.createElement("audio")
    etiquetaAudio.setAttribute("src", "ubicación de tu archivo de audio")
    etiquetaAudio.play()
  })*/