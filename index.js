// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// Part of the assignment
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

// wrapGifts(gifts);

const nameList = ['Andrew', 'Maria', 'Dominick'];

function writeCards(names, event) {
    // return names;

    const newArray = [];
    
    for (let i = 0; i < names.length; i++) {
        let newElement = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        newArray.push(newElement);
    }
    
    // console.log(newArray);
    return newArray;
}

// writeCards(nameList, 'birthday');
// console.log(newList);

function countDown(number) {
    let counter = number;
    while (counter >= 0) {
        console.log(counter);
        counter--;
    }
}

countDown(10);