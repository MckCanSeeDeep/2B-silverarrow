// JavaScript Document

//Introduction

document.getElementbyID("story").innerHTML = "You wake up in a dark, dreary cave. You have no memory of your previous life, and the only thing in your mind is the echo of water dripping from the ceiling. You grab a backpack that sits in front of you on the cave floor. You have a pocket knife, some rope, dried fruit that won't last long, a water bottle half-full, and a jagged rock.";
var name = prompt("What is your name?")

//Bread or Sword

document.getElementbyID("story").innerHTML ="You see two things in the cave: A sword and a package of bread. Which do you take? Only one will fit in your backpack.";

function story_inventory(choice) {
	if(choice == "sword")
	document.getElementById("story").innerHTML = "You grab the blade.";
	if(choice == "bread")
	document.getElementById("story").innerHTML = "You pack the bread.";
}

//Which door?

document.getElementbyID("story").innerHTML = "You notice a long hallway leading out of the cave. When you reach the end of the hallway, you are met with two doors. One is bright green and earthy, surrounded by vines. A cool breeze wafts from the crack beneath it. The other is black as coal, and is strangled with dried, withering tree branches. Intense heat flames from it. Which door will you use?";

function story_doors(choice) {
	
//The Earthy Door

	if(choice == "The earthy door")
	
	document.getElementbyID("story").innerHTML = "You turn the mahogany handle of the door. You emerge on a hill surrounded by rolling fields. Down the hill, peasants drenched in sweat and dressed in faded rags labor away, picking some kind of pale blue cotton. Cruel-faced supervisors pace behind them, watching their work and carrying sharp-looking batons. You walk down the hill, hoping that your own tattered clothes will blend in with theirs. You come to an area where no supervisors seem to be watching. ";
			
			if(choice == "sword")
			document.getElementbyID("story").innerHTML = "You chose the SWORD. Their eyes follow you with skepticism and caution, but they do not seem to be hostile. Some of them notice the sword in your belt and narrow their eyes, but they continue their work. When the supervisor begins to yell at the quiet young woman next to you, and begins threatening her, what do you do?";
			
				
//What Will you Say to the Supervisor?

				function story_supervisor(choice) {
					
					if(choice == "stand up for her")
						document.getElementbyID("story").innerHTML = "The supervisor flings his knife at you in anger. Quickly thinking, you dart to the side and catch it. You run to a building in the distance, and foolishly promise to come back for the other workers.";
						
					if(choice == "keep your head down")
						document.getElementbyID("story").innerHTML = "The supervisor notices the sword you hid in the reeds and pulls out his bow and arrow. He brings back the bowstring and releases before you can react. You're DEAD. TERMINATED.";
				}

//Back to the People's Attitude

			else {
			document.getElementbyID("story").innerHTML = "You chose the BREAD. The people have hunger-hollowed cheeks, so you give them some of your bread. They immediately trust you, and allow you to work beside them and hide yourself. The few people near you now trust you, and they decide to help conceal you. The supervisor arrives to monitor your laboring progress and begins taunting those beside you. Will you stand up to the supervisor or make friends with him?";
			
			function story_supervisor2(choice) {
				
				//WRITE LATER - STAND UP OR MAKE FRIENDS?

//The Fiery Door		
		
	if(choice == "The fiery door")
	document.getElementbyID("story").innerHTML = "You use the end of your shirt to turn the knob, as it is too hot. You enter a dark forest of fire-blackened trees. The sky is so full of smog that it has a grayish tinge and it is impossible to tell whether it is day or night. The only light in the vicinity comes from the dim glow of flames licking at the trees. The faint howling of wolves can be heard in the distance, miles away. After a moment you realize the howls are getting louder and louder. Suddenly, a gray blur leaps out of the shadowy trees. Several more gray blurs follow it.";
	
		if(choice == "bread") {
			document.getElementbyID("story").innerHTML = "You atttempt to feed the snarling beasts as they circle you, but they are only interested in meat. Sorry, you're DEAD. TERMINATED.";
	
		else {
			
			document.getElementbyID("story").innerHTML = "You chose the SWORD. You manage to fend the wolves off, sticking several of them with your blade. There are too many of them. You run through the woods, branches scratching at your skin. Do you climb a tree or run for the rusty door concealed by vines in the corner thirty yards away?";
			
//Tree or Door?
			
			function story_wolves(choice) {
				
				if (choice == "Climb a tree")
						document.getElementbyID("story").innerHTML = "You attempt to scramble up the tree, and feel the wolves' hot breath on your heels. You grab at a branch, but it breaks in your hand. You fall to the ground and are winded as your back crashes into the leaves. The wolves growl and pounce at you. You're DEAD. TERMINATED.";
			
				if (choice == "Run for the rusty door")
						document.getElementbyID("story").innerHTML = "You manage to lever the door open with your sword. You quickly close the door behind you and barely escape the razor sharp teeth of the wild-eyed wolves. You are now in a dark, empty-halled building.";
			}
	
	
//Branching Back to the Building