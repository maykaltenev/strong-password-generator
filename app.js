// const items = document.querySelectorAll(".shopping li");
// const lib = document.querySelector("#showMe");
// console.log(items);
let symbols = ' !\"#$%&\'() * +\,-\.\/: ;<=>\?\@\[\]^ _\`{\|}~';
let smallLetters = 'abcdefghijklmnopqrstuvwxyz';
let capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let number = '0123456789';

const randomPassword = (input) => {
    let result = [];
    if (input < 8) {
        return `Password is too short please provide a number between 8 and 20!`;
    } else if (input > 20) {
        return `Password is too long please provide a number between 8 and 20!`
    } else {

        for (let i = 0; i < input; i++) {
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
    }
    return result.reverse().join('');

};
console.log(randomPassword(20))

