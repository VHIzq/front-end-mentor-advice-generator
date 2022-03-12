let id = (id) => document.getElementById(id);

const $cta = id("cta");
const $adviceNumber = id("advice__number");
const $adviceDescription = id("advice__description");


function gettingAdvice(){

  fetch("https://api.adviceslip.com/advice")
  .then(res => res.json())
  .then(data => {
    $adviceNumber.textContent = `ADVICE # ${data.slip.id}`;
    $adviceDescription.textContent = `"${data.slip.advice}"`;
  });
}

$cta.addEventListener("click", () => {
  gettingAdvice();
})