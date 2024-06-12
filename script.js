function calculate(){
    const mpg = document.getElementById("fuel-mpg").value;
    const cost = document.getElementById("cost-per-gallon").value;
    const mileage = document.getElementById("miles-traveled").value;
    const splitPeople = document.getElementById("people-split").value;

    if (splitPeople > 0) {
        totalCost = (mileage / mpg) * cost;
        totalCostSplit = ((mileage/mpg) * cost)/splitPeople;
        alert("If split among " + splitPeople + " people, the total cost per person is: $" + totalCostSplit + "\nThe overall total is $" + totalCost)
    }else{
        totalCost = (mileage / mpg) * cost;
        alert("The total gas cost is: $" + totalCost);
    }
}