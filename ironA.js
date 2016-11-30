var ironA = 0;
var ironACount= 0;

function buyironA(){ //ironA Armor
		var ironACost = Math.floor(2500 * Math.pow(1.7,ironACount)); //Starting cost
		if (septim >= ironACost){
		ironA = ironA + 10;
		ironACount = ironACount + 1;
		septim = septim - ironACost;
		sps = sps + 10;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimps').innerHTML = sps;
		};
		var nextironACost = Math.floor(2500 * Math.pow(1.7,ironACount)); //Updates Cost
		document.getElementById('ironACost').innerHTML = nextironACost;
	};
	
	window.setInterval(function(){
			sClick(ironA);
	}, 1000);