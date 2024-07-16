const display = document.getElementById("display")
let btn = document.querySelector('button').innerText
function appendToDisplay(btn){
    display.value += btn
}

function cleardisplay(){
    display.value=""
}

function calculate(){

    try{
        display.value = eval(display.value)
}
    catch(error){
        display.value = "Error"
    }
}