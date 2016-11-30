var leather = 0;
var leatherCount= 0;

function buyLeather(){ //Leather Armor
		var leatherCost = Math.floor(10 * Math.pow(1.7,leatherCount)); //Starting cost
		if (septim >= leatherCost){
		leather = leather + 1;
		leatherCount = leatherCount + 1;
		septim = septim - leatherCost;
		sps = sps + 1;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimps').innerHTML = sps;
		};
		var nextleatherCost = Math.floor(10 * Math.pow(1.7,leatherCount)); //Updates Cost
		document.getElementById('leatherCost').innerHTML = nextleatherCost;
	};
	
	window.setInterval(function(){
			sClick(leather);
			document.title = septim.toFixed(0) + ' septims';
	}, 1000);