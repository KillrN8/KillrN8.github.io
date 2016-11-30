var steelS = 0;
var steelSCount= 0;

function buysteelS(){ //steelS 
		var steelSCost = Math.floor(25000 * Math.pow(1.7,steelSCount)); //Starting cost
		if (septim >= steelSCost){
		steelS = steelS + 0;
		steelSCount = steelSCount + 1;
		septim = septim - steelSCost;
		spc = spc + 71;
		x = x + 71;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimpc').innerHTML = spc;
		};
		var nextsteelSCost = Math.floor(25000 * Math.pow(1.7,steelSCount)); //Updates Cost
		document.getElementById('steelSCost').innerHTML = nextsteelSCost;
	};
	
	window.setInterval(function(){
			sClick(steelS);
	}, 1000);
	