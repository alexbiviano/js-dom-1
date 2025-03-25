const imgLampadina = document.querySelector('.wrapper img');
const btnToggleLight = document.querySelector('.wrapper button');

const pathImgLightOn = 'img/yellow_lamp.png';
const pathImgLightOff = 'img/white_lamp.png';
const textAccendi = 'Accendi';
const textSpegni = 'Spegni';
// Flag per gestire lo stato della lampadina
let isLightOn = false;