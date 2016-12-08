var dwarvenA = 0;
var dwarvenACount= 0;

function buydwarvenA(){ //dwarvenA Armor
		var dwarvenACost = Math.floor(55000 * Math.pow(1.7,dwarvenACount)); //Starting cost
		if (septim >= dwarvenACost){
		dwarvenA = dwarvenA + 89;
		dwarvenACount = dwarvenACount + 1;
		septim = septim - dwarvenACost;
		sps = sps + 89;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimps').innerHTML = sps;
		};
		var nextdwarvenACost = Math.floor(55000 * Math.pow(1.7,dwarvenACount)); //Updates Cost
		document.getElementById('dwarvenACost').innerHTML = nextdwarvenACost;
	};
	
	window.setInterval(function(){
			sClick(dwarvenA);
	}, 1000);