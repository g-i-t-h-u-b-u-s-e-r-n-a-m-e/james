let body = Math.floor(Math.random() * 5) + 1
let timmier = 0
let scaler = 1
document.getElementById("output").innerHTML = "<img src='jamesbody" + body + ".png' class='body'><div id='output1'></div>"
var inputNumber = 0

document.addEventListener("DOMContentLoaded", (event) => {
    timmyCheck();
});

function james() {
    if(document.getElementById("cool").value === "James"){
        scaler = Math.pow(1.8, inputNumber)
        inputNumber = inputNumber + 1
        let limb = Math.floor(Math.random() * 3)
        let sublimb = Math.floor(Math.random() * 15)
        document.getElementById("cool").value = ""
        timmier = 0
        if(limb === 0){
            let subsublimb = Math.floor(sublimb / 3) + 1
            document.getElementById("output" + inputNumber).innerHTML = "<img src='jameseye" + subsublimb + ".png' class='eye' style='margin-top: " + (Math.random() * 10) + "%; margin-left: " + Math.floor((Math.random() * 10)) + "%'></div><div id='output" + Math.floor(inputNumber + 1) + "'>"
        } else if(limb === 1){
            let subsublimb = Math.floor(sublimb / 5 + 1)
            document.getElementById("output" + inputNumber).innerHTML = "<img src='jamesrightarm" + subsublimb + ".png' class='rightArm' style='margin-top: " + (Math.random() * 10) + "%;'></div><div id='output" + Math.floor(inputNumber + 1) + "'>"
        } else if(limb === 2){
            let subsublimb = Math.floor(sublimb / 5 + 1)
            document.getElementById("output" + inputNumber).innerHTML = "<img src='jamesleftarm" + subsublimb + ".png' class='leftArm' style='margin-top: " + (Math.random() * 9) + "%;'></div><div id='output" + Math.floor(inputNumber + 1) + "'>"
        }
    } else {
        window.alert("You didn't call James by his name. He ate you")
        window.location.href = 'about:blank'
    }
    if (inputNumber >= 10){
        window.alert("James thinks you're cheating. He ate you")
        window.location.href = 'about:blank'
    }
}
async function timmyCheck(){
    timmier = timmier + 1
    if (timmier >= 250 - ((Math.floor(scaler)) * 3)){
        window.alert("You didn't talk to James for too long. He ate you")
        window.location.href = 'about:blank'
    }
    setTimeout(() => {
        timmyCheck();
    }, 20);
}