// var movie = 
// {
// 	cinema:
// 	[
// 		{name: "In Bruges"},
// 		{stars: "5 stars"}
// 	]
// 	[
// 		{name: "Frozen"},
// 		{stars: "4,5 stars"}
// 	]
// 	[
// 		{name: "Mad Max Fury Road"},
// 		{stars: "5 stars"}
// 	]
// 	[
// 		{name: "Les Miserables"},
// 		{stars: "3,5 stars"}
// 	]
// }

var movie = 
[
	{
	name: "In Bruges",
	stars: 5,
	watched: true
	},
	{
	name: "Frozen",
	stars: 4.5,
	watched: false
	},
	{
	name: "Mad Max Fury Road",
	stars: 5,
	watched: true
	},
	{
	name: "Les Miserables",
	stars: 3.5,
	watched: false
	}
]

// console.log("You have watched " +  movie[i].name + " - " + movie[i].stars + " stars");
// console.log("You have not watched " +  movie[i].name + " - " + movie[i].stars + " stars");

for (var i = 0; i < movie.length; i++) 
{	
	var result = "You have ";
	if (movie[i].watched)
	{
		result += "watched ";
	} else
	{
		result += "not seen ";
	}
	result += "\"" + movie[i].name + "\" - " + movie[i].stars + " stars";
	console.log(result);
}