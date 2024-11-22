var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem .forEach((item)=> 
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')    
})

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    },2000)

function nextImage(){
    count++;
    if(count>6){
        count = 1
    }

    document.getElementById("radio"+count).checked = true;
}

import Cadastro from "./pages/Cadastro/index";
const main = document.querySelector("#root");

Window.addEventListener("load", () => {
    main.appendChild(Cadastro());

})