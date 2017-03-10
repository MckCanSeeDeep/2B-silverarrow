
// JavaScript Document
//Use for storylines
//Introduction
	
	
	/* OLD CODE	
		
		if(choice == "First door")
			story = "You turn the mahogany handle of the door. You emerge on a hill surrounded by rolling fields. Down the hill, peasants drenched in sweat and dressed in faded rags labor away, picking some kind of pale blue cotton. Cruel-faced supervisors pace behind them, watching their work and carrying sharp-looking batons. You walk down the hill, hoping that your own tattered clothes will blend in with theirs. You come to an area where no supervisors seem to be watching. ";
			case "sword":
					document.getElementById("story").innerHTML = "You chose the SWORD. Their eyes follow you with skepticism and caution, but they do not seem to be hostile. Some of them notice the sword in your belt and narrow their eyes, but they continue their work. When the supervisor begins to yell at the quiet young woman next to you, and begins threatening her, what do you do?";
				// change buttons
					btn1 = document.createElement("BUTTON");
					btn1.setAttribute("onClick", "changeDisplay('Stand up for her')");
					btn1.innerHTML = "The supervisor flings his knife at you in anger. Quickly thinking, you dart to the side and catch it. You run to a building in the distance, and foolishly promise to come back for the other workers.";
					btn2 = document.createElement("BUTTON");
					btn2.setAttribute("onClick", "changeDisplay('Keep your head down')");
					btn2.innerHTML = "The supervisor notices the sword you hid in the reeds and pulls out his bow and arrow. He brings back the bowstring and releases before you can react. You're DEAD.";
					// you could add as many buttons as you needed here:
					document.getElementById("buttons").innerHTML = btn1 + btn2;
				break;
			
			case "bread":
				document.getElementById("story").innerHTML = "You chose the BREAD. The people have hunger-hollowed cheeks, so you give them some of your bread. They immediately trust you, and allow you to work beside them and hide yourself. The few people near you now trust you, and they decide to help conceal you. The supervisor arrives to monitor your laboring progress and begins taunting those beside you. Will you stand up to the supervisor or make friends with him?";
			
					btn1 = document.createElement("BUTTON");
					
						btn1.setAttribute("onClick", "changeDisplay('Stand up to supervisor')");
						btn1.innerHTML = "The taunts that the supervisor shoots at the laborers anger you. You stand up and he narrows his eyes at you. For a brief moment, you glare at each other. Suddenly, all you can see is the glint of his sword in the sunlight and then....darkness. sorry, you're DEAD!";
					
					btn2 = document.createElement("BUTTON");
						btn2.setAttribute("onClick", "changeDisplay('Make friends with the supervisor')");
						btn2.innerHTML = "Quickly thinking, you crack a funny joke at the supervisor. He looks at you blankly for a moment, but then his dark bearded face stretches into a smile. He pats your back and tells you that he will help you, sending you to a building in the distance.";
					
			
		
		if(choice == "Second door")
		case "bread":
				document.getElementById("story").innerHTML="You use the end of your shirt to turn the knob, as it is too hot. You enter a dark forest of fire-blackened trees. The sky is so full of smog that it has a grayish tinge and it is impossible to tell whether it is day or night. The only light in the vicinity comes from the dim glow of flames licking at the trees. The faint howling of wolves can be heard in the distance, miles away. After a moment you realize the howls are getting louder and louder. Suddenly, a gray blur leaps out of the shadowy trees. Several more gray blurs follow it. You try to feed the bread to the wolves but your are in vain. The wolves lunge and pin you to the ground. The last thing you hear before the darkness consumes you is their howls. Sorry, you're DEAD!";
				
		case "sword":
			document.getElementById("story").innerHTML="You use the end of your shirt to turn the knob, as it is too hot. You enter a dark forest of fire-blackened trees. The sky is so full of smog that it has a grayish tinge and it is impossible to tell whether it is day or night. The only light in the vicinity comes from the dim glow of flames licking at the trees. The faint howling of wolves can be heard in the distance, miles away. After a moment you realize the howls are getting louder and louder. Suddenly, a gray blur leaps out of the shadowy trees. Several more gray blurs follow it. Since you chose the SWORD, you are able to fend off the wolves. However, there are too many of them. You desperately sprint off into the trees and see two options. You can either run for a rusty door covered in ivy, or climb a tree.";
				// change buttons
					btn1 = document.createElement("BUTTON");
					btn1.setAttribute("onClick", "changeDisplay('Climb a tree')");
					btn1.innerHTML = "You foolishly attempt to scramble up a tree but the wolves are close at your heels. They drag you back down.....and pounce. Sorry, you're DEAD!";
					
					btn2 = document.createElement("BUTTON");
					btn2.setAttribute("onClick", "changeDisplay('Run for the door')");
					btn2.innerHTML = "You manage to make it to the door and close it firmly behind you. You are now in a dark building";
					// you could add as many buttons as you needed here:
					document.getElementById("buttons").innerHTML = btn1 + btn2;
				break;
			
		// Alec or Violet
		
		document.getElementById("story").innerHTML = "The building is built like a warehouse, with strange black pipes running along the ceiling and the faint hum of generators in the background. ";
			
		document.getElementById("story").innerHTML = "Suddenly, you hear a sound in the distance: It is like hundreds of footsteps in unison. You begin to run, and come across a hallway in which there are two arguing people standing several yards apart. They seem to not know each other very well. They see you. The raven haired, violet-eyed girl turns and says, 'Come with me if you want to live!' The cocky, brown-haired boy says, 'Don't go with her. She'll kill you before the others do.' The boy wears a strange uniform and the nametag reads 'Alec'. The girl has a necklace with dark gems spelling out 'Violet'.";
		
	function displayStory(choice) {
	switch(choice) {
		
			if(choice == "Alec")
			document.getElementById("story").innerHTML = "Suddenly, you hear a huge crash. The footstepts of the soldiers are getting closer. Alec's eyes widen in fear. He is vulnerable. Do you run away with him or knock him out for the soldiers to find so you can escape?"
						function displayStory(choice) {
								switch(choice) {
											if(choice == "Run together")
			
			if(choice == "Violet")
			document.getElementById("story").innerHTML = ""
			
			
			
			// copy code from above and adjust
		//case "east":
			// copy code from above and adjust
		//case "west":
			// copy code from above and adjust
	}
	*/

var bread = false;
var sword = false;
function displayStory(choice) {
	var story = "";
	var btn1 = "";
	var btn2 = "";
	switch(choice) {
		
//Door 1 or 2

case "bread/sword":
			story = "You wake up in a dark, dreary cave. You have no memory of your previous life, and the only thing in your mind is the echo of water dripping from the ceiling. You grab a backpack that sits in front of you on the cave floor. You have a pocket knife, some rope, dried fruit that won't last long, a water bottle half-full, and a jagged rock. You see two things in the cave: A sword and a package of bread. Which do you take? Only one will fit in your backpack.";
 			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('bread')");
			btn1.innerHTML = ("continue your journey.....");
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
				btn1.setAttribute("onClick", "displayStory('makeFriends')");
				btn1.innerHTML = "Make friends";
				btn2 = document.createElement("BUTTON");
				btn2.setAttribute("onClick", "displayStory('standUpToSupervisor')");
				btn2.innerHTML = "Stand up to the supervisor";
				//image = "";
			}
			if(sword) {
				story = "You turn the mahogany handle of the door. You emerge on a hill surrounded by rolling fields. Down the hill, peasants drenched in sweat and dressed in faded rags labor away, picking some kind of pale blue cotton. Cruel-faced supervisors pace behind them, watching their work and carrying sharp-looking batons. You walk down the hill, hoping that your own tattered clothes will blend in with theirs. You come to an area where no supervisors seem to be watching. You chose the BREAD. The people have hunger-hollowed cheeks, so you give them some of your bread. They immediately trust you, and allow you to work beside them and hide yourself. The few people near you now trust you, and they decide to help conceal you. The supervisor arrives to monitor your laboring progress and begins taunting those beside you. Will you stand up to the supervisor or keep your head down and continue working?";
				btn1 = document.createElement("BUTTON");
				btn1.setAttribute("onClick", "displayStory('keepHeadDown')");
				btn1.innerHTML = "Keep Head Down";
				btn2 = document.createElement("BUTTON");
				btn2.setAttribute("onClick", "displayStory('standUp')");
				btn2.innerHTML = "Stand up to the supervisor";
				//image = "";
			}
			break;
			
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
			story ="You use the end of your shirt to turn the knob, as it is too hot. You enter a dark forest of fire-blackened trees. The sky is so full of smog that it has a grayish tinge and it is impossible to tell whether it is day or night. The only light in the vicinity comes from the dim glow of flames licking at the trees. The faint howling of wolves can be heard in the distance, miles away. After a moment you realize the howls are getting louder and louder. Suddenly, a gray blur leaps out of the shadowy trees. Several more gray blurs follow it. You try to feed the bread to the wolves but your are in vain. The wolves lunge and pin you to the ground. The last thing you hear before the darkness consumes you is their howls. Sorry, you're DEAD!";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('Checkpoint1')");
			btn1.innerHTML = "Try again from the last CHECKPOINT";
			}
//door 2 (sword)
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
			story = "You attempt to scramble up the tree, and feel the wolves' hot breath on your heels. You grab at a branch, but it breaks in your hand. You fall to the ground and are winded as your back crashes into the leaves. The wolves growl and pounce at you. Sorry, you're DEAD!";
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
			
case "Checkpoint2":		
case "continue":
story = "As you sneak through the building, wondering if it is inhabited, you hear a chorus of thousands of footsteps. You begin to run, and come to a supply room with an opened door. Your go inside and there is an exit on either side of you. A figure runs in from each side. One is a violet-eyed girl with a long sheet of dark hair. The other is a confident-looking, brown-haired youth. Both yell for you to come with them if you want to live. Who will be your companion? Choose wisely.";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('Alec')");
			btn1.innerHTML = "The brown haired warrior";
			btn2 = document.createElement("BUTTON");
			btn2.setAttribute("onClick", "displayStory('Violet')");
			btn2.innerHTML = "The violet eyed girl";
			break;
			
case "Checkpoint3":		
case "Alec":
			story="You run towards the brown haired boy, happy to be heading away from the increasingly loud footsteps. He introduces himself as Alec, and drags you to a door that you never would have noticed if you were on your own. it was a wise decision to choose him. As you slide through the door, you realize that the footsteps have become quieter. Alec stumbles over a pipe. As you help him up, you hear a large crash nearby. Do you choose to run after Alec, or do you you knock him out and leave him behind for whatever caused the sound?";
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
			story="You follow Alec through a maze of doorways and thank him when he grabs your arm to stop you from falling into a vat of boiling oil. You run for what seems like hours, and finally slow to a walk. It seems as though there is no way to escape the building. You hear a low, raspy voice say 'The Silver Arrow is near. Once it is found, we will at last have a purpose.' It is a man wearing a black hood speaking to another short man with scars covering his bald head. He appears to have a weapon. Do you stay to fight him, or do you hide?";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('fightHood')");
			btn1.innerHTML = "Fight";
			btn2 = document.createElement("BUTTON");
			btn2.setAttribute("onClick", "displayStory('hideFromHood')");
			btn2.innerHTML = "Hide";
			break;
			
case "fightHood":
	story="You and Alec circle around the figure. Suddenly, you feel an invisible force pressing on your neck. In a few minutes, your vision fades to black. Sorry, you're DEAD!";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('Checkpoint3')");
			btn1.innerHTML = "Try again from the last checkpoint";
			break;
			
case "Checkpoint4":			
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
		story = "You grab a knife from your belt and raise it threateningly. You demand that he explain about the silver arrow, but he sighs and relents.";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('Checkpoint5')");
			btn1.innerHTML = "Acquire Information";
		// ACHIEVEMENT KNOWLEDGE ACQUIRED
			break;	
			
case "convinceAlec":
		story  = "You compel Alec to tell you about the Silver Arrow by bringing out your persuasive skills. You say, 'I deserve to know what's going on.' He stares at you for a while and then gives in.";
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
			story = "";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('Checkpoint2')");
			btn1.innerHTML = "Try again from the last checkpoint";
			break;
			
case "stayStill":
			story = "You keep yourself still and try not to breathe. Violet is deadly silent, her eyes squeezed tightly shut. Once the thunderous footsteps and voices fade, Violet sighs in relief. 'Thanks for trusting me. You would've died otherwise.'";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('setUpCamp')");
			btn1.innerHTML = "Set up camp";
			break;
	
			
case "setUpCamp":
			story = "You and Violet follow a maze of hallways before stopping at a small corner isolated from the rest of the building. She opens her backpack and shares some of her supplies with you. Suddenly, you hear the sound of footsteps drawing near. Violet wraps her hand against your mouth to muffle your surprise. The footsteps stop closeby and the voices seem to be whispering about a mysterious object called the silver arrow. 'It is almost time. The silver arrow is near and once we have aqquired it, we will have a purpose at last.' The footsteps recede and you look at Violet questioningly. She sighs, looks at the ground. ";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('Checkpoint5')");
			btn1.innerHTML = "Acquire Information";
			break;
	
			
case "Checkpoint5":
			story = "'It's time I told you what I know'. What do you want to know first?";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('howDidIGetHere')");
			btn1.innerHTML = "How did I get here?";
			btn2 = document.createElement("BUTTON");
			btn2.setAttribute("onClick", "displayStory('whatIsTheSilverArrow')");
			btn2.innerHTML = "What is the Silver Arrow?";
			break; 
			
case "howDidIGetHere":
			story = "'Your companion starts to explain. 'So this is basically a realm created by the leaders of a promindent buisness empire. It's pretty mcuh a compilation of virtual reality and the perception of people in the real world. You probably came here after a queer business seminar like all of the other people in this world. Moral of the story: Don't drink the Kool-Aid. As for the Silver Arrow, It's more of a phenomenon than a tangible object. Its rumored to be some kind of EMP that fries the technology imprisoning your brain. We need it to get out of here. We should rest so we have a better chance of finding it.' ";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory(rest')");
			btn1.innerHTML = "Rest and prepare for the journey to come";
			break; 
			
case "whatIsTheSilverArrow":
			story = "'It's more of a phenomenon than a tangible object. Its rumored to be some kind of EMP that fries the technology imprisoning your brain. We need it to get out of here. We should rest so we have a better chance of finding it. And as for how you got here, this is basically a realm created by the leaders of a promindent buisness empire. It's pretty mcuh a compilation of virtual reality and the perception of people in the real world. You probably came here after a queer business seminar like all of the other people in this world. Moral of the story: Don't drink the Kool-Aid.' ";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('rest')");
			btn1.innerHTML = "Rest and prepare for the journey to come";
			break; 
			
/*case "rest":
			story = "You and you're companion rest in your secluded corner, discussing your game plan for the next day. You feel confident about the plan, but forget about that as the darkness of sleep envelops you.";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('continueAgain')");
			btn1.innerHTML = "Continue";
			break; 
			
case "continueAgain":
			story = "You wake up to the sound of your companion rifling through your supplies for the day. You start to pack as well, and decide that you will be heading out in a few moments. As you leave the building you are faced with a broken wooden fence and a white picket fence. Which will you choose?";
			btn1 = document.createElement("BUTTON");
			btn1.setAttribute("onClick", "displayStory('brokenFence')");
			btn1.innerHTML = "Broken Fence";
			btn2 = document.createElement("BUTTON");
			btn2.setAttribute("onClick", "displayStory('whitePicketFence')");
			btn2.innerHTML = "White Picket Fence";
			break;
		
	*/
	
	} // end switch
	
	// change content on page
	document.getElementById("story").innerHTML = story;
    var buttons = document.getElementById("buttons");
    while (buttons.firstChild) {
      buttons.removeChild(buttons.firstChild);
    }
	document.getElementById("buttons").appendChild(btn1);
    document.getElementById("buttons").appendChild(btn2);
}

		