//Get value
let totalRolls = document.getElementById('totalReadyRolls');
let rollsReady = 0;
let rollsHours = 0;
let rollsMinutes = 0;

let seqStart = document.getElementById('seqStart');
let seqEnd = document.getElementById('seqEnd');
let totalQty = 0;

let prodVelo = document.getElementById('prodVelo');
let prodHours = 0;
let prodMinutes = 0;

let numOfGaps = document.getElementById('numOfGaps');
let gapHours = 0;
let gapMinutes = 0;
let gapTime = 0;

/**
 *  Calculates the total time for gaps in the roll due to print errors. 
 *      Typically these take about 5-10 minutes to completely run out, but
 *          for the scope of this project, we'll go with the former of the timings.
 *              (user input for # of gaps in ready rolls) * 5...in minutes.
 */
function calcGapRun(){
    gapTime = numOfGaps.value * 5; //Calculates 5 min per gap
    if (gapTime >= 60){
        gapHours = Math.floor(gapTime / 60);
        gapMinutes = (gapTime % 60);
        document.getElementById("gapHours").innerHTML = gapHours;
        document.getElementById("gapMinutes").innerHTML = gapMinutes;
    } else {
        gapHours = 0;
        gapMinutes = gapTime;
        document.getElementById("gapHours").innerHTML = gapHours;
        document.getElementById("gapMinutes").innerHTML = gapMinutes;
    }
}

/**
 *  Calculates the total time for roll changes, this is the total rolls ready field.
 *      1 roll change equals 20 minutes (may need to adjust based on estimated time).
 *          (user input for total rolls ready) * 20...in minutes.
 *              Once the total time exceeds 60 minutes, add up to hour.
 */
function calcRollChange(){
    rollsReady = Math.round((totalRolls.value * (1/3) * 60)); //Calculates 20 min per roll change.
    if (rollsReady >= 60){
        rollsHours = Math.floor(rollsReady / 60);
        rollsMinutes = (rollsReady % 60);
        document.getElementById("rollChangeHours").innerHTML = rollsHours;
        document.getElementById("rollChangeMinutes").innerHTML = rollsMinutes;
    } else {
        rollsHours = 0;
        rollsMinutes = rollsReady;
        document.getElementById("rollChangeHours").innerHTML = rollsHours;
        document.getElementById("rollChangeMinutes").innerHTML = rollsMinutes;
    }
}

/**
 *  Calculates the production run time and converting to hours : minutes.
 *      Calculation (in per hour): (total quantity / # of sheets per hour)
 *          Need to take the whole number -> hours
 *          The decimal * 60 -> minutes.
 */
function calcProdRun(){
    prodHours = (totalQty / prodVelo.value);
    prodMinutes = (prodHours % 1) * 60; //Mod 1 will return the decimal
    document.getElementById("prodHours").innerHTML = Math.floor(prodHours);
    document.getElementById("prodMinutes").innerHTML = prodMinutes.toFixed(0);
}

/**
 *  Calculates the total quantity from the user inputs.
 *      Also makes sure that the ending sequence is not greater than the starting.
 *      If submitted without a sequence number, throw an error message.
 */
function calcTotalQty() {
    if (seqStart.value >= 0 && seqEnd.value < seqStart.value){
        totalQty = seqStart.value - (seqEnd.value - 1);
        document.getElementById("quantity").innerHTML = totalQty;
    } else {
        seqInputError();
    }
}

/**
 *  This will print an error message to the user to prompt them to check their inputs. 
 */
function seqInputError(){
    alert("Check Sequence Inputs");
}

/**
 *  Main driver, also handles the submit button clicked. 
 */
let estimateForm = document.getElementById('user-input');
estimateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    calcTotalQty();
    calcProdRun();
    calcRollChange();
    calcGapRun();
});