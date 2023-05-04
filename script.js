// Secret number: what the user will have to guess
let secretNumber = Math.floor(Math.random() * 3);
const elecciones=['piedra','papel','tijera'];
let eleccion=elecciones[secretNumber];
// Iteration 3: Add a try counter variable
let intento=0;
// Iteration 1: Select the input

// Iteration 4: Complete the function
let guessButton=document.getElementById('guess-btn');
guessButton.onclick=function(){checkGuess()}
function checkGuess() {

    if (intento>0){
        let Div=document.getElementById('Div1')
        Div.remove()
        let Div2=document.getElementById('mensaje')
        Div2.remove()
    }
    let secretNumber = Math.floor(Math.random() * 3);
    let eleccion=elecciones[secretNumber];
    
    let guess=document.getElementById('Eleccion').value
    let mensaje= document.createElement('div')
    mensaje.setAttribute("id", "mensaje");
    //e.preventDefault();
    if (guess===eleccion){
        //alert('empate')
        
        mensaje.innerHTML=`<p>${guess}-Empate-${eleccion}</p>`;
    }
    else if(guess==='piedra' && eleccion==='tijera' ||guess==='tijera' && eleccion==='papel' ||guess==='papel' && eleccion==='piedra'){
        //alert('ganaste')
        mensaje.innerHTML=`<p>${guess}-Ganaste-${eleccion}</p>`;
    }
    else{
        //alert('perdiste')
        mensaje.innerHTML=`<p>${guess}-Perdiste-${eleccion}</p>`;
    }
    let divTag = document.createElement('div');
    divTag.setAttribute("id", "Div1");
    divTag.innerHTML = `<img src="imagenes3/${guess}.png"> <span>VS</span> <img src="imagenes3/${eleccion}.png">`;
    let parent = document.getElementsByTagName('main')[0];
    parent.appendChild(divTag);
    parent = document.getElementsByTagName('main')[0];
    parent.appendChild(mensaje);
    intento++;
  /* Your code goes here */

}
// Iteration 2: Select the button and add the event listener


