// global variables 
const prompt = require("prompt-sync")();

const Rows = 3; 
const COLS = 3; 

const symbols_Count = {
    A:2, 
    B:4, 
    C:6, 
    D:8
}

const symbols_Values= {
    A:5,
    B:4,
    C:3,
    D:2
}
// End of Global varaibles 

// 1. Despot some Money 

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a Desposit Amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDespositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid desposit amount, please try again.")
        } else {
            return numberDepositAmount;
        }
    }
};

const despositAmount = deposit();

// 2. Determine number of lines to bet on 
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of line, please try again."); 
        } else {
            return numberOfLines; 
        }
    }
}; 

console.log(despositAmount); 
 
// 3. Collect a bet amount 
const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the total bet per line: ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet, try again.")
        } else {
            return numberBet;
        }
    }
};

let balance = desposit(); 
const numberOfLines = getNumberOfLines(); 
const bet = getBet(balance);

// 4. Spin the slot machine 
const spin = () => {
    const symbols = []; 
    for (const[symbol, count] of Object.entries(symbols_Count)) {
        for (let i= 0; i < count; i++) {
            symbols.push(symbol); 
        }

    }
    const reels = []; 
    for (let i=0; i < COLS; i++) {
        reels.push([]); 
        const reelSymbols = [...symbols]; 
        for (let j = 0; j < Rows; j++) {
            const randowIndex = Math.floor(Math.random()* reelSymbols.length); 
        const selectedSybol = reelSymbols[randomIndex]; 
        reels[i].push(selectedSybol); 
        reelSymbols.splice(randowIndex, 1); 
        }
    }
    return reels; 
}; 

// 5. Check if the user won 


// 6. Give the user their winnings 

// 7. Play Again 