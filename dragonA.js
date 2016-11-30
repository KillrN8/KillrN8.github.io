var dragonA = 0;
var dragonACount= 0;

function buydragonA(){ //dragonA Armor
		var dragonACost = Math.floor(35000000 * Math.pow(1.7,dragonACount)); //Starting cost
		if (septim >= dragonACost){
		dragonA = dragonA + 2112;
		dragonACount = dragonACount + 1;
		septim = septim - dragonACost;
		sps = sps + 2112;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimps').innerHTML = sps;
		};
		var nextdragonACost = Math.floor(35000000 * Math.pow(1.7,dragonACount)); //Updates Cost
		document.getElementById('dragonACost').innerHTML = nextdragonACost;
	};
	
	window.setInterval(function(){
			sClick(dragonA);
	}, 1000);