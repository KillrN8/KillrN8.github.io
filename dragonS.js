var dragonS = 0;
var dragonSCount= 0;

function buydragonS(){ //dragonS Armor
		var dragonSCost = Math.floor(50000000 * Math.pow(1.7,dragonSCount)); //Starting cost
		if (septim >= dragonSCost){
		dragonS = dragonS + 0;
		dragonSCount = dragonSCount + 1;
		septim = septim - dragonSCost;
		spc = spc + 2500;
		x = x + 2500;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimpc').innerHTML = spc;
		};
		var nextdragonSCost = Math.floor(50000000 * Math.pow(1.7,dragonSCount)); //Updates Cost
		document.getElementById('dragonSCost').innerHTML = nextdragonSCost;
	};
	
	window.setInterval(function(){
			sClick(dragonS);
	}, 1000);
	