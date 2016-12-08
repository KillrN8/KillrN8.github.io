var septim = 0;
var x = 1;
var sps = 0;
var spc = 1;

function sClick(x) { //Clicking source
		septim = septim + x;
		document.getElementById("septims").innerHTML = septim.toFixed(0);
	};
	
var leather = 0;
var leatherCount= 0;
var leatherCost = 0;
var nextleatherCost = 0;

function buyLeather(){ //Leather Armor
		leatherCost = Math.floor(10 * Math.pow(1.7,leatherCount)); //Starting cost
		if (septim >= leatherCost){
		leather = leather + 1;
		leatherCount = leatherCount + 1;
		septim = septim - leatherCost;
		sps = sps + 1;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimps').innerHTML = sps;
		};
		nextleatherCost = Math.floor(10 * Math.pow(1.7,leatherCount)); //Updates Cost
		document.getElementById('leatherCost').innerHTML = nextleatherCost;
	};
	
	window.setInterval(function(){
			sClick(leather);
			document.title = septim.toFixed(0) + ' septims';
	}, 1000);
	
var wood = 0;
var woodCount= 0;
var woodCost = 0;
var nextwoodCost = 0;

function buyWood(){ //wood Armor
		woodCost = Math.floor(500 * Math.pow(1.7,woodCount)); //Starting cost
		if (septim >= woodCost){
		wood = wood + 0;
		woodCount = woodCount + 1;
		septim = septim - woodCost;
		spc = spc + 3;
		x = x + 3;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimpc').innerHTML = spc;
		};
		nextwoodCost = Math.floor(500 * Math.pow(1.7,woodCount)); //Updates Cost
		document.getElementById('woodCost').innerHTML = nextwoodCost;
	};
	
	window.setInterval(function(){
			sClick(wood);
			nextwoodCost = nextwoodCost;
	}, 1000);
	
var interval = [500, 60000, 60000, 60000, 90000, 90000, 120000, 150000]; //sets golden septim's random spawn times
var div = document.getElementById('randomevent');
function hide(){
  div.style.visibility = "hidden";
  septim = septim * 1.2;
  showIn(randomInterval());
}
function randomInterval() {
  return interval[Math.floor(Math.random() * interval.length)];
}
function showIn(delay) {
  setTimeout(function() {
    div.style.visibility = "visible";
  }, delay);
}
showIn(randomInterval());

$(document).ready(function() { //makes clicking image become smaller when you are holding it down
    $("img#noclick").mousedown(function() {
        $(this).attr("id", 'yesclick');
      })
      .mouseup(function() {
        $(this).attr("id", 'noclick');
      });

  });
	
function save(){  //saves game
	var save = {
	
		"septim": septim,
		"nextwoodCost": nextwoodCost,
		"woodCost": woodCost,
		"wood": wood,
		"woodCount": woodCount,
		"nextleatherCost": nextleatherCost,
		"leatherCost": leatherCost,
		"leatherCount": leatherCount,
		"leather": leather,
		"x": x,
		"sps": sps,
		"spc": spc
		
	}
	localStorage.setItem("SaveGame",JSON.stringify(save));
}
	
	
function load(){ //loads saved game data
	if (localStorage.getItem("SaveGame") !== null){
	var savegame = JSON.parse(localStorage.getItem("SaveGame"));
	
	if (typeof savegame.septim !== "undefined") septim = savegame.septim; //loads all saved variables
	if (typeof savegame.nextwoodCost !== "undefined") nextwoodCost = savegame.nextwoodCost;
	if (typeof savegame.woodCost !== "undefined") woodCost = savegame.woodCost;
	if (typeof savegame.wood !== "undefined") wood = savegame.wood;
	if (typeof savegame.woodCount !== "undefined") woodCount = savegame.woodCount;
	if (typeof savegame.nextleatherCost !== "undefined") nextleatherCost = savegame.nextleatherCost;
	if (typeof savegame.leatherCost !== "undefined") leatherCost = savegame.leatherCost;
	if (typeof savegame.leatherCount !== "undefined") leatherCount = savegame.leatherCount;
	if (typeof savegame.leather !== "undefined") leather = savegame.leather;
	if (typeof savegame.x !== "undefined") x = savegame.x;
	if (typeof savegame.sps !== "undefined") sps = savegame.sps;
	if (typeof savegame.spc !== "undefined") spc = savegame.spc;
	
	document.getElementById('leatherCost').innerHTML = nextleatherCost; //sets to display all saved data once page has loaded
	document.getElementById('septimpc').innerHTML = spc;
	document.getElementById('septimps').innerHTML = sps;
	
	}
}

function DeleteGame(){ //deletes the saved game
	localStorage.removeItem("SaveGame");
	location.reload();
}