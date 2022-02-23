const axios = require("axios");

let id = (id) => document.getElementById(id);

const $cta = id("cta");
const $adviceNumber = id("advice__number");
const $adviceDescription = id("advice__description");


function gettingAdvice(){
  const url = "	https://api.adviceslip.com/advice";
  
  axios.get(url)
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        })
}


$cta.addEventListener("click", () => {
  gettingAdvice();
});