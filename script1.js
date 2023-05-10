const elecciones=['piedra','papel','tijera','lagarto','spock'];
let intento=0;
let ganas=0;
let pierdes=0;

let Botonp=document.getElementById('btnpiedra');
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
let Botonl=document.getElementById('btnlagarto');
Botonl.onclick=function(){
    let guess='lagarto';
    checkGuess(guess)
}
let Botons=document.getElementById('btnspock');
Botons.onclick=function(){
    let guess='spock';
    checkGuess(guess)
}

let guessButton=document.getElementById('guess-btn');
guessButton.onclick=function(){checkGuess()}
function checkGuess(guess) {
    if (intento>0){
        let Div=document.getElementById('Div1')
        Div.remove()
        let Div2=document.getElementById('mensaje')
        Div2.remove()
    }
    intento++;
    let secretNumber = Math.floor(Math.random() * 5);
    let eleccion=elecciones[secretNumber];
    //let guess=document.getElementById('Eleccion').value
    let mensaje= document.createElement('div')
    mensaje.setAttribute("id", "mensaje");
    let text="";
    if (guess===eleccion){
        mensaje.innerHTML=`<br><h2>Empate</h2><p>${guess} no mata ${eleccion}</p>`;
        text="=";
    }
    else if(guess==='piedra' && eleccion==='tijera' ||guess==='tijera' && eleccion==='papel' || guess==='papel' && eleccion==='piedra'
        || guess==='piedra' && eleccion==='lagarto' || guess==='lagarto' && eleccion==='spock' || guess==='spock' && eleccion==='tijera'
        || guess==='tijera' && eleccion==='lagarto' || guess==='lagarto' && eleccion==='papel' || guess==='papel' && eleccion==='spock'
        || guess==='spock' && eleccion==='piedra'){
            if (guess=='piedra'){
                if (eleccion==='tijera')
                    mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} aplasta ${eleccion}</p>`;
                else{
                    mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} aplasta ${eleccion}</p>`;
                }
            }
            else if (guess=='tijera'){
                if (eleccion==='papel'){
                    mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} corta ${eleccion}</p>`;
                }
                else{
                    mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} decapita ${eleccion}</p>`;
                }
            }
            else if (guess==='papel'){
                if (eleccion==='piedra'){
                    mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} envuelve ${eleccion}</p>`;
                }
                else{
                    mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} desautoriza ${eleccion}</p>`;
                }
            }
            else if (guess==='lagarto'){
                if (eleccion==='papel'){
                    mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} devora ${eleccion}</p>`;
                }
                else{
                    mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} envenena ${eleccion}</p>`;
                }
            }
            else{
                if (eleccion==='tijera'){
                    mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} rompe ${eleccion}</p>`;
                }
                else{
                    mensaje.innerHTML=`<br><h2>Victoria</h2><p>${guess} vaporiza ${eleccion}</p>`;
                }
            }
        ganas++;
        let ganados=document.getElementById('ganados')
        ganados.innerText=`${ganas}`;
        text="+";
    }
    else{
        if (guess==='piedra'){
            if (eleccion==='papel'){
                mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} envuelve ${guess}</p>`;
            }
            else{
                mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} vaporiza ${guess}</p>`;
            }
        }
        else if (guess==='tijera'){
            if (eleccion==='piedra'){
                mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} aplasta ${guess}</p>`;
            }
            else{
                mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} rompe ${guess}</p>`;
            }
        }
        else if(guess==='papel'){
            if (eleccion==='tijera'){
            mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} corta ${guess}</p>`;
            }
            else{
                mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} devora ${guess}</p>`;
            }
        }
        else if (guess==='lagarto'){
            if (eleccion==='piedra'){
                mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} aplasta ${guess}</p>`;
            }
            else{
                mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} decapita ${guess}</p>`;
            }
        }
        else{
            if (eleccion==='lagarto'){
                mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} envenena ${guess}</p>`;
            }
            else{
                mensaje.innerHTML=`<br><h2>Derrota</h2><p>${eleccion} desautoriza ${guess}</p>`;
            }
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
  /* Your code goes here */

}
// Iteration 2: Select the button and add the event listener


