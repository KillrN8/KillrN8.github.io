var septim = 0;
var x = 1;
var sps = 0;
var spc = 1;

function sClick(x) { //Main Clicking Source
		septim = septim + x;
		document.getElementById("septims").innerHTML = septim.toFixed(0);
	};