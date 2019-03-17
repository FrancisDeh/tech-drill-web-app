
/*Screen Orientations*/
function welcomeScreen(){
	/*Hide Screen elements*/
	hideElements();


/*Display title and credential screen*/
showTitleBar()
showCredentialScreen();
showMusicIcon();

}
function optionScreen(){
	/*hide certain elements*/
	hideElements();
	/*Show Full name and options menu*/
	showFullName();
	/*Show options Menu*/
	showOptionsMenu();
	/*show back to first screen icon*/
	showBackToFirstScreenIcon();
}

/*Hide Elements Function*/

/*hide elements for option screen*/
function hideElements(){
	hideTitleBar();
	hideCredentialScreen();
	hideFullName();
	hideOptionsMenu();
	hideBackToFirstScreenIcon();
	hideBackToOptionScreenIcon();
	hideTutorialPanes();
	hideImageDisplayNav();
	hideFirstScene();
	hideSecondSceneUp();
	hideSecondSceneDown();
	hideThirdSceneUp();
	hideThirdSceneDown();
	hideMenuIconForImageSlide();
	hideInfoIcon();
	hideHandshakeIcon();
	hideScoreArena();
	hideExitScoreArenaIcon();
	hideCongratsMessage();
}

function hideBackToFirstScreenIcon(){
	$('.backToFirstScreenIcon').hide();
}
function hideBackToOptionScreenIcon(){
	$('.backToOptionScreenIcon').hide();
}

function hideMusicIcon(){
	$("#music_icon").hide();
}
function hideTitleBar(){
	$("#titleBar").hide();
}

function hideCredentialScreen(){
	$("#credentialScreen").hide();
}

function hideFullName(){
	$("#nameOfLearner").hide();
}

function hideOptionsMenu(){
	$('#outerWrapper').hide();
}

/*Function to hide two views; opiton menu and back icon*/
function hideTwoViews(){
	hideOptionsMenu();
	hideBackToFirstScreenIcon();
}

function hideTutorialPanes(){
	$('.navLeftInput').hide();
	$('.navRightOutput').hide();
}

function hideImageDisplayNav(){
	$('.navCenterDisplay').hide();
}

/*hide Image slide scenes*/
function hideFirstScene(){
	$('.firstLevelSceneItems').hide();

}
function hideSecondSceneUp(){
	$('.secondLevelSceneItemsUp').hide();
	
}
function hideSecondSceneDown(){
	$('.secondLevelSceneItemsDown').hide();
}
function hideThirdSceneUp(){
	$('.thirdLevelSceneItemsUp').hide();
	}
function hideThirdSceneDown(){
	$('.thirdLevelSceneItemsDown').hide();
}

/*Function to hide default image on Classroom
tutorial page*/
function hideDefaultClassroomImage(){
	$('.navCenterDisplay img').hide();
}

/*Function to hide menuIconForImageSlide*/
function hideMenuIconForImageSlide(){
	$('.menuIconForImageSlide').hide();
}

/*Function to hide info icon on slide page*/
function hideInfoIcon(){
	$('.gameInfo').hide();
}
/*function to hide handshake icon on game win*/
function hideHandshakeIcon(){
	$('.winGameDialog .fa').hide();
}
/*function to hide the score arena*/
function hideScoreArena(){
	$('.scoreArena').hide();

}

/*function to hide exitScore Arena icon*/
function hideExitScoreArenaIcon(){
	$('.exitScoreArena').hide();
}


/*function to hide congrats*/
function hideCongratsMessage(){
	$('.congrats').hide();
}

/*Show Elements Function*/
function showMusicIcon(){
	$("#music_icon").show('explode', 2000);
}
function showTitleBar(){
	$("#titleBar").show('drop', 2000).delay(1000);
}
function showCredentialScreen(){
	$("#credentialScreen").fadeIn(2000);
}
function showFullName(){
	$("#nameOfLearner").slideDown(2000).delay(1000);
}
function showOptionsMenu(){
	$('#outerWrapper').show('drop', 1000);

	/*pulsate the volume/music icon*/
	$('#music_icon').effect('pulsate', 3000);
}

function showBackToFirstScreenIcon(){
	$('.backToFirstScreenIcon').show('drop', 1000);
}
function showBackToOptionScreenIcon(){
	$('.backToOptionScreenIcon').show('drop', 1000);
}

/*function to show exitScoreArenaIcon*/
function showExitScoreArenaIcon(){
	$('.exitScoreArena').show('drop', 200);
}
/*function to show congrats message*/
function showCongratsMessage(){
	$('.congrats').show('explode',2000);
}

/*Audio Controls*/
function playBackgroundSound(){
	$("#audioBank").html('<audio src="audio/background.ogg" loop autoplay controls></audio>');
}

function stopBackgroundSound () {
	$("#audioBank").remove('<audio src="audio/background.ogg" loop autoplay></audio>');
}

function showTutorialPanes(){
	$('.navLeftInput').show('drop', 2000);
	$('.navRightOutput').show('drop', 2000);
}

function showImageDisplayNav(){
	$('.navCenterDisplay').show('explode', 500);
}
/*show class room defualt image function*/
function showDefaultClassroomImage(){
	$('.navCenterDisplay img').show('drop', 5000);
}

/*function to show menuIconForImageSlide*/
function showMenuIconForImageSlide(){
	$('.menuIconForImageSlide').show('drop', 1000);
}
/*function to show info icon for image slide*/
function showInfoIcon(){
	$('.gameInfo').show('drop', 1000);
}
/*function to show handshake icon on game win*/
function showHandshakeIcon(){
	$('.winGameDialog .fa').show('drop', 50);
}
/*Show image slide scenes at the appropriate
times*/
function showFirstScene(){
	$('.firstLevelSceneItems').show('drop', 2000);
}

function showSecondSceneUp(){
	$('.secondLevelSceneItemsUp').show('drop',2000);
	
}
function showSecondSceneDown(){
	$('.secondLevelSceneItemsDown').slideDown(2000);
}

function showThirdSceneUp(){
	$('.thirdLevelSceneItemsUp').show('drop',2000);
	
}
function showThirdSceneDown(){
	$('.thirdLevelSceneItemsDown').fadeIn(2000);
}

/*function to show score arena*/
function showScoreArena(){
	$('.scoreArena').slideDown(2000);
}

/*Function for back to first screen click*/
function onBackToFirstScreenIconClick(){
	/*hide current screen elements*/
	hideMusicIcon();
	hideOptionsMenu();
	hideBackToFirstScreenIcon();

	/*show welcome screen*/
	welcomeScreen();
}
/*Fucntion for backToOptionScreenIcon click*/
function onBackToOptionScreenIconClick(){
	/*hide current page elements*/
	hideBackToOptionScreenIcon();
	hideImageDisplayNav();
	hideTutorialPanes();
	/*display option menu screen*/
	showBackToFirstScreenIcon();
	showOptionsMenu();
	showMusicIcon();
}

/*function for on back from image slide click events*/
function onBackFromImageSlideQuiz(){
	/*hide the current screen*/
	hideFirstScene();
	hideSecondSceneUp();
	hideSecondSceneDown();
	hideThirdSceneUp();
	hideThirdSceneDown();//since we dont know the current scene
	/*hide the menu/window icon*/
	hideMenuIconForImageSlide();
	/*hide game description icon*/
	/*set score to inactive*/
	hideInfoIcon();
	$('#score').text('inactive');
	/*set level empty*/
	$('.levelWrapper').text('');

	/*show option screen*/
	showOptionsMenu();
	/*show back to first screen icon*/
	showBackToFirstScreenIcon();

}
/*functions to load various options selected by user*/

/*this function takes a number, representing the option menu
1. class room tutorial
2. image slide
3. quiz drill
this is done using the switch function */
function loadStudentSelectedScreen(option_number){
	/*hide option menu and back icon*/
	hideTwoViews();

	
	/*use the switch to determine which screen user wants to view*/
	switch(option_number){
		case 1:
			loadClassRoomTutorial();
			break;
		case 2:
			loadImageSlideLevel1();
			break;
		case 3:
			showScoreArena();
			showExitScoreArenaIcon();
			break;
		default:

	}

}

/*Functions to load particular screens*/

/*this function loads the interface*/
function loadClassRoomTutorial(){
	showTutorialPanes();
	showBackToOptionScreenIcon();
	showImageDisplayNav();
	/*show default classroom image*/
	showDefaultClassroomImage();
	/*automatically display an image from 
	the input device section*/
	$('.navLeftInput ul li a:first').click();
}
/*this function loads the interface*/
function loadImageSlideLevel1(){
	/*Load first Screen*/
	showFirstScene();
	/*show menu icon*/
	showMenuIconForImageSlide();
	/*show info icon*/
	showInfoIcon();
	/*set score from inactive to
	zero*/
	$('#score').text('0');
	/*Add a level Bar*/
	$('#nameOfLearner').append('<span class = "levelWrapper"><i class = "fa fa-thermometer-1 fa-1x"></i><span class = "level">Level 1 / 3</span></span>');

}

function loadReplayImageSlideLevel1(){
	/*this function is different from the "loadImageSlideLevel1" with one feature:
	this funcition will be called when user wants to replay the puzzle game, since there is an existing level icon and level, we would not add the level bar again. we will just set the level*/
	/*Load first Screen*/
	showFirstScene();
	/*show menu icon*/
	showMenuIconForImageSlide();
	/*show info icon*/
	showInfoIcon();
	/*set score from inactive to
	zero*/
	$('#score').text('0');
	/*Add a level*/
	setLevel('Level 1 / 3');

}

/*Image slide level two section a if user wins 
the first  level*/
function loadImageSlideLevel2a(){
	/*Hide Image Slide one*/
	hideFirstScene();
	/*set level*/
	
	
	setLevel('Level 2 / 3');
	/*Show image slide, first part*/
	showSecondSceneUp();
}

function loadImageSlideLevel2b(){
	/*hide section a*/
	hideSecondSceneUp();
	/*set level*/
	setLevel('Level 2 / 3');
	/*show second session*/
	showSecondSceneDown();
}

function loadImageSlideLevel3a(){
	/*hide second section*/
	hideSecondSceneDown();
	/*set level*/
	setLevel('Level 3 / 3');
	/*show third scene a*/
	showThirdSceneUp();
}

function loadImageSlideLevel3b(){
	/*hide third section a*/
	hideThirdSceneUp();
	/*set level*/	
	setLevel('Level 3 / 3');
	/*show last section*/
	showThirdSceneDown();
}

/*this function loads the interface*/
function loadQuiz(){

}

/*Function to set score*/
function setScore(score){
	$('#score').text(score);
}
/*function to set level*/
function setLevel(level){
	$('.level').text(level);
}

/*Function to enable sortables, this is invoked when user wants to play the puzzle game all over again*/

function activateAllSortables(){
/*call all activate function*/
activateFirstLevel();
activateSecondLevelUp();
activateSecondLevelDown();
activateThirdLevelUp();
activateThirdLevelDown();
}

/*function to activate individual sortables*/
function activateFirstLevel(){
	$('.firstLevelSceneImages').sortable('enable');
}

function activateSecondLevelUp(){
	$('.secondLevelSceneImagesUp').sortable('enable');
}
function activateSecondLevelDown(){
	$('.secondLevelSceneImagesDown').sortable('enable');
}

function activateThirdLevelUp(){
	$('.thirdLevelSceneImagesUp').sortable('enable');
}

function activateThirdLevelDown(){
	$('.thirdLevelSceneImagesDown').sortable('enable');
}

/*Function to shuffle all the images for a replay; this is so because, after a game is played, the images are well aligned, thus when a replay is requested, the images need to be reshuffled to their original state*/

function shuffleAllImages(){
shuffleFirstLevel();
shuffleSecondLevel();
shuffleThirdLevel();
}

/*function to shuffle individual level images*/
function shuffleFirstLevel(){
	$('.firstLevelSceneImages').html('<li id = "m"><img src = "images/Input/mouse_with_cord.png" height = "100%" width = "100%"></li><li id = "r"><img src = "images/Input/remote_control_b.png" height="100%" width="100%"></li><li id = "h"><img src="images/Output/headset.png" height="100%" width="100%"></li>');
}

function shuffleSecondLevel(){
	$('.secondLevelSceneImagesUp').html('<li id = "w"><img src="images/Output/digital_watch.jpg" height="100%" width="100%"></li><li id = "m"><img src="images/Input/wireless_mouse.png" height="100%" width="100%"></li><li id = "c"><img src="images/Input/webcam.png" height="100%" width="100%"></li>');

	$('.secondLevelSceneImagesDown').html('<li id = "s"><img src="images/Input/scanner.png" height="100%" width="100%"></li><li id = "p"><img src="images/Output/projector.jpg" height="100%" width="100%" ></li><li id = "r"><img src="images/Output/printer.png" height="100%" width="100%"></li>');
}

function shuffleThirdLevel(){
	$('.thirdLevelSceneImagesUp').html('<li id = "g"><img src="images/Input/gamepad.png" height="100%" width="100%"> </li><li id = "d"><img src="images/Input/digital_camera.jpg" height="100%" width="100%"></li><li id = "s"><img src="images/Output/speakers.jpg" height="100%" width="100%"> </li>');

	$('.thirdLevelSceneImagesDown').html('<li id = "b"><img src="images/Input/barcode_reader.png" height="100%" width="100%"></li><li id = "m"><img src="images/Input/microphone_b.jpg" height="100%" width="100%"></li><li id = "l"><img src="images/Output/lcd.jpg" height="100%" width="100%"></li>');
}

function prepareReplayPuzzleScreen(){
	/*when the Replay button is clicked;
	the following events will be executed
	a. hide current screen
	b. hide the icons
	c. remove level*/
	hideThirdSceneDown();
	hideInfoIcon();
	hideMenuIconForImageSlide();

}

/*function to define click action for score arena*/
function onExitScoreArenaIconClick(){
	/*hide the exit icon itself*/
	hideExitScoreArenaIcon();
	/*hide the score arena*/
	hideScoreArena();

	/*Show options Menu*/
	showOptionsMenu();
	/*show back to first screen icon*/
	showBackToFirstScreenIcon();

}