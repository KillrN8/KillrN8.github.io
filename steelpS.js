var steelpS = 0;
var steelpSCount= 0;

function buysteelpS(){ //steelpS Armor
		var steelpSCost = Math.floor(90000 * Math.pow(1.7,steelpSCount)); //Starting cost
		if (septim >= steelpSCost){
		steelpS = steelpS + 0;
		steelpSCount = steelpSCount + 1;
		septim = septim - steelpSCost;
		spc = spc + 98;
		x = x + 98;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimpc').innerHTML = spc;
		};
		var nextsteelpSCost = Math.floor(90000 * Math.pow(1.7,steelpSCount)); //Updates Cost
		document.getElementById('steelpSCost').innerHTML = nextsteelpSCost;
	};
	
	window.setInterval(function(){
			sClick(steelpS);
	}, 1000);
	