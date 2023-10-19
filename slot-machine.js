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

let balance = desposit(); 
const numberOfLines = getNumberOfLines(); 
const bet = getBet(balance, numberOfLines); 
const reels = spin(); 


// 5. Check if the user won 
const transpose = (reels) => {
    const rows = []; 

    for (let i = 0; i < Rows; i++) {
        rows.push([]); 
        for (let j = 0; j < COLS; j++) {
            rows [i].push (reels [j] [i])
        }
    }
}
const printRows = (rows) => {
    for (const row of rows) {
        let rowString = ""; 
        for (const [i, symbol] of rows.entries()){
            rowString += symbol
            if (i != rows.length -1) {
                rowString +=
            }
            console.log(rowString)
    }
}

// 6. Give the user their winnings 

let winnings = 0; 
for (let row = 0; row < lines; row++) {
    const symbols = rows [row]; 
    let allsame= true; 

    for (const symbol of symbols) {
        if (symbol != symbols [0]) {
            allsame = false; 
            break; 
        }
    }
    if (allSame) {
        winnings += bet * symbols_Values[symbols[0]]
    }
    return winnings; 
}

const game = () => {
    let balance = deposit(); 

    while (true) {
        console.log("You have a balance of £" + balance); 
        const numberOfLines =getNumberOfLines(); 
        const bet = getBet(balance, numberOfLines); 
        balance -= bet * numberOfLines; 
        const reels = spin(); 
        const rows = transpose(reels); 
        const winnings = getWinnings(rows, bet, numberOfLines); 
        balance += winnings; 
        console.log("You won, £" +winnings.toString()); 
        
        if (balance <= 0) {
            console.log("You ran out of money"); 
            break; 
        }
        const playAgain = prompt("Do you want to play the game again (y/n)?"); 
        if (playAgain != "y") break; 
    }
}; 

game(); 