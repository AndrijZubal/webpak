import css from "./css/style.css";

const refs = {
startRef: document.querySelector('[data-action="start"]'),
stopRef : document.querySelector('[data-action="stop"]'),
bodyRef: document.querySelector("body"),
  }
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let changeColorId = null
refs.startRef.addEventListener('click', () => {
  changeColorId = setInterval(() => {
    refs.startRef.setAttribute("disabled", "true")
    refs.bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    console.log('start')
  }, 1000)
})


refs.stopRef.addEventListener('click', () => {
  clearInterval(changeColorId)
  refs.startRef.removeAttribute("disabled")
  console.log('stop');
  return 
})
//  function flashText() {
//       var oElem = document.getElementById('my_box');
//       if(oElem.style.color === 'red') {
//         oElem.style.color = 'blue'
//       } else {
//         oElem.style.color = 'red'
//       }
//     }












