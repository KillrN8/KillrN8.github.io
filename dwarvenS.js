var dwarvenS = 0;
var dwarvenSCount= 0;

function buydwarvenS(){ //dwarvenS Armor
		var dwarvenSCost = Math.floor(90000 * Math.pow(1.7,dwarvenSCount)); //Starting cost
		if (septim >= dwarvenSCost){
		dwarvenS = dwarvenS + 0;
		dwarvenSCount = dwarvenSCount + 1;
		septim = septim - dwarvenSCost;
		spc = spc + 239;
		x = x + 239;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimpc').innerHTML = spc;
		};
		var nextdwarvenSCost = Math.floor(90000 * Math.pow(1.7,dwarvenSCount)); //Updates Cost
		document.getElementById('dwarvenSCost').innerHTML = nextdwarvenSCost;
	};
	
	window.setInterval(function(){
			sClick(dwarvenS);
	}, 1000);
	