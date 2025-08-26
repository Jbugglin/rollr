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
    calcTotalRunTime();
});

// Calcluate total run time: Add production run time, 
//  roll change time, and gap run time. 
function calcTotalRunTime() {
    console.log("total?")
}


// Subtract the sequence numbers to obtain total quantity
function calcTotalQuantity(){
    if (seqStart.value > 0){
        let totalQuantity = seqStart.value - (seqEnd.value - 1);
        document.getElementById('quantity').innerHTML = totalQuantity;
        calcProdRunTime(totalQuantity);
    } else {
        console.log("start sequence !> 0");
        startSequenceError();
    }  
}

function calcProdRunTime(totalQuantity){
    let quantityRunTime = (totalQuantity / prodVelo.value);
    document.getElementById('qtyRunTime').innerHTML = (Math.round((quantityRunTime + Number.EPSILON) * 100) / 100)+ " Hours";
}


// Calculate total roll change time (total rolls ready * 20 
// minutes)
function calcRollChangeTime(){
    let totalRollChange = (totalReadyRolls.value * 20); //In Minutes
    document.getElementById('rollChange').innerHTML = (Math.round((totalRollChange + Number.EPSILON) * 100) / 100)+ " Minutes";
}

// Calculate total time needed for gaps in roll (total 
// number of gaps * 5 minutes)
function calcGapsInRoll(){
    let totalGapTime = (numOfGaps.value * 5); //In Minutes
    document.getElementById('runGap').innerHTML = (Math.round((totalGapTime + Number.EPSILON) * 100) / 100)+ " Minutes";
}

function startSequenceError(){
    alert("The starting sequence needs to be greater than 0!");
}