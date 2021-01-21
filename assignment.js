//

//Answer to the first Assignment

function kilometerToMeter(kilometer){
    if(kilometer >= 0){
        var meter = kilometer * 1000;
    }
    else{
        var meter = "Distance can never be negative";
    }
    return meter;
}

console.log(kilometerToMeter(-9));
console.log(kilometerToMeter(25));


//Answer to the second Assignment


function budgetCalculator(watch, phone, laptop) {
    if(watch >= 0 && phone >= 0 && laptop >= 0) {
        cost1 = watch * 50;
        cost2 = phone * 100;
        cost3 = laptop * 500;
        totalCost = cost1 + cost2 + cost3;
    }
    else{
        totalCost = "Error value";gi
    }
    return totalCost;
}

console.log(budgetCalculator(2,3,-2));
console.log(budgetCalculator(2,3,2));



//Answer to the third Assignment


function hotelCost(days){
    if(days <= 10 && days >= 0){
        totalCost = days * 100;
    }
    else if(days <= 20 && days > 10){
        cost1 = 10 * 100;
        remaining = days-10;
        cost2 = remaining * 80;
        totalCost = cost1 + cost2;
    }
    else if(days > 20 ){
        cost1 = 10 * 100;
        cost2 = 10 * 80;
        remaining = days - 20;
        cost3 = remaining * 50;
        totalCost = cost1 + cost2 + cost3;
    }
    else{
        totalCost = "Please enter currect value";
    }
    return totalCost;
}
console.log(hotelCost(35));
console.log(hotelCost(-5));
console.log(hotelCost(0));



//Answer to the fourth Assignment




function megaFriend(arr){
    var long = arr[0];
    for (let i = 0; i < arr.length; i++) 
    {
        const element = arr[i];
        if( long.length < element.length)
        {
            long = element;
        }
    }
    return long;
                          }

    var  friend = ["abir","abdullah","koushik","abdurrohim","ali"];
    console.log(megaFriend(friend));

