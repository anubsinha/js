// Under speed limit = 70 => Ok
// At speed limit    = 70 => Ok
// 1 demerit points for every 5 above the speed limit
// At speed 80            => 1 point
// 12 demerit points = License Suspended
// speed in fractions like 83.5, use math.floor()

console.log(checkSpeed(72));

function checkSpeed(speed){
    const speedLimit = 70;
    const stepSizePerDemeritPoint = 5;
    const DemeritPointsCallingLicenseSuspension = 12;
    aboveLimit = speed - speedLimit;
    if (aboveLimit <= (0 + stepSizePerDemeritPoint))
        return 'Ok';

    const demeritPointsAccumulated = Math.floor(aboveLimit/stepSizePerDemeritPoint);
    if (demeritPointsAccumulated >= DemeritPointsCallingLicenseSuspension)
        return 'License Suspended';
    return demeritPointsAccumulated;


}