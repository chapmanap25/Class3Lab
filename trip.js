$(document).ready(function () {
    $("button").on("click", calculate);
});


function calculate()
{
    // gather all input

    // ask user for number of pizza
    // convert to number type
    let totalPizza = parseFloat( $("#totalPizza").val() );

    //totalPizza = parseFloat(totalPizza);

    // ask user for number of toppings
    // convert to number type
    let pizzaToppings = parseFloat( $("#pizzaToppings").val() );

    // ask user for number of coworkers
    // convert to number type
    let totalCoworkers = parseFloat( $("#totalCoworkers").val() );


    // do some math

    // multiple number of pizzas by 15
    // multiple number of toppings by 1.25
    // divide total cost by number of coworkers

    // multiple number of pizzas by 15
    let totalCost = (totalPizza * 15) + (pizzaToppings * 1.25);

    // divide total cost by number of coworkers
    let individualCost = (totalCost / totalCoworkers);

    // OUTPUT!

    // alert the total cost
    // alert(`The pizza bill will be $${totalCost.toFixed(2)}`);
    $("span#totalCost").text(totalCost.toFixed(2));

    // alert the individual cost
    // alert(`Each coworker will pay ${individualCost.toFixed(2)}`);
    $("span#individualCost").text(individualCost.toFixed(2));

    $(".output").show();
}