
const diceDots = [
    {
        1 : [
            [50,50]
        ]
    },
    {
        2 : [
            [20,80],
            [80,20]
        ]
    },
    {
        3 : [
            [20,80],
            [50,50],
            [80,20]
        ]
    },
    {
        4 : [
            [20,20],
            [80,80],
            [80,20],
            [20,80]
        ]
    },
    {
        5 : [
            [20,20],
            [80,80],
            [50,50],
            [80,20],
            [20,80]
        ]
    },
    {
        6 : [
            [20,20],
            [80,80],
            [50,20],
            [50,80],
            [80,20],
            [20,80]
        ]
    }

]

// const existingDice = document.querySelector(".dice");
// console.log(existingDice);

function createDice(){

    const randomNumber = generateRandomNumber();
    
    const diceDot = diceDots[randomNumber-1][randomNumber];
    // const diceNumber = diceDot[diceDot-1];
    // console.log(diceNumber);
    
    
    const dice = document.createElement("div");
    dice.setAttribute("class", "dice");
    const existingDice = document.querySelector(".dice");
    console.log(existingDice);
    const diceContainer = document.querySelector(".dice-container");


    for(const diceDots of diceDot){

        const left = diceDots[0];
        const top  = diceDots[1];
        console.log(left+" "+top);
        const diceDotElement = document.createElement("div");
        diceDotElement.setAttribute("class", "dice-dot"); 
        dice.appendChild(diceDotElement);
        diceDotElement.style.setProperty("--left",`${left}%`);
        diceDotElement.style.setProperty("--top",`${top}%`);
    }


    console.log(dice);

    diceContainer.replaceChild(dice,existingDice);
}

function generateRandomNumber(){
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}


const rollDice = document.getElementById("roll");

rollDice.addEventListener("click", (e) => {
    e.preventDefault();
    createDice();
})

const resetDice = document.getElementById("reset");
console.log(resetDice);
resetDice.addEventListener("click", (e) =>{
    e.preventDefault();
    resetToNewDice();
})

function resetToNewDice() {
    const dice = document.createElement("div");
    dice.setAttribute("class", "dice");
    const existingDice = document.querySelector(".dice");
    const diceContainer = document.querySelector(".dice-container");
    diceContainer.replaceChild(dice,existingDice);

}