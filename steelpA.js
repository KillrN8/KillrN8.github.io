var steelpA = 0;
var steelpACount= 0;

function buysteelpA(){ //steelpA Armor
		var steelpACost = Math.floor(55000 * Math.pow(1.7,steelpACount)); //Starting cost
		if (septim >= steelpACost){
		steelpA = steelpA + 89;
		steelpACount = steelpACount + 1;
		septim = septim - steelpACost;
		sps = sps + 89;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimps').innerHTML = sps;
		};
		var nextsteelpACost = Math.floor(55000 * Math.pow(1.7,steelpACount)); //Updates Cost
		document.getElementById('steelpACost').innerHTML = nextsteelpACost;
	};
	
	window.setInterval(function(){
			sClick(steelpA);
	}, 1000);