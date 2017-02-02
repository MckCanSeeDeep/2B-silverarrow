// JavaScript Document

document.getElementbyID("story").innerHTML = "You wake up in a dark, dreary cave. You have no memory of your previous life, and the only thing in your mind is the echo of water dripping from the ceiling. You grab a backpack that sits in front of you on the cave floor. You have a pocket knife, some rope, dried fruit that won't last long, a water bottle half-full, and a jagged rock.";
var name = prompt("What is your name?")

document.getElementbyID("story").innerHTML ="You see two things in the cave: A sword and a package of bread. Which do you take? Only one will fit in your backpack.";

function story_inventory(choice) {
	if(choice == "sword")
	document.getElementById("story").innerHTML = "You grab the blade.";
	if(choice == "bread")
	document.getElementById("story").innerHTML = "You pack the bread.";
}

document.getElementbyID("story").innerHTML = "You notice a long hallway leading out of the cave. When you reach the end of the hallway, you are met with two doors. One is bright green and earthy, surrounded by vines. A cool breeze wafts from the crack beneath it. The other is black as coal, and is strangled with dried, withering tree branches. Intense heat flames from it. Which door will you use?";

function story_doors(choice) {
	if(choice == "The earthy door")
	
	document.getElementbyID("story").innerHTML = "You turn the mahogany handle of the door. You emerge on a hill surrounded by rolling fields. Down the hill, peasants drenched in sweat and dressed in faded rags labor away, picking some kind of pale blue cotton. Cruel-faced supervisors pace behind them, watching their work and carrying sharp-looking batons.";
			
			if(choice == "sword") {
			document.getElementbyID("story").innerHTML = "You walk down the hill, hoping that your own tattered clothes will blend in with theirs. You come to an area where no supervisors seem to be watching.
 Their eyes follow you with skepticism and caution, but they do not seem to be hostile. Some of them notice the sword in your belt and narrow their eyes, but they continue their work.";
			}
			
			else {
			document.getElementbyID("story").innerHTML = "You walk down the hill, hoping that your own tattered clothes will blend in with theirs. You come to an area where no supervisors seem to be watching. The people have hunger-hollowed cheeks, so you give them some of your bread. They immediately trust you, and allow you to work beside them and camouflage yourself.";
			}
			
		
	if(choice == "The fiery door")
	document.getElementbyID("story").innerHTML = "You use the end of your shirt to turn the knob, as it is too hot. You enter a dark forest of fire-blackened trees. The sky is so full of smog that it has a grayish tinge and it is impossible to tell whether it is day or night. The only light in the vicinity comes from the dim glow of flames licking at the trees. The faint howling of wolves can be heard.";
		
	