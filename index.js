// Code your solution in this file!
function distanceFromHqInBlocks(customerLocation){
    return Math.abs(customerLocation-42);
}

function distanceFromHqInFeet(customerLocation){
    return distanceFromHqInBlocks(customerLocation)*264;
}
function distanceTravelledInFeet(start,destination){
    return Math.abs((destination-start)*264);
}


function calculatesFarePrice(start, destination) {
    var distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return 0.02 * (distance-400);
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else if (distance>2500) {
        return "cannot travel that far";
    }

}