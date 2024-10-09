

function createDrivetrain() {
    const wheelTravel = document.getElementById("wheelTravel").value;
    const trackWidth = document.getElementById("trackWidth").value;
    const wheelBase = document.getElementById("wheelBase").value;
    const units = document.getElementById("units").value;
    const externalGearRatio = document.getElementById("externalGearRatio").value;
    const driveName = document.getElementById("driveName").value;

    const destination = document.getElementById("driveCode");
    
    var code = `drivetrain ${driveName} = drivetrain(leftSide, rightSide, ${wheelTravel}, ${trackWidth}, ${wheelBase}, ${units}, ${externalGearRatio});`
    destination.textContent = code;

    console.log(code)
}