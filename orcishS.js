var orcishS = 0;
var orcishSCount= 0;

function buyorcishS(){ //orcishS Armor
		var orcishSCost = Math.floor(870000 * Math.pow(1.7,orcishSCount)); //Starting cost
		if (septim >= orcishSCost){
		orcishS = orcishS + 0;
		orcishSCount = orcishSCount + 1;
		septim = septim - orcishSCost;
		spc = spc + 692;
		x = x + 692;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimpc').innerHTML = spc;
		};
		var nextorcishSCost = Math.floor(870000 * Math.pow(1.7,orcishSCount)); //Updates Cost
		document.getElementById('orcishSCost').innerHTML = nextorcishSCost;
	};
	
	window.setInterval(function(){
			sClick(orcishS);
	}, 1000);
	