var wood = 0;
var woodCount= 0;

function buyWood(){ //wood Armor
		var woodCost = Math.floor(500 * Math.pow(1.7,woodCount)); //Starting cost
		if (septim >= woodCost){
		wood = wood + 0;
		woodCount = woodCount + 1;
		septim = septim - woodCost;
		spc = spc + 3;
		x = x + 3;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimpc').innerHTML = spc;
		};
		var nextwoodCost = Math.floor(500 * Math.pow(1.7,woodCount)); //Updates Cost
		document.getElementById('woodCost').innerHTML = nextwoodCost;
	};
	
	window.setInterval(function(){
			sClick(wood);
	}, 1000);