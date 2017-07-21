//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  var smallBarrel = 60;
  var largeBarrelTotal = total - (small * smallBarrel);
  var largeBarrel = largeBarrelTotal / large;
  return largeBarrel;
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  var circumference = 24901;
  var gallonsUsed = circumference/milesPerGallon;
  var cost = gallonsUsed * fuelPrice;
  return cost;
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
	var costcoTotalPure = a * (b/100);
	var kirklandTotalPure = c * (d/100);
	var totalPure = costcoTotalPure + kirklandTotalPure;
	var totalJuice = a + c;
	var pureToTotal = totalPure / totalJuice;
	return pureToTotal;
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
