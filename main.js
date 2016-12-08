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
var leatherCost = 10;
var nextleatherCost = 10;

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
	
var ironA = 0;
var ironACount= 0;
var ironACost = 2500;
var nextironACost = 2500;

function buyironA(){ //Iron Armor
		ironACost = Math.floor(2500 * Math.pow(1.7,ironACount)); //Starting cost
		if (septim >= ironACost){
		ironA = ironA + 10;
		ironACount = ironACount + 1;
		septim = septim - ironACost;
		sps = sps + 10;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimps').innerHTML = sps;
		};
		nextironACost = Math.floor(2500 * Math.pow(1.7,ironACount)); //Updates Cost
		document.getElementById('ironACost').innerHTML = nextironACost;
	};
	
	window.setInterval(function(){
			sClick(ironA);
	}, 1000);
	
var steelA = 0;
var steelACount= 0;
var steelACost = 15000;
var nextsteelACost = 15000;

function buysteelA(){ //steelA Armor
		steelACost = Math.floor(15000 * Math.pow(1.7,steelACount)); //Starting cost
		if (septim >= steelACost){
		steelA = steelA + 43;
		steelACount = steelACount + 1;
		septim = septim - steelACost;
		sps = sps + 43;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimps').innerHTML = sps;
		};
		nextsteelACost = Math.floor(15000 * Math.pow(1.7,steelACount)); //Updates Cost
		document.getElementById('steelACost').innerHTML = nextsteelACost;
	};
	
	window.setInterval(function(){
			sClick(steelA);
	}, 1000);
	
var wood = 0;
var woodCount= 0;
var woodCost = 500;
var nextwoodCost = 500;

function buyWood(){ //Wood Sword
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
	
var ironS = 0;
var ironSCount= 0;
var ironSCost = 6500;
var nextironSCost = 6500;

function buyironS(){ //Iron Sword
		ironSCost = Math.floor(6500 * Math.pow(1.7,ironSCount)); //Starting cost
		if (septim >= ironSCost){
		ironS = ironS + 0;
		ironSCount = ironSCount + 1;
		septim = septim - ironSCost;
		spc = spc + 15;
		x = x + 15;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimpc').innerHTML = spc;
		};
		nextironSCost = Math.floor(6500 * Math.pow(1.7,ironSCount)); //Updates Cost
		document.getElementById('ironSCost').innerHTML = nextironSCost;
	};
	
	window.setInterval(function(){
			sClick(ironS);
	}, 1000);
	
var steelS = 0;
var steelSCount= 0;
var steelSCost = 25000;
var nextsteelSCost = 25000;

function buysteelS(){ //steelS 
		steelSCost = Math.floor(25000 * Math.pow(1.7,steelSCount)); //Starting cost
		if (septim >= steelSCost){
		steelS = steelS + 0;
		steelSCount = steelSCount + 1;
		septim = septim - steelSCost;
		spc = spc + 71;
		x = x + 71;
		document.getElementById('septims').innerHTML = septim.toFixed(0);
		document.getElementById('septimpc').innerHTML = spc;
		};
		nextsteelSCost = Math.floor(25000 * Math.pow(1.7,steelSCount)); //Updates Cost
		document.getElementById('steelSCost').innerHTML = nextsteelSCost;
	};
	
	window.setInterval(function(){
			sClick(steelS);
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
	document.getElementById('autosave').innerHTML = 'Game Saved';
	setTimeout(function(){
        document.getElementById('autosave').innerHTML = '';
    }, 2000);
	
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
		"ironACost": ironACost,
		"nextironACost": nextironACost,
		"ironACount": ironACount,
		"ironA": ironA,
		"ironSCost": ironSCost,
		"nextironSCost": nextironSCost,
		"ironSCount": ironSCount,
		"ironS": ironS,
		"steelA": steelA,
		"steelACount": steelACount,
		"steelACost": steelACost,
		"nextsteelACost": nextsteelACost,
		"steelS": steelS,
		"steelSCount": steelSCount,
		"steelSCost": steelSCost,
		"nextsteelSCost": nextsteelSCost,
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
	if (typeof savegame.ironACost !== "undefined") ironACost = savegame.ironACost;
	if (typeof savegame.ironACount !== "undefined") ironACount = savegame.ironACount;
	if (typeof savegame.ironA !== "undefined") ironA = savegame.ironA;
	if (typeof savegame.nextironACost !== "undefined") nextironACost = savegame.nextironACost;
	if (typeof savegame.ironSCost !== "undefined") ironSCost = savegame.ironSCost;
	if (typeof savegame.ironSCount !== "undefined") ironSCount = savegame.ironSCount;
	if (typeof savegame.ironS !== "undefined") ironS = savegame.ironS;
	if (typeof savegame.nextironSCost !== "undefined") nextironSCost = savegame.nextironSCost;
	if (typeof savegame.steelACost !== "undefined") steelACost = savegame.steelACost;
	if (typeof savegame.steelACount !== "undefined") steelACount = savegame.steelACount;
	if (typeof savegame.steelA !== "undefined") steelA = savegame.steelA;
	if (typeof savegame.nextsteelACost !== "undefined") nextsteelACost = savegame.nextsteelACost;
	if (typeof savegame.steelSCost !== "undefined") steelSCost = savegame.steelSCost;
	if (typeof savegame.steelSCount !== "undefined") steelSCount = savegame.steelSCount;
	if (typeof savegame.steelS !== "undefined") steelS = savegame.steelS;
	if (typeof savegame.nextsteelSCost !== "undefined") nextsteelSCost = savegame.nextsteelSCost;
	if (typeof savegame.x !== "undefined") x = savegame.x;
	if (typeof savegame.sps !== "undefined") sps = savegame.sps;
	if (typeof savegame.spc !== "undefined") spc = savegame.spc;
	
	document.getElementById('leatherCost').innerHTML = nextleatherCost; //sets to display all saved data once page has loaded
	document.getElementById('woodCost').innerHTML = nextwoodCost;
	document.getElementById('ironSCost').innerHTML = nextironSCost;
	document.getElementById('ironACost').innerHTML = nextironACost;
	document.getElementById('steelSCost').innerHTML = nextsteelSCost;
	document.getElementById('steelACost').innerHTML = nextsteelACost;
	document.getElementById('septimpc').innerHTML = spc;
	document.getElementById('septimps').innerHTML = sps;
	
	}
}

window.setInterval(function(){
    save();
    document.getElementById('autosave').innerHTML = 'Game Saved';

    setTimeout(function(){
        document.getElementById('autosave').innerHTML = '';
    }, 2000);
}, 30000);

function DeleteGame(){ //deletes the saved game
	localStorage.removeItem("SaveGame");
	location.reload();
}