const on = document.getElementById('on');
const off = document.getElementById('off')
const lamp = document.getElementById('lamp')

function seTiverQuebrada() {
    return lamp.src.indexOf ('quebrada') > -1
}


function lampOn () {
    if (! seTiverQuebrada ()){

        lamp.src = './img/acesa.jpeg';
    }
}

function lampOff() {
    if(!seTiverQuebrada ()) {

        lamp.src = "./img/desligada.jpeg"
    }
}

function lampQuebrada() {
    lamp.src = './img/quebrada.jpeg'
}

on.addEventListener('click',lampOn);
off.addEventListener('click', lampOff);
lamp.addEventListener('mouseover',lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick',lampQuebrada);
