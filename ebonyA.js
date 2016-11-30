var ebonyA = 0;
var ebonyACount= 0;

function buyebonyA(){ //ebonyA Armor
		var ebonyACost = Math.floor(1000000 * Math.pow(1.7,ebonyACount)); //Starting cost
		if (septim >= ebonyACost){
		ebonyA = ebonyA + 821;
		ebonyACount = ebonyACount + 1;
		septim = septim - ebonyACost;
		sps = sps + 821;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimps').innerHTML = sps;
		};
		var nextebonyACost = Math.floor(1000000 * Math.pow(1.7,ebonyACount)); //Updates Cost
		document.getElementById('ebonyACost').innerHTML = nextebonyACost;
	};
	
	window.setInterval(function(){
			sClick(ebonyA);
	}, 1000);