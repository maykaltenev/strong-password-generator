let symbols = ' !\"#$%&\'() * +\,-\.\/: ;<=>\?\@\[\]^ _\`{\|}~';
let smallLetters = 'abcdefghijklmnopqrstuvwxyz';
let capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let number = '0123456789';
let divPassword = document.querySelector('#password');
let button = document.querySelector('#btn');
let newValue = document.querySelector('#domTextElement');
// document.getElementById("valueInput").innerHTML = inputValue;

let body = document.querySelector('body');
let main = document.querySelector('main')
let container = document.querySelector('.container');
let text = document.querySelectorAll('.text');
let form = document.querySelector('form');
let newInput = [];
// let getValue = (e) => {
//     e.preventDefault()
//     let submit = document.querySelector('#domTextElement').value;
//     newInput.push(submit);
//     document.querySelector('#domTextElement').value = ''
// }

// console.log(newInput)
// console.log(newInput[0])
// form.addEventListener('submit', getValue)
// // console.log(some);
// const randomPassword = () => {
//     let result = [];

//     // if (length[0] < 8) {
//     //     return `Password is too short please provide a number between 8 and 20!`;
//     // } else if (length[0] > 20) {
//     //     return `Password is too long please provide a number between 8 and 20!`
//     // } else {
//     for (let i = 0; i < newInput[0]; i++) {
//         if (i % 2 === 0) {
//             result.push(capitalLetters[Math.floor(Math.random() * capitalLetters.length)])
//         } else if (i % 3 === 0) {
//             result.push(smallLetters[Math.floor(Math.random() * smallLetters.length)])
//         } else if (i % 5 === 0) {
//             result.push(symbols[Math.floor(Math.random() * symbols.length)]);
//         } else {
//             result.push(number[Math.floor(Math.random() * number.length)]);
//         }
//         divPassword.innerHTML = result.reverse().join('');
//         return result.reverse().join('');
//     }

// }
//-----version 2

let getValue = (e) => {
    e.preventDefault()
    let result = [];
    let newValue = document.querySelector('#domTextElement').value;
    let parsedValue = Number(newValue);
    console.log(parsedValue)
    // if (parsedValue < 8) {
    //     return `Password is too short please provide a number between 8 and 20!`;
    // } else if (parsedValue) {
    //     return `Password is too long please provide a number between 8 and 20!`
    // } else {
    for (let i = 0; i < parsedValue; i++) {
        if (i % 2 === 0) {
            result.push(capitalLetters[Math.floor(Math.random() * capitalLetters.length)])
        } else if (i % 3 === 0) {
            result.push(smallLetters[Math.floor(Math.random() * smallLetters.length)])
        } else if (i % 5 === 0) {
            result.push(symbols[Math.floor(Math.random() * symbols.length)]);
        } else {
            result.push(number[Math.floor(Math.random() * number.length)]);
        }
    }
    document.querySelector('#domTextElement').value = ''
    divPassword.textContent = result.reverse().join('');
    return result.reverse().join('');


}


form.addEventListener('submit', getValue)

body.style.background = '#038C8C';
body.style.display = 'flex';
body.style.width = '100vw';
body.style.height = '100vh';
body.style.flexDirection = 'column';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.borderTop = '0.5rem #6B00DE solid';

main.style.width = '70vw';
main.style.height = '70vh';
main.style.background = '#013440';
main.style.display = 'flex';
main.style.justifyContent = 'center';
main.style.alignItems = 'center';
text.forEach(item => {
    item.style.color = '#D9D9D9'
})
main.style.boxShadow = '0px 5px 25px white';
main.style.borderTop = '0.5rem #6B00DE solid';

container.style.height = '15rem';
container.style.width = '35rem';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'space-around';
container.style.alignItems = 'center';
container.style.border = '4px #0CF25D solid';
container.style.borderRadius = '1%'
container.style.backgroundColor = '#038C7F'
container.style.color = '#4AC7ED'
container.style.fontSize = '1.5rem'
container.style.borderTop = '0.5rem #6B00DE solid'
container.style.boxShadow = '0px 0px 10px white'
divPassword.style.color = '#62F700'
button.style.padding = '6px 20px';
button.style.cursor = 'pointer';
button.style.fontSize = '15px'
button.style.fontWeight = '500'
button.style.color = 'white'
button.style.background = '#6B00DE'
button.style.boxShadow = '0px 0px 5px white'
newValue.style.padding = '6px 20px';

newValue.style.fontSize = '1rem'


