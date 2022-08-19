
//create 4 digit random number and convert intiger using math.round()function

function pinGenerat() {
    const randomNumber = Math.round(Math.random() * 10000);
    return randomNumber;
}

//check the length number ,is it 4 digit number

//number ta 4 digit er length kina check korar jonno string e convert kora hyse( +'';) use kore

function getPin() {
    const pin = pinGenerat();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

//add event handler on generate button
document.getElementById('generate-pin').addEventListener('click', function () {

    const pin = getPin();

    const generatePinField = document.getElementById('pin-field');
    generatePinField.value = pin;


    console.log(pin);


})