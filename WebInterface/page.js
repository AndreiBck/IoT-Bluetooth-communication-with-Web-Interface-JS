// check if the browser supports Bluetooth API
if (!navigator.bluetooth) {
    alert('Sorry, your browser doesn\'t support Bluetooth API');
}

let ArduinoCharacteristic;
let valueToBeSend;

const connectButton = document.getElementById('connectButton');
connectButton.addEventListener("click", connectArduino);

const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener("change", changeColors);

const sendButton = document.getElementById('submit-button');
sendButton.addEventListener("click", sendData);

redInput = document.getElementById('red');
greenInput = document.getElementById('green');
blueInput = document.getElementById('blue');

// function for converting hexadecimal values to RGB values
function hexTorgb(hex) {
    return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
}

// connection function to Arduino board
function connectArduino() {
    navigator.bluetooth.requestDevice({
        filters: [{ services: ['0000ffe0-0000-1000-8000-00805f9b34fb'] }]
    })
        .then(device => {
            return device.gatt.connect();
        })
        .then(server => {
            console.log('Connected to GATT server');
            return server.getPrimaryService('0000ffe0-0000-1000-8000-00805f9b34fb');
        })
        .then(service => service.getCharacteristic('0000ffe1-0000-1000-8000-00805f9b34fb'))
        .then(characteristic => {
            console.log('Connected to characteristic');
            ArduinoCharacteristic = characteristic;
        })
        .then(() => {
            document.getElementById("data-inputs").style.display = 'block';
        })
        .catch(error => {
            console.log('Error: ' + error);
        });
}

// function to change the inputs' values when color is selected through color picker
function changeColors() {
    let rgb = hexTorgb(colorPicker.value);
    redInput.value = rgb[0];
    greenInput.value = rgb[1];
    blueInput.value = rgb[2];
}

// function to prepare data before sending it to the Arduino board
// we want data to be as follows: RRRGGGBBB 
// eg: 023111222, where the value for R is 023, G is 111 and B is 222
function prepareData() {
    let redValue;
    let greenValue;
    let blueValue;

    redValue = redInput.value ? redInput.value : "0";
    greenValue = greenInput.value ? greenInput.value : "0";
    blueValue = blueInput.value ? blueInput.value : "0";

    while (redValue.length != 3)
        redValue = "0" + redValue;
    while (greenValue.length != 3)
        greenValue = "0" + greenValue;
    while (blueValue.length != 3)
        blueValue = "0" + blueValue;

    valueToBeSend = redValue + greenValue + blueValue;
}

// function for sending data to the Arduino board
function sendData() {
    prepareData()
    ArduinoCharacteristic.writeValue(new TextEncoder().encode(valueToBeSend + "\n"))
}