var Main = {};

Main.Player = function(name, team, years, goals)
{
	this.Name = name;
	this.Team = team;
	this.YearsInLeague = years;
	this.Goals = goals;
}

Main.Sidney = new Main.Player("Sidney Crosby", "Pittsburgh Penguins", 12, 372);
Main.Alexander = new Main.Player("Alexander Ovechkin", "Washington Capitals", 13, 552);
Main.Cam = new Main.Player("Cam Atkinson", "Columbus Blue Jackets", 5, 115);
Main.Jaromir = new Main.Player("Jaromir Jagr", "Florida Panthers", 26, 760);

Main.Player.prototype.SetAssists = function(assists)
{
	this.Assists = assists;
}

Main.Sidney.SetAssists(633);
Main.Alexander.SetAssists(468);
Main.Cam.SetAssists(103);
Main.Jaromir.SetAssists(1142);

Main.Player.prototype.GetPlayerInfo = function()
{
	return this.Name + " plays for the " + this.Team + ", has scored " + this.Goals + " goals, and has tallied " + this.Assists + " assists.";
}

Main.Player.prototype.GetName = function()
{
	return this.Name;
}

document.write(Main.Sidney.GetPlayerInfo());
document.write("<br>");
document.write(Main.Alexander.GetPlayerInfo());
document.write("<br>");
document.write(Main.Cam.GetPlayerInfo());
document.write("<br>");
document.write(Main.Jaromir.GetPlayerInfo());