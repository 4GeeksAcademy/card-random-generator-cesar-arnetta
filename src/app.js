import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {

  // Definir arrays los valores //

  const icons = ['<i style="color:red">♦</i>', "♣", "♠", '<i style="color:red">♥</i>']
  const cardValue = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "🃏"]

  // Asignar valor incicial //

  const randomIcon = icons[Math.floor(Math.random() * icons.length)]
  const randomCardNum = cardValue[Math.floor(Math.random() * cardValue.length)]

  document.querySelector("#left-icon").innerHTML = randomIcon
  document.querySelector("#number").innerHTML = randomCardNum
  document.querySelector("#right-icon").innerHTML = randomIcon

  // Generar función para crear valores con el botón //

  const asignValuesToHtml = () => {
    let generateRandomIcon = icons[Math.floor(Math.random() * icons.length)]
    document.querySelector("#left-icon").innerHTML = generateRandomIcon
    document.querySelector("#right-icon").innerHTML = generateRandomIcon
    let generateRandomCardNum = cardValue[Math.floor(Math.random() * cardValue.length)]
    document.querySelector("#number").innerHTML = generateRandomCardNum
  }

  document.querySelector("#btn").addEventListener("click", asignValuesToHtml)

  // Hacer que la página cada 4 segundos genere nuevos valores//

  setInterval(function () {
    asignValuesToHtml();
  }, 4000);

  // Crear variables que sirvan para manipular el ancho y alto de la carta //

  // Valores iniciales //

  const widthCard = 18
  const heightCard = 28

  document.querySelector("#dinamic-size").style.height = `${heightCard}rem`;
  document.querySelector("#dinamic-size").style.width = `${widthCard}rem`;

  // Valores cambiantes y relación con el input //

  let dinamicWidth = document.querySelector("#width-card");
  let dinamicHeight = document.querySelector("#height-card");
  let divCard = document.querySelector("#dinamic-size");
  let errorMessage = document.querySelector("#error-message");

  dinamicHeight.addEventListener('input', () => {
    divCard.style.height = `${dinamicHeight.value}rem`;
    if (dinamicHeight.value < 20 || dinamicHeight.value > 30) {
      errorMessage.style.display = "inline";
    }
    else {
      errorMessage.style.display = "none";
    }
  });

  dinamicWidth.addEventListener('input', () => {
    divCard.style.width = `${dinamicWidth.value}rem`;
  });

};
