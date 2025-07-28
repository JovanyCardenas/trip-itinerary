function calculate(event) {
    event.preventDefault(); // Prevent form from submitting

    const mpg = parseFloat(document.getElementById("fuel-mpg").value);
    const costPerGallon = parseFloat(document.getElementById("cost-per-gallon").value);
    const milesTraveled = parseFloat(document.getElementById("miles-traveled").value);
    const peopleSplit = parseInt(document.getElementById("people-split").value);

    if (isNaN(mpg) || isNaN(costPerGallon) || isNaN(milesTraveled) || mpg <= 0) {
        alert("Please enter valid numbers. MPG must be greater than 0.");
        return;
    }

    const gallonsUsed = milesTraveled / mpg;
    const totalCost = gallonsUsed * costPerGallon;

    if (peopleSplit && peopleSplit > 0) {
        const costPerPerson = totalCost / peopleSplit;
        alert(`Total Gas Cost: $${totalCost.toFixed(2)}\nCost Per Person (split among ${peopleSplit}): $${costPerPerson.toFixed(2)}`);
    } else {
        alert(`Total Gas Cost: $${totalCost.toFixed(2)}`);
    }
}
