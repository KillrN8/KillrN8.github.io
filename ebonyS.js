var ebonyS = 0;
var ebonySCount= 0;

function buyebonyS(){ //ebonyS Armor
		var ebonySCost = Math.floor(3000000 * Math.pow(1.7,ebonySCount)); //Starting cost
		if (septim >= ebonySCost){
		ebonyS = ebonyS + 0;
		ebonySCount = ebonySCount + 1;
		septim = septim - ebonySCost;
		spc = spc + 952;
		x = x + 952;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimpc').innerHTML = spc;
		};
		var nextebonySCost = Math.floor(3000000 * Math.pow(1.7,ebonySCount)); //Updates Cost
		document.getElementById('ebonySCost').innerHTML = nextebonySCost;
	};
	
	window.setInterval(function(){
			sClick(ebonyS);
	}, 1000);
	