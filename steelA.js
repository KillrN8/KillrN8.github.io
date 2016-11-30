var steelA = 0;
var steelACount= 0;

function buysteelA(){ //steelA Armor
		var steelACost = Math.floor(15000 * Math.pow(1.7,steelACount)); //Starting cost
		if (septim >= steelACost){
		steelA = steelA + 43;
		steelACount = steelACount + 1;
		septim = septim - steelACost;
		sps = sps + 43;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimps').innerHTML = sps;
		};
		var nextsteelACost = Math.floor(15000 * Math.pow(1.7,steelACount)); //Updates Cost
		document.getElementById('steelACost').innerHTML = nextsteelACost;
	};
	
	window.setInterval(function(){
			sClick(steelA);
	}, 1000);