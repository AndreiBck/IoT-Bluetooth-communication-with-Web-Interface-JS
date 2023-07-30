# IoT-Bluetooth-communication-with-Web-Interface-JS

# Overview
  The current project illustrates the use of Bluetooth technology to communicate with a Web Interface.<br/>
  For this purpose the project is using an HM-10 module (BLE - Bluetooth 4.0) and JS Web Bluetooth API.<br/>
  The system offers the user the option to choose what color to light up an RGB LED module and send this data to the Arduino board.<br/>
  
# Schematics Plan
![Schematics](https://github.com/AndreiBck/IoT-Bluetooth-communication-with-Web-Interface-JS/assets/100125385/90ebeb98-4169-4832-89fe-31adeebe7a56)

# Pre-requisites
* Arduino IDE: -> https://www.arduino.cc/en/software
* SoftwareSerial Library: -> https://docs.arduino.cc/learn/built-in-libraries/software-serial
* Arduino compatible board (in this case Arduino UNO R3 is used) -> doc: https://docs.arduino.cc/hardware/uno-rev3
* HM-10 Bluetooth module: -> tutorial: https://people.ece.cornell.edu/land/courses/ece4760/PIC32/uart/HM10/DSD%20TECH%20HM-10%20datasheet.pdf
* HW-479 RGB LED module (illustrated in schematics by a RGB LED): -> tutorial: https://arduinogetstarted.com/tutorials/arduino-rgb-led
* 14 jumper wires
* Battery Pack Holder Case

# Setup and Build Plan
1. Arduino 
   - Assemble the project following the presented scheme (in the "Schematics Plan" section)
   - Clone the git repository:
      - https://github.com/AndreiBck/IoT-Bluetooth-communication-with-Web-Interface-JS.git
      - Command: $ git clone https://github.com/AndreiBck/IoT-Bluetooth-communication-with-Web-Interface-JS.git
   - Open the "sketch_arduino" folder from project with the Arduino IDE
   - Connect the Arduino board to the PC
   - Select the board and port from the Arduino IDE
   - Upload the code to the Arduino board by pressing the "Upload" button from the IDE
2. User Interface
   - Open WebInterface folder from the project
   - Open "page.html" file in WebInterface folder
   - Click <kbd> <br> Connect <br> </kbd> button then select your device name

# Running
* After opening the Web Interface and connecting to the Bluetooth module, user have the option to choose the color for the RGB module
* There are two options: either introduce the values for the R G and B values thorough inputs, or choose the color via the color picker
* After selecting the color send the data to the Arduino board by pressing the <kbd> <br> Submit <br> </kbd> button
  
![image](https://github.com/AndreiBck/IoT-Bluetooth-communication-with-Web-Interface-JS/assets/100125385/2463bd71-1b2a-4e22-b7a0-7e459627c399)
