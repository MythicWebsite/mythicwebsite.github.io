$(document).ready(function() {
	var player = new Object({});
	var playername = null
	var aName = null
	console.log(NPC.Ted.int)
	
	//Functions
	function savedata(loc,thedata) {
		localStorage.setItem(loc, JSON.stringify(thedata))
	}
	function loaddata(loc) {
		player = JSON.parse(localStorage.getItem(loc))
	}
	function getE(ele) {
		return document.getElementById(ele)
	}

	//Actual content

  //Set input field to focus and load if enter pressed
	getE("input").focus()
	getE("input").select()
	getE("input").addEventListener("keyup",function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			getE("load").click();
		}
	});
	
	//Save on button press
	$("#save").click(function(){
		console.log("Player saved " + playername + ".")
		savedata(playername,player);
	});
	
	//Load on button press
	$("#load").click(function(){
		aName = getE('input').value.trim()
		playername = getE('input').value.toLowerCase().trim()
		// console.log("User typed " + playername)
		if (!!playername){
			if (localStorage.getItem(playername) === null){
				console.log("Created new player data for " + aName + ".")
				player.hp = 10
				player.st = 2
				player.df = 2
				savedata(playername,player);
			}
			else {
				loaddata(playername);
				console.log("Player loaded " + playername + ".");
			}
			getE("loaddiv").style.display = "none";
			getE("gametext").style.display = "block";
			getE("gamediv").style.display = "block";
			getE("guycontainer").style.display = "inline-block";
			getE("gameheader").innerHTML = aName + "'s game";
			getE("gametext").innerHTML = aName + "'s game has been loaded.";
		}
		else {
			console.log('Unable to load "' + playername + '".')
		}
	});
	
	//Train ST on button press
	$("#stbutton").click(function(){
		player.st = player.st+1
		console.log(aName + " Strength is now " + player.st)
		getE("gametext").innerHTML = aName + "'s Strength is now " + player.st;
	});
	
	//Train DF on button press
	$("#dfbutton").click(function(){
		player.df = player.df+1
		console.log(aName + " Defence is now " + player.df)
		getE("gametext").innerHTML = aName + "'s Defence is now " + player.df;
	});
	
	//Train HP on button press
	$("#hpbutton").click(function(){
		player.hp = player.hp+1
		console.log(aName + " HP is now " + player.hp)
		getE("gametext").innerHTML = aName + "'s HP is now " + player.hp;
	});


});