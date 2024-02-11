const body = document.getElementsByTagName("body")[0]
body.style.backgroundColor = "red"

function setColor(name){
    body.style.backgroundColor = name;
}

function randomColor(){
    /* Variables to hold the value from 0 - 255 for each color
    * Math.random() generates number from 0 - 1
    * Math.round() rounds number to avoid huge decimal places
    */ 
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    // Variable to hold the String rgb that stores the amount of red, green, and blue
    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}
