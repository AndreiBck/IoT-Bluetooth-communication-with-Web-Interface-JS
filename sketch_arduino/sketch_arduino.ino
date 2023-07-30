#include <SoftwareSerial.h>

// initialize the RX and TX pins
SoftwareSerial bluetoothSerial(5, 6); // RX = 5(HM-10's TX), TX = 6(HM-10'S RX) 

// initialize the pins for RGB colors
const int red_pin = 9;
const int green_pin = 10;
const int blue_pin = 11;

// string to be used for saving the values received
String result = "";

void setup() {
    pinMode(red_pin, OUTPUT);
    pinMode(green_pin, OUTPUT);
    pinMode(blue_pin, OUTPUT);
    Serial.begin(9600);
    bluetoothSerial.begin(9600);
}

void loop() {
  if(bluetoothSerial.available())
  {
    // read the string send by the UI
    result = bluetoothSerial.readString();
  }
  if(result != "")
  {
    // extract the values for R G and B
    String red = result.substring(0,3);
    String green = result.substring(3, 6);
    String blue = result.substring(6, 9);
    
    // set the values of LED module
    analogWrite(red_pin, red.toInt());
    analogWrite(green_pin, green.toInt());
    analogWrite(blue_pin, blue.toInt());
  }
  
  // reset the value of the string
  result = "";
}
