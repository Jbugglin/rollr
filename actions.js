//Get values
let totalReadyRolls = document.getElementById('totalReadyRolls');
let seqStart = document.getElementById('seqStart');
let seqEnd = document.getElementById('seqEnd');
let prodVelo = document.getElementById('prodVelo');
let numOfGaps = document.getElementById('numOfGaps');

let estimateForm = document.getElementById('user-input');
estimateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    calcTotalQuantity();
    calcRollChangeTime();
    calcGapsInRoll();
});



// Subtract the sequence numbers to obtain total quantity
function calcTotalQuantity(){
    let totalQuantity = seqStart.value - seqEnd.value;
    document.getElementById('quantity').innerHTML = totalQuantity+ " pieces";
    return totalQuantity;
}


// Calculate total roll change time (total rolls ready * 20 
// minutes)
function calcRollChangeTime(){
    let totalRollChange = (totalReadyRolls.value * 20) / 60;
    document.getElementById('rollChange').innerHTML = (Math.round((totalRollChange + Number.EPSILON) * 100) / 100)+ " hours";
    return totalRollChange;
}

// Calculate total time needed for gaps in roll (total 
// number of gaps * 5 minutes)
function calcGapsInRoll(){
    let totalGapTime = (numOfGaps.value * 5) / 60;
    document.getElementById('runGap').innerHTML = (Math.round((totalGapTime + Number.EPSILON) * 100) / 100)+ " hours";
    return totalGapTime;
}