function JsonMenu()
{
	return {
		"menu" : [
			{
				"type" : "pizza",
				"ingredients" : "pepperoni and sausage",
				"time" : 15,
				"price" : 10
			},
			{
				"type" : "sandwich",
				"ingredients" : "bacon, lettuce and tomato",
				"time" : 7,
				"price" : 8
			},
			{
				"type" : "breadsticks",
				"ingredients" : "bread",
				"time" : 5,
				"price" : 4
			},
			{
				"type" : "Pop",
				"ingredients" : "bad stuff",
				"time" : 1,
				"price" : 2
			}
		]
	};
}

function displayMenu(menu)
{
	for(var i=0; i<menu.menu.length; i++)
	{
		var item = menu.menu[i];
		alert("The " + item.type + " has " + item.ingredients + ", takes " + item.time + " minutes to make, and costs $" + item.price);
	}
}

$(document).ready(function ()
{
	$("#button").click(function()
	{
		var menu = JsonMenu();
		displayMenu(menu);
	});
});