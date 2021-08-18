// Code your solution in this file!
let farePrice;
function distanceFromHqInBlocks(location){
    let distance = Math.abs(location - 42)
    return (distance)
}

function distanceFromHqInFeet(location){
    let distance = Math.abs(location - 42) * 264
    return (distance)
}
function distanceTravelledInFeet(start, destination){
     let distance = Math.abs(start - destination ) * 264
     return (distance)
}
function calculatesFarePrice(start, destination){
    const fareRide = distanceTravelledInFeet(start, destination);
    if(fareRide <= 400){
     farePrice = 0
     return farePrice
    }else if (fareRide <= 2000){
        (farePrice + .02) - 400
        return farePrice = (fareRide - 400) * .02
    }else if (fareRide <= 2500){
        return farePrice = 25
    }else{
        return "cannot travel that far"
    }
    

}