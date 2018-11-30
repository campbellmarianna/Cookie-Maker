/******************************************************************************

                                 COOKIE clicker

*******************************************************************************/

// declare default variables
let cookieCount = 0;

// declare DOM variables
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');

//everytime a user clicks the button, their cookies are increased by the value of their clickPower.
cookieClicker.addEventListener("click", function() {
    cookieCount = cookieCount + clickPower;
    refreshCookieCount()
})

// refresh cookies
let refreshCookieCount = function() {
    cookieCounter.innerHTML = cookieCount;
}

/*******************************************************************************

                                    Click Power

*******************************************************************************/

// declare default variables
let clickPower = 5;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

// declare DOM variables
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');


// Buy click power
buyClickPower.addEventListener("click", function() {
    if (cookieCount >= clickPowerPriceAmount) {
        // subtract cookies from the price of the item
        cookieCount -= clickPowerPriceAmount;

        // update cookie counter.
        refreshCookieCount()

        //Upgrade power level
        clickPowerLevelNumber += 1;

        //Update click price
        clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);

        //Update click Power
        clickPower += 1 * Math.floor(clickPowerLevelNumber * 1.05);

        // refresh shop item
        refreshPowerClick();
    }
})
// refresh level up values
let refreshPowerClick = function() {
    clickPowerLevel.innerHTML = clickPowerLevelNumber;
    clickPowerPrice.innerHTML = clickPowerPriceAmount;
    clickPowerMultiple.innerHTML = clickPower;
}

/*******************************************************************************

                                    Grandmas

*******************************************************************************/

//set default values
let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;
let grandmaAuto = false;

//declare DOM variables
let buyGrandma = document.getElementById('buy-grandma'); // button
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');

// buy a grandma
buyGrandma.addEventListener("click", function() {

    // Make sure we have enough cookies and subtract our cookies from the price
    if (cookieCount >= grandmaPriceAmount){
        // Subtract cookies from the price of the item
        cookieCount += - grandmaPriceAmount;
        refreshCookieCount()

        //upgrade power level
        grandmaLevelNumber += 1;

        //update price
        grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);

        //update grandma power
        grandmaPower += 10 + Math.floor(grandmaLevelNumber * 1.33);

        //turn autoGrandma on!
        autoGrandma = true
        autoGrandmaStart();

        //refresh shop item
        refreshGrandma();
    }
})

let refreshGrandma = function() {
    grandmaLevel.innerHTML = grandmaLevelNumber
    grandmaPrice.innerHTML = grandmaPriceAmount;
    grandmaMultiple.innerHTML = grandmaPower;
    grandmaMultiple.innerHTML = grandmaPower - 10;
}

let autoGrandmaStart = function() {
    let grandmaInt = window.setInterval(function() {
        cookieCount += grandmaPower;
        refreshCookieCount();
    }, 1000)
}

/*******************************************************************************

                                   Facilites

*******************************************************************************/

// set default values
let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;

// declare DOM variables
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

// buy a facility
buyFacility.addEventListener("click", function() {
    //set autoLoop to false
    facilityAuto = false;

    // make sure we have enough cookies
    if (cookieCount >= facilityPriceAmount) {
        cookieCount -= facilityPriceAmount;
        refreshCookieCount()

        // upgrade power level
        facilityLevelNumber += 1;

        // update price
        facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);

        // update facility power
        facilityPower += 600 + Math.floor(facilityLevelNumber * 1.33);

        // turn autoFacility on!
        facilityAuto = true
        autoFacilityStart();

        //refresh shop item
        refreshFacility();

        // game loop

        // refreah shop

    }//DONT FORGET THIS BRACKET

})

// refresh shop
let refreshFacility = function() {
    facilityLevel.innerHTML = facilityLevelNumber
    facilityPrice.innerHTML = facilityPriceAmount;
    facilityMultiple.innerHTML = facilityPower - 600;
}

//game loop
let autoFacilityStart = function() {
    let facilityInt = window.setInterval(function() {
        cookieCount += facilityPower;
        refreshCookieCount();
    }, 1000);
}

/*******************************************************************************

                                   Planets

*******************************************************************************/

// set default values
let planetAuto = false;
let planetPower = 3000;
let planetPriceAmount = 500000;
let planetLevelNumber = 0;

// declare DOM variables
let buyPlanet = document.getElementById('buy-planet');
let planetPrice = document.getElementById('planet-price');
let planetLevel = document.getElementById('planet-level');
let planetMultiple = document.getElementById('planet-multiple');

// buy a planet
buyPlanet.addEventListener("click", function() {
    //set autoLoop to false
    planetAuto = false;

    // make sure we have enough cookies
    if (cookieCount >= planetPriceAmount) {
        cookieCount -= planetPriceAmount;
        refreshCookieCount()

        // upgrade power level
        planetLevelNumber += 1;

        // update price
        planetPriceAmount = Math.floor(planetPriceAmount * 1.33);

        // update planet power
        planetPower += 600 + Math.floor(planetLevelNumber * 1.33);

        // turn autoFacility on!
        planetAuto = true
        autoPlanetStart();

        //refresh shop item
        refreshPlanet();

        // game loop

        // refreah shop

    }//DONT FORGET THIS BRACKET

})

// refresh shop
let refreshPlanet = function() {
    planetLevel.innerHTML = planetLevelNumber
    planetPrice.innerHTML = planetPriceAmount;
    planetMultiple.innerHTML = planetPower - 600;
}

//game loop
let autoPlanetStart = function() {
    let planetInt = window.setInterval(function() {
        cookieCount += planetPower;
        refreshCookieCount();
    }, 1000);
}
