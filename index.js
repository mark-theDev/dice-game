const numOfRolls = document.getElementById('diceRoller').value;
const diceResults = document.querySelector('.diceResults');
const diceImages = document.querySelector('.diceImages');


function diceRolls() { 
    const numOfRolls = document.getElementById('diceRoller').value;
    const diceResults = document.querySelector('.diceResults');
    const diceImages = document.querySelector('.diceImages');   
    const rolls = []
    const images = []
    for(let i=0; i<numOfRolls; i++){
        let num = Math.floor(Math.random()*6)+1;
        rolls.push(num)
        images.push(`<img src="Images/${num}.png" alt="Dice ${num}">`)
    }
    diceResults.textContent = `Dice: ${rolls.join(', ')}`
    diceImages.innerHTML = images.join('')
}

