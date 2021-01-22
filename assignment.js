// https://github.com/shiblee22/assignment-3

// Function to transform the distance from kilometer to meter
function kilometerToMeter(distanceInKilometer) {
    
    var distanceInMeter;

    //Testing if the input is number type
    if (typeof distanceInKilometer != "number") {
        return "Distance should be a number.";
    }
    //Testing if the input is negative
    else if (distanceInKilometer < 0 ) { 
        return "Distance can not be negative.";
    }
    else {
        distanceInMeter = distanceInKilometer * 1000;
        return distanceInMeter;
    }
}

//Function about calculating budget
function budgetCalculator(noOfWatch, noOfMobile, noOfLaptop) {

    var budget;
    var priceOfWatch = 50;
    var priceOfMobile = 100;
    var priceOfLaptop = 500;

    //Testing if the inputs are not number type
    if ((typeof noOfWatch != "number") || (typeof noOfMobile != "number") || (typeof noOfLaptop != "number")) {
        return "Quantities should be number.";
    }
    //Testing if the input are negative
    else if ((noOfWatch < 0) || (noOfMobile < 0) || (noOfLaptop < 0)) { 
        return "Quantities can not be negative.";
    }
    //Testing if the inputs are fractional
    else if ((Math.round(noOfWatch) != noOfWatch) || (Math.round(noOfMobile) != noOfMobile) || (Math.round(noOfLaptop) != noOfLaptop)) { 
        return "Quantities can not be fractional.";
    }
    else {
        budget = (noOfWatch*priceOfWatch) + (noOfMobile*priceOfMobile) + (noOfLaptop*priceOfLaptop);
        return budget;
    }
}

//Function about calculating hotel cost
function hotelCost(noOfDays) {

    var totalCost;
    var costOfTenDays = 100;
    var costOfTwentyDays = 80;
    var costOfTwentyDayUp = 50;

    //Testing if the input is number type
    if (typeof noOfDays != "number") {
        return "No. of days should be a number.";
    }
    //Testing if the input is negative
    else if (noOfDays < 0 ) { 
        return "No. of days can not be negative.";
    }
    //Testing if the input is fractional
    else if (Math.round(noOfDays) != noOfDays ) {
        return "No. of days can not be fractional.";
    }
    //Calculation of cost upto ten days
    else if (noOfDays <= 10) {
        totalCost = noOfDays*costOfTenDays;
        return totalCost;
    }
    //Calculation of cost upto twenty days
    else if (noOfDays <= 20) {
        totalCost = (costOfTenDays*10) + (costOfTwentyDays*(noOfDays-10));
        return totalCost;
    }
    //Calculation of cost more than twenty days
    else if (noOfDays > 20) {
        totalCost = (costOfTenDays*10) + (costOfTwentyDays*10) + (costOfTwentyDayUp*(noOfDays-20));
        return totalCost;
    }
}

//Function about finding the largest friend name
function megaFriend(namesOfFriends) {
    //Testing if input is not an array
    if (Array.isArray(namesOfFriends) == false) {
        return "Friends names should be an array.";
    }
    //Testing if input is an empty array
    else if (namesOfFriends.length == 0) {
        return "Friends names array should not be empty.";
    }
    else {
        var largestName = namesOfFriends[0];

        for (var i=0; i < namesOfFriends.length; i++) {
            //Testing if every element of array is string 
            if (typeof namesOfFriends[i] != "string") {
                return "Every Friends name should be a string";
            }
            else {
                if (namesOfFriends[i].length > largestName.length) {
                    largestName = namesOfFriends[i];
                }
            }
        }
        return largestName;
    }
}