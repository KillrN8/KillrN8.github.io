var ironS = 0;
var ironSCount= 0;

function buyironS(){ //ironS Armor
		var ironSCost = Math.floor(6500 * Math.pow(1.7,ironSCount)); //Starting cost
		if (septim >= ironSCost){
		ironS = ironS + 0;
		ironSCount = ironSCount + 1;
		septim = septim - ironSCost;
		spc = spc + 15;
		x = x + 15;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimpc').innerHTML = spc;
		};
		var nextironSCost = Math.floor(6500 * Math.pow(1.7,ironSCount)); //Updates Cost
		document.getElementById('ironSCost').innerHTML = nextironSCost;
	};
	
	window.setInterval(function(){
			sClick(ironS);
	}, 1000);
	