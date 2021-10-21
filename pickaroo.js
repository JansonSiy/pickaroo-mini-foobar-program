
let output = document.getElementById('output');
let submit = document.getElementById('submit');
let emptyString = '';

document.getElementById('submit').addEventListener('click', function() {
    // every time you run this EventListener, clear the emptyString & output
    emptyString = '';
    output.innerHTML = '';

    let number = document.getElementById('number').value;
    let initialNumber = 1;

    // start the number by 1 and don't stop looping until initialNumber = number
    while (initialNumber <= number) {
        if (initialNumber % 3 == 0 && initialNumber % 5 == 0) {
            emptyString += 'Pickaroo, ';
        } else if (initialNumber % 3 == 0) {
            emptyString += 'Pick, ';
        } else if (initialNumber % 5 == 0) {
            emptyString += 'Aroo, ';
        } else {
            emptyString += initialNumber + ', ';
        };
        
        // +1 increment
        initialNumber++;
    }

    // remove extra ',' before console.log and innerHTML
    output.innerHTML = emptyString.slice(0, -2);

    console.log(emptyString.slice(0, -2));
});