
// JavaScript Document
//Use for storylines
//Introduction

var bread = false;
var sword = false;
@@ -87,34 +9,37 @@ function displayStory(choice) {
	var story = "";
	var btn1 = "";
	var btn2 = "";
	var btn3 = "";
	var btn4 = "";
	switch(choice) {
		
//Door 1 or 2

	case "beginning":
	case "bread/sword":
				story = "You wake up in a dark, dreary cave. You have no memory of your previous life, and the only thing in your mind is the echo of water dripping from the ceiling. You grab a backpack that sits in front of you on the cave floor. You have a pocket knife, some rope, dried fruit that won't last long, a water bottle half-full, and a jagged rock. You see two things in the cave: A sword and a package of bread. Which do you take? Only one will fit in your backpack.";
 				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('bread')");
				btn1.innerHTML = ("Continue your journey...");
				break;
				
	case "Checkpoint1":
	case "bread":
	case "sword":
				story = "You notice a long hallway leading out of the cave. When you reach the end of the hallway, you are met with two doors. One is bright green and earthy, surrounded by vines. A cool breeze wafts from the crack beneath it. The other is black as coal, and is strangled with dried, withering tree branches. Intense heat flames from it. Which door will you choose?";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('door1')");
				btn1.innerHTML = "Door 1";
				btn2 = document.createElement("BUTTON");
				btn2.setAttribute("onClick", "displayStory('door2')");
				btn2.innerHTML = "Door 2";
				//image = "";
				break;
				
//door 1	

	case "door1":
			if (bread) {
				story = "You turn the mahogany handle of the door. You emerge on a hill surrounded by rolling fields. Down the hill, peasants drenched in sweat and dressed in faded rags labor away, picking some kind of pale blue cotton. Cruel-faced supervisors pace behind them, watching their work and carrying sharp-looking batons. You walk down the hill, hoping that your own tattered clothes will blend in with theirs. You come to an area where no supervisors seem to be watching. You chose the BREAD. The people have hunger-hollowed cheeks, so you give them some of your bread. They immediately trust you, and allow you to work beside them and hide yourself. The few people near you now trust you, and they decide to help conceal you. The supervisor arrives to monitor your laboring progress and begins taunting those beside you. Will you stand up to the supervisor or make friends with him";
				btn1 = document.createElement("BUTTON");
@@ -139,169 +64,171 @@ case "door1":
			
//(bread) stand up/make friends

	case "makeFriends":
				story = "You crack a funny joke at the supervisor. He looks at you blankly for a moment, but then his dark bearded face stretches into a smile. He pats your back and tells you that he will help you, sending you to a building in the distance.";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('continue')");
				btn1.innerHTML = "Continue...";
				break;
				//ACHIEVEMENT: BUILDING
				
	case "standUpToSupervisor":
				story = "The taunts that the supervisor shoots at the laborers anger you. You stand up and he narrows his eyes at you. For a brief moment, you glare at each other. Suddenly, all you can see is the glint of his sword in the sunlight and then....darkness. sorry, you're DEAD!";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('Checkpoint1')");
				btn1.innerHTML = "Try again from the last CHECKPOINT";
				break;
		//RETURN TO CHECKPOINT//
		
//(sword) standUp/keep head down

	case "keepHeadDown":
				story = "Though you stay well hidden among the group of laborers, you notice the supervisor is eyeing you strangely. You realize that he sees the sword hidden in your belt. You look back at him, hoping he will do nothing. Suddenly, he nocks an arrow in the bow on his back. Before you can react, he has released the bowstring. Sorry, you're DEAD!";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('Checkpoint1')");
				btn1.innerHTML = "Try again from the last CHECKPOINT";
				break;
			//RETURN TO CHECKPOINT
			
	case "standUp":
				story = "The taunts that the supervisor shoots at the laborers anger you. You stand up and he narrows his eyes at you. The supervisor flings his knife at you in anger. Quickly thinking, you dart to the side and catch it. You run to a building in the distance, and foolishly promise to come back for the other workers.";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('continue')");
				btn1.innerHTML = "Continue...";
				break;
		//ACHIEMENT: BUILDING
		
		
		
//Door 2	
	case "door2":

//door 2 (bread)

	if( bread ) {
				story ="You use the end of your shirt to turn the knob, as it is too hot. You enter a dark forest of fire-blackened trees. The sky is so full of smog that it has a grayish tinge and it is impossible to tell whether it is day or night. The only light in the vicinity comes from the dim glow of flames licking at the trees. The faint howling of wolves can be heard in the distance, miles away. After a moment you realize the howls are getting louder and louder. Suddenly, a gray blur leaps out of the shadowy trees. Several more gray blurs follow it. You try to feed the bread to the wolves but you are in vain. The wolves lunge and open their mouths, revealing razor sharp teeth. They pin you to the ground, knocking the last of your breath out and leaving you winded. The last thing you hear before the darkness consumes you is their howls. Sorry, you're DEAD!";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('Checkpoint1')");
				btn1.innerHTML = "Try again from the last CHECKPOINT";
				}

	else if (sword) {
				story ="You use the end of your shirt to turn the knob, as it is too hot. You enter a dark forest of fire-blackened trees. The sky is so full of smog that it has a grayish tinge and it is impossible to tell whether it is day or night. The only light in the vicinity comes from the dim glow of flames licking at the trees. The faint howling of wolves can be heard in the distance, miles away. After a moment you realize the howls are getting louder and louder. Suddenly, a gray blur leaps out of the shadowy trees. Several more gray blurs follow it.";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('runForDoor/climbTree')");
				btn1.innerHTML = "Continue your journey...";		
				}
				break;
				
	case "runForDoor/climbTree":
				story = "Since you chose the SWORD, you are able to fend off the wolves. However, there are too many of them. You desperately sprint off into the trees and see two options. You can either run for a rusty door covered in ivy, or climb a tree";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('climbTree')");
				btn1.innerHTML = "Climb the tree";
				btn2 = document.createElement("BUTTON");
				btn2.setAttribute("onClick", "displayStory('runForDoor')");
				btn2.innerHTML = "Run for the door";
				break;
				
	case "climbTree": 
				story = "You attempt to scramble up the tree, and feel the wolves' hot breath on your heels. You grab at a branch, but it breaks in your hand. You fall to the ground and your back crashes into the leaves. The wolves growl and pounce at you. Sorry, you're DEAD!";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('Checkpoint1')");
				btn1.innerHTML = "Try again from the last CHECKPOINT";
				break;

	case "runForDoor":
				story = "You sprint towards the door as fast as your feet can go and manage to lever the door open with your sword. You quickly close the door behind you and barely escape the razor sharp teeth of the wild-eyed wolves. You are now in a dark, empty-halled building.";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('continue')");
				btn1.innerHTML = "Continue...";
				break;
				
	case "continue":
				story = "As you sneak through the building, wondering if it is inhabited, you hear a chorus of thousands of footsteps. You begin to run, and come to a supply room with an opened door. Your go inside and there is an exit on either side of you. A figure runs in from each side. One is a violet-eyed girl with a long sheet of dark hair. The other is a confident-looking, brown-haired youth. Both yell for you to come with them if you want to live. Who will be your companion? Choose wisely.";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('Alec')");
				btn1.innerHTML = "The brown haired warrior";
				btn2 = document.createElement("BUTTON");
				btn2.setAttribute("onClick", "displayStory('Violet')");
				btn2.innerHTML = "The violet eyed girl";
				break;

	case "Alec":
				story="You run towards the brown haired boy, happy to be heading away from the increasingly loud footsteps. He introduces himself as Alec, and drags you to a door that you never would have noticed if you were on your own. It was a wise decision to choose him. As you slide through the door, you realize that the footsteps have become quieter. Alec stumbles over a pipe. As you help him up, you hear a large crash nearby. Do you choose to run after Alec, or do you you knock him out and leave him behind for whatever caused the sound?";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('runTogether')");
				btn1.innerHTML = "Run after Alec";
				btn2 = document.createElement("BUTTON");
				btn2.setAttribute("onClick", "displayStory('knockHimOut')");
				btn2.innerHTML = "Knock Alec out";
				break;
				
	case "knockHimOut":
				story="You slyly grab a broken piece of pipe from the ground and forcefully strike Alec in a swift blow to the head. He crumples to the ground and you make a dash for the closest out of the three doors in the room. As you turn to see if you are being followed, you trip backwards and realize you are falling through the air. Suddenly you hit something hot and the burning liquid you land in sears your skin before engulfing you. Sorry, you're DEAD!";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('Checkpoint3')");
				btn1.innerHTML = "Try again from the last checkpoint";
				break;
				
	case "runTogether":
				story="You follow Alec through a maze of doorways, when he grabs your arm to stop you from falling into a vat of boiling oil. You thank him as you run for what seems like hours, until tiring and finally slowing to a walk. It seems as though there is no way to escape the building. You hear a low, raspy voice say 'The Silver Arrow is near. Once it is found, we will at last have a purpose.' It is a man wearing a black hood speaking to another short man with scars covering his bald head. He appears to have a weapon. Do you stay to fight him, or do you hide?";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('fightHood')");
				btn1.innerHTML = "Fight";
				btn2 = document.createElement("BUTTON");
				btn2.setAttribute("onClick", "displayStory('hideFromHood')");
				btn2.innerHTML = "Hide";
				break;
				
	case "fightHood":
				story="You and Alec circle around the figure. Suddenly, you feel an invisible force pressing on your neck. Gasping for air, you do everything you can to stop the powerful force. In a few minutes, your vision fades to black and your lifeless body collapses to the cold ground. Sorry, you're DEAD!";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('Checkpoint3')");
				btn1.innerHTML = "Try again from the last checkpoint";
				break;

	case "hideFromHood":
				story = "You dive behind a thick pipe, and Alec follows quickly. The figure begins to whisper excitedly about someting and you feel compelled to stay hidden and listen in on the conversation. You learn about a mysterious phenomenon called the Silver arrow and when the figures retreaat into the darkness, you question Alec about this discovery.";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('threatenAlec')");
				btn1.innerHTML = "Threaten Alec";
				btn2 = document.createElement("BUTTON");
				btn2.setAttribute("onClick", "displayStory('convinceAlec')");
				btn2.innerHTML = "Convince Alec";
				break;

	case "threatenAlec":
				story = "You grab a knife from your belt and raise it threateningly. He seems suprised, but not scared. You demand that he explain about the silver arrow, and he sighs and relents.";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('Checkpoint5')");
				btn1.innerHTML = "Acquire Information";
			// ACHIEVEMENT KNOWLEDGE ACQUIRED
				break;	
				
	case "convinceAlec":
				story  = "You compel Alec to tell you about the Silver Arrow by bringing out your persuasive skills. You say, 'I deserve to know what's going on.' He stares at you for a while, contemplating the whether to tell you or not, and then finally gives in.";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('Checkpoint5')");
				btn1.innerHTML = "Acquire Information";
				break;

	case "Violet":
				story = "The brown-haired boy flees from the room as the sound of footsteps gets louder. The girl cocks her head at you and says, 'Nice choice. I'm Violet.' She motions for you to follow her and goes into a room off to the side. As you hear low, raspy voices, Violet pushes you to the ground, knocking the wind out of you. She flattens you against the cool floor. Do you stay still and trust her or fight back in fear that you chose the wrong companion? ";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('stayStill')");
				btn1.innerHTML = "Stay still";
				btn2 = document.createElement("BUTTON");
				btn2.setAttribute("onClick", "displayStory('fightBack')");
				btn2.innerHTML = "Fight Back";
				break;

	case "fightBack":
				story = "You grab Violet's hair, pulling violently, desparate to escape her strong grasp. Once you stand up, you quickly pull out a knife from your belt. You throw the knife at Violet, but it clatters to the ground a few feet from where she stands. Shocked, you take a swing at her face, but she simply steps aside. Her eyes darken and the figure emerges behind you and forces you to the ground. Sorry, you're DEAD!";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('Checkpoint2')");
			btn1.innerHTML = "Try again from the last checkpoint";
			
@@ -367,7 +294,7 @@ case "continueAgain":
case "brokenFence":
			story = "You hop the fence lithely and with ease. Your companion is loaded with heavy bags and impales their leg on a splintered plank of wood. You stare at the wound in horror. Suddenly you see a strange glow at the edge of a cliff nearby. You grab your companion around the shoulders and make your way to the cliff.";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('keepSearching')");
			btn1.innerHTML = "Go to edge of the cliff";
			break;

@@ -407,7 +334,6 @@ case "sitRest":
			btn2.setAttribute("onClick", "displayStory('fightFuzzies')");
			btn2.innerHTML = "Fight the creatures";
			break;

case "runFromFuzzies":
			story = "You and your companion attempt to run from the furry creatures, but one of them drops out of a tree, right on to you. Sorry, you're DEAD. Try again from the last CHECKPOINT.";
@@ -419,9 +345,76 @@ case "runFromFuzzies":
case "fightFuzzies":		
			story = "You and your companion draw your weapons, attempting to fight off the beasts. However, your companion is severely injured, and you end up with a large gash on your forehead. You grab onto a nearby vine and snatch your partner with your other hand.  ";
			btn1 = document.createElement("BUTTON");
			
			btn1.setAttribute("onClick", "displayStory('keepSearching')");
			btn1.innerHTML = "Continue to the cliff";
			break;

case "Checkpoint7":			
case "keepSearching":
			story = "You arrive at the cliff, where the Silver Arrow hovers over the ravine below. It is a mysterious, but aweing sight, slowly spinning the air magically. You look down to check on your friend, who is panting heavily because of the fight. Your companion's health has deteriorated immensely. You are on your own.";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('continue3')");
			btn1.innerHTML = "Continue";
			break;
			
case "continue3":
			story = "You tell your companion to wait on the ground. You scan your surroundings, searching for something to swing yourself high enough to reach the Silver Arrow. You find a tree branch extending over the edge, steady enough to lasso a rope around and hold your weight. It takes a few tries to loop your rope around it, but you manage to make it into a sturdy fork in the tree trunk. You realize that your companion is groaning in pain and has rolled over to the edge of the cliff. Do you attempt to lean over and grab the Silver Arrow, lasso it, help your friend and come back for the Silver Arrow, or run away and search for another way out? You consider that running away may be the smartest decision, but are not entirely sure. What will you decide?  ";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('grabArrow')");
			btn1.innerHTML = "Grab the Arrow";
			btn2 = document.createElement("BUTTON");
			btn2.setAttribute("onClick", "displayStory('lassoArrow')");
			btn2.innerHTML = "Lasso the Arrow";
			btn3 = document.createElement("BUTTON");
			btn3.setAttribute("onClick", "displayStory('helpFriend')");
			btn3.innerHTML = "Help your friend";
			btn4 = document.createElement("BUTTON");
			btn4.setAttribute("onClick", "displayStory('runAway')");
			btn4.innerHTML = "Look for other escape options";
			break;
			
			
case "grabArrow":
			story = "You lean over to grab the Silver Arrow, but a burning sensation rips through your body. You now realize that it is a plasma shield. You are DEAD. GAME OVER! Try again from the beginning when you are ready. ";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('gameOver')");
			btn1.innerHTML = "GAME OVER";
			break;
			
			
case "lassoArrow":
story = "You attempt to lasso the arrow with your rope. You are genuinely surprised when you grasp your target. The arrow is neatly surrounded by your rope. You pull it up and reach out to touch the Silver Arrow. Suddenly, your head is filled with a blinding pain. Sorry, the EMP fried your brain. GAME OVER! Try again from the beginning when you are ready. ";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('gameOver')");
			btn1.innerHTML = "GAME OVER";
			break;
			
			
case "helpFriend":
story = "You shake your head at the Silver Arrow and drop back down to the ground next to your companion. As soon as you reach out to touch their arm, a swirl surrounds you and you return to an appartment in New York City. All your memories are returned and you are glad to be back where you belong. Congratulations! YOU WIN!";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('youWin')");
			btn1.innerHTML = "YOU WIN";
			break;
			
			
case "runAway":
story = "You drop down to the ground and run past your injured companion. You head straight for the trees, but a swirl of darkness surrounds you. When you open your eyes, your worst nightmare has come true. You are back in the cave where you started.";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('beginning')");
			btn1.innerHTML = "Return to the cave";
			break;
			
			
case "gameOver":
	alert("Sorry, you chose wrong. You will have to be wiser next time.");
	break;
	
	
case"youWin":
	alert("Fantastic job! You won! You were honest, brave, and compassionate. You will make a great warrior someday.");
	break;
			
	} // end switch
	
	// change content on page
@@ -432,6 +425,8 @@ case "fightFuzzies":
    }
	document.getElementById("buttons").appendChild(btn1);
    document.getElementById("buttons").appendChild(btn2);
	document.getElementById("buttons").appendChild(btn3);
	document.getElementById("buttons").appendChild(btn4);
}
