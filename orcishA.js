var orcishA = 0;
var orcishACount= 0;

function buyorcishA(){ //orcishA Armor
		var orcishACost = Math.floor(500000 * Math.pow(1.7,orcishACount)); //Starting cost
		if (septim >= orcishACost){
		orcishA = orcishA + 420;
		orcishACount = orcishACount + 1;
		septim = septim - orcishACost;
		sps = sps + 420;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimps').innerHTML = sps;
		};
		var nextorcishACost = Math.floor(500000 * Math.pow(1.7,orcishACount)); //Updates Cost
		document.getElementById('orcishACost').innerHTML = nextorcishACost;
	};
	
	window.setInterval(function(){
			sClick(orcishA);
	}, 1000);