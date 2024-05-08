/*
const hiddenWord = 'karen';


let answerUser;
let answer;
let counter = 0;

while (counter < 3) {
    answerUser = prompt(counter === 0 ? "Take a hint: That's my mom's name. (Post: I'm a cat).\nNow, write your answer" : 'Try again');
    answer = answerUser.toLowerCase();

    if (answer === hiddenWord) {
        console.log("That's correct, you are a person of culture!");
        break;
    } else {
        console.log("That's wrong, you are NOT a person of culture!");
        counter++;
        if (counter === 3) {
            console.log("That's enough!, don't waste my time");
        }
    }
}

*/ 

const hiddenWord = 'karen'

let answerUser
let answer
let counter = 0

while (counter < 3) {

    answerUser = prompt("Take a hint: That's my mom's name. (Post: I'm a cat).\nNow, write your answer")
    answer = answerUser.toLowerCase()

    if (answer === hiddenWord) {

            console.log("That's correct, you are a person of culture!")
            break;
        } else { 
            console.log("That's wrong, you are NOT a person of culture!")
            counter++
            if (counter === 3) {
                console.log("That's enougth!, don't waste my time")
            }
    } 
} 