function calculate()
{
    // gather all input

    // ask user for number of pizza
    // convert to number type
    let totalPizza = parseFloat( prompt("How many pizzas?") );

    // ask user for number of toppings
    // convert to number type
    let pizzaToppings = parseFloat( prompt("How many total toppings?") );

    // ask user for number of coworkers
    // convert to number type
    let totalCoworkers = parseFloat( prompt("How many coworkers are pitching in?") );

    // do some math

    // multiple number of pizzas by 15
    // multiple number of toppings by 1.25
    // divide total cost by number of coworkers
    let totalCost = (15 * totalPizza)+(1.25 * pizzaToppings);
    let individualCost = (totalCost / totalCoworkers);

    // OUTPUT!

    // alert the gas cost
    alert(`The total cost is $${totalCost.toFixed(2)} `);

    // alert the hours
    alert(`The cost per person is $${individualCost.toFixed(2)}`);
}