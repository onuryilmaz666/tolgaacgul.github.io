let inputA = document.getElementById("inputA");
let inputB = document.getElementById("inputB");
let inputH = document.getElementById("inputH");
let inputY = document.getElementById("inputY");
let inputX = document.getElementById("inputX");

let pX = document.getElementById("pX")
let idOk = document.getElementById("idOk")

idOk.addEventListener("click", ()=>{

  if(inputA.value && inputB.value && inputH.value && inputY.value){

     let pay = (Number(inputA.value) + (Number(inputH.value) - Number(inputY.value))) * (Number(inputB.value))
     let payda = (Number(inputA.value) + Number(inputH.value))
     let sonuc = Number((pay)/(payda));
     pX.innerText = sonuc

    pX.style.borderBottom = "3px solid red"
    pX.style.color = "blue"

  }
})