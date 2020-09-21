




let shoot1 = document.querySelector("#teamone-shoot-button");

let shots1 = document.querySelector("#teamone-numshots");

let goals1 = document.querySelector("#teamone-numgoals");





shoot1.addEventListener("click", function () {
    console.log(" + team one shoot button");
    let newValue = Number(shots1.innerHTML) + 1;
    shots1.innerHTML = newValue;






if (Math.random() * 100 < 70){
    console.log("GOAL!");
    newValue = Number(goals1.innerHTML) + 1;
    goals1.innerHTML = newValue;
    console.log(newValue);
}


if (goals1.innerHTML >= 10){
    console.log("teamone wins!")
}
})






let shots2 = document.querySelector("#teamtwo-numshots");

let goals2 = document.querySelector("#teamtwo-numgoals");

let shoot2 = document.querySelector("#teamtwo-shoot-button");

shoot2.addEventListener("click", function () {
    console.log(" + team two shoot button");
    let newValue = Number(shots2.innerHTML) + 1;
    shots2.innerHTML = newValue;

    if (Math.random() * 100 < 70) {
        console.log("GOAL!");
        newValue = Number(goals2.innerHTML) + 1;
        goals2.innerHTML = newValue;
    }

    if (goals2.innerHTML >= 10) {
        console.log("teamtwo wins!")
    }




})

let gamereset = document.querySelector("#reset-button");
let reset = document.querySelector("#num-resets");


gamereset.addEventListener("click", function () {
    newValue = Number(reset.innerHTML) + 1;
    reset.innerHTML = newValue;
    newValue = 0;
    goals2.innerHTML = newValue;
    newValue = 0;
    goals1.innerHTML = newValue;
    newValue = 0;
    shots2.innerHTML = newValue;
    newValue = 0;
    shots1.innerHTML = newValue;









})

