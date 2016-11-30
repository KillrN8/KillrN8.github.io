var daedricS = 0;
var daedricSCount= 0;

function buydaedricS(){ //daedricS Armor
		var daedricSCost = Math.floor(15000000 * Math.pow(1.7,daedricSCount)); //Starting cost
		if (septim >= daedricSCost){
		daedricS = daedricS + 0;
		daedricSCount = daedricSCount + 1;
		septim = septim - daedricSCost;
		spc = spc + 1531;
		x = x + 1531;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimpc').innerHTML = spc;
		};
		var nextdaedricSCost = Math.floor(15000000 * Math.pow(1.7,daedricSCount)); //Updates Cost
		document.getElementById('daedricSCost').innerHTML = nextdaedricSCost;
	};
	
	window.setInterval(function(){
			sClick(daedricS);
	}, 1000);
	