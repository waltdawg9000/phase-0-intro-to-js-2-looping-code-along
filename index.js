// Code your solutions in this file

function writeCards(names,eventName){
    let customMessage = [];
    for (let i = 0; i < names.length; i++){
        customMessage.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return customMessage;
};

function countDown(beginNum){
    let customNum = beginNum;
    while (0 <= beginNum ){
        console.log(beginNum --);
    } 
}

countDown(10);