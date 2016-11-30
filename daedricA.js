var daedricA = 0;
var daedricACount= 0;

function buydaedricA(){ //daedricA Armor
		var daedricACost = Math.floor(8000000 * Math.pow(1.7,daedricACount)); //Starting cost
		if (septim >= daedricACost){
		daedricA = daedricA + 1291;
		daedricACount = daedricACount + 1;
		septim = septim - daedricACost;
		sps = sps + 1291;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimps').innerHTML = sps;
		};
		var nextdaedricACost = Math.floor(8000000 * Math.pow(1.7,daedricACount)); //Updates Cost
		document.getElementById('daedricACost').innerHTML = nextdaedricACost;
	};
	
	window.setInterval(function(){
			sClick(daedricA);
	}, 1000);