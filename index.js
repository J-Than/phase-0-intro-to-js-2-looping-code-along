// Code your solutions in this file
function writeCards(names, event) {
    const newArray = [];
    
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return newArray;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(int) {
    while (int >= 0) {
        console.log(int--);
    }
}