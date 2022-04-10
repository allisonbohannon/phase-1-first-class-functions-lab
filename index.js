// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
   return array.slice(0,2)
}; 

const returnLastTwoDrivers = function(array) {
    return array.slice(-2); 
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; 

function createFareMultiplier(int) {
    return function(fare) { return fare * int}; 
}

const fareDoubler = fare => {
    const doubledFare = createFareMultiplier(2); 
    return doubledFare(fare);
};

const fareTripler = fare => {
    const tripledFare = createFareMultiplier(3); 
    return tripledFare(fare); 
}

function selectDifferentDrivers(array, funct) {
    return funct(array); 
}
