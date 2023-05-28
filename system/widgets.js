/*

This is the JS file for the Windows widgets, which include
 - Run
 - About/WinVer

and also contains the Win95Emu Debug window.

WARNING: Requires, and must be loaded AFTER, win95.js

Widgets: unresizable windows that may or may not have a taskbar button and/or titlebar icon.

----

TODO: see if dynamically side-loading js files is possible (create a debug.js for the debug wizard)

remove classses in widgets.css

TODO: create widgetjs folder (or another name) and create a run.js inside it (and include it, ln 91)

fix window spawn positioning bug and get the 'open' and 'cancel' buttons to work on the run dialog

*/

$( document ).ready(function(){
	console.log("Widget Creation Syntax: makeWidget('Icon URL/False', 'Window Title', 'HTML', Taskbar Boolean, Minimize Boolean, Question Boolean, Center Boolean, Width, Height, 'Custom Class');");
});

function remapFolder(){
	//register apps for ids
	// 311 -->
	$( "#bang" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Win 3.11 Emu. Layer', 'https://archive.org/embed/win3_BANGBANG', true , true, 641, 565); });
	$( "#chess" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Win 3.11 Emu. Layer', 'https://archive.org/embed/win311_masque_chessnet', true , true, 641, 565); });
	$( "#freecell" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Win 3.11 Emu. Layer', 'https://archive.org/embed/win3_FreeCell', true , true, 641, 565); });
	$( "#hextris" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Win 3.11 Emu. Layer', 'https://archive.org/embed/win3_HEXTRIS', true , true, 641, 565); });
	$( "#hyperdroid" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Win 3.11 Emu. Layer', 'https://archive.org/embed/win3_Hyperoid', true , true, 641, 565); });
	$( "#mineswepper" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Win 3.11 Emu. Layer', 'https://archive.org/embed/win3_Mines', true , true, 641, 565); });
	
	$( "#missle_attackr" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Win 3.11 Emu. Layer', 'https://archive.org/embed/win3_MissileA', true , true, 641, 565); });
	$( "#monopoly_deluxe" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Win 3.11 Emu. Layer', 'https://archive.org/embed/win3_Mono3Dlx', true , true, 641, 565); });
	$( "#reversi" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Win 3.11 Emu. Layer', 'https://archive.org/embed/win3_REVERSI', true , true, 641, 565); });
	$( "#mtetris" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Tetris for Windows', 'https://archive.org/embed/TETRIS_201612', true , true, 690, 565); });
	$( "#risk" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Win 3.11 Emu. Layer', 'https://archive.org/embed/win3_RISK100', true , true, 641, 565); });
	$( "#simearth" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Win 3.11 Emu. Layer', 'https://archive.org/embed/win3_SIMEARTH', true , true, 641, 565); });
	$( "#tdk_pinball" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Win 3.11 Emu. Layer', 'https://archive.org/embed/win3_TDKPinba', true , true, 641, 565); });
	$( "#winski" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Win 3.11 Emu. Layer', 'https://archive.org/embed/win3_WINSKI', true , true, 641, 565); });
	$( "#cw" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp; Castle of the Winds', 'https://archive.org/embed/win3_CasWin1', true , true, 641, 565); });
	
	//95
	$( "#quake" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Quake I (Boomer edition)', 'https://quake1.ru/', true , true, 1034, 798); });
	//$( "#quake3mp" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Quake III Arena (Multiplayer Server)', 'http://www.quakejs.com/play?connect%2034.107.80.109:27960', true , true, 1034, 798); });
	//$( "#quake3sp" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Quake III Arena', 'http://www.quakejs.com/play', true , true, 1034, 798); });
	$( "#doom3" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Doom 3 SP Demo', './iframe/311_legacy/games/doom3.html', true , true, 1034, 780); });
	$( "#lf2" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Little Fighter 2', 'https://project-f.github.io/F.LF/game/game.html', true , true, 641, 484); });
	$( "#diablo" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Diablo', 'https://d07riv.github.io/diabloweb/', true , true, 775, 600); });
	$( "#cs16" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Counter-Strike 1.6', 'https://play-cs.com', true , true, 1034, 798); });
	$( "#hl" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Half-Life', 'https://emupedia.net/emupedia-game-half-life1/', true , true, 641, 484); });
	$( "#ut" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Unreal Tournament', 'https://emupedia.net/emupedia-game-unreal-tournament/', true , true, 1034, 798); });
	$( "#hex2" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Hexen 2', 'https://emupedia.net/emupedia-game-hexen2/', true , true, 1034, 798); });
	$( "#mbg" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Marble Blast', 'https://marbleblast.vani.ga/', true , true, 1034, 798); });
	$( "#tbr" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Tomb Raider', 'https://emupedia.net/emupedia-game-tomb-raider/', true , true, 1034, 798); });
	$( "#pv" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Pikachu Volleyball', 'https://emupedia.net/emupedia-game-pikachu-volleyball/', true , true, 641, 484); });
	$( "#msp" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp;Minesweeper', 'https://emupedia.net/emupedia-game-minesweeper/', true , true, 641, 484); });
		
		
	//DOS
	$( "#doom1" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp; Doom', 'https://emupedia.net/emupedia-game-doom1/', true , true, 740, 480); });
	$( "#doom2" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp; Doom', 'https://emupedia.net/emupedia-game-doom2/', true , true, 740, 480); });
  $( "#wf3d" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp; Wolfenstein 3D', 'https://archive.org/embed/msdos_Wolfenstein_3D_1992', true , true, 641, 565); });
  $( "#simc" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp; SimCity', 'https://archive.org/embed/msdos_SimCity_1989', true , true, 641, 565); });
  $( "#pop2" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp; Populous II', 'https://archive.org/details/msdos_Populous_II_-_Trials_of_the_Olympian_Gods_1993', true , true, 641, 565); });


  //OTHER
  $( "#lunarlander" ).dblclick(function() { makeWindow('system/icons/default16.PNG', '&nbsp; Lunar Lander (1979)', 'http://moonlander.seb.ly', true , true, 1034, 798); });

}

function makeWidget(icon, title, html, taskbar, min, ques, center, wid, hei, cusClass) { /* IT WORKS!!! What's the catch? */
	window_set++;
	// Add titlebar height to window height
	var winHeight = hei + titbHeight;
	// split window HTML into sections to allow concatenation
	if(cusClass != false) { // custom class
		var sec1 = '<div class="win_drag win_widget nores ' + cusClass + '" id="window_';
	} else { // no custom class
		var sec1 = '<div class="win_window nores" id="window_';
	}
	var sec2 = '" style="width: ' + wid + 'px; height: ' + winHeight + 'px;"';
	var sec3 = '><div class="win_titlebar win_titb_active nores" id="win_titb_';
	if(icon == false) { // no icon (default)
		var sec4 = '">';
		var sec5 = '<div class="win_titb_text win_titb_text_noicon">';
	} else { // icon present
		var sec4 = '"><div class="win_titb_icon"><img src="';
		var sec5 = '" onerror="this.src = defaultImage"></div><div class="win_titb_text">';
	}
	var sec6 = '</div><div class="win_titb_controls" id="win_windc_'
	// determine Window control type
	if(min == true) {
		// minimize shown
		var sec7 = '"><img src="system/win_controls/min.png" class="win_titb_min" id"_"><img src="system/win_controls/max_disabled.png" class="win_titb_max_dis" id"_"><img src="system/win_controls/close.png" class="win_titb_close" id"_"></div></div>';
	} else {
		if(ques != true) { // No Question Mark
			var sec7 = '"><img src="system/win_controls/close.png" class="win_titb_close" id"_"></div></div>';
		} else { // Question Mark Present
			var sec7 = '"><img src="system/win_controls/question.png" class="win_titb_question" id"_"><img src="system/win_controls/close.png" class="win_titb_close" id"_"></div></div>';
		}
	}
	// merge strings into one variable for insertion into DOM
	if(icon == false) { // prevents "false" boolean from being inserted into page
		var insertHTML = sec1 + window_set + sec2 + window_set + sec3 + window_set + sec4 + sec5 + title + sec6 + window_set + sec7;
	} else {
		var insertHTML = sec1 + window_set + sec2 + window_set + sec3 + window_set + sec4 + icon + sec5 + title + sec6 + window_set + sec7;
	}
	// SET UP HTML TARGET DIV
	var htmlTarget = '<div class="win_widget_htmltarget" style="height: ' + hei + 'px;">' + html + '</div></div>';
		
	var finalHTML = insertHTML + htmlTarget;
	$( '#win_placeholder' ).after( finalHTML );
	var window_id = '#window_' + window_set; // gets the ID of current window
	var titlebar_id = '#win_titb_' + window_set; // window id in titlebar format
	// window active/inactive classes
	$( '.win_window').removeClass( 'win_window_active' );
	$( '.win_window').addClass( 'win_window_inactive' );
	$( window_id ).removeClass('win_window_inactive');
	$( window_id ).addClass('win_window_active');
	// titlebar active/inactive classes
	$( '.win_titlebar').removeClass( 'win_titb_active' );
	$( '.win_titlebar').addClass( 'win_titb_inactive' );
	$( titlebar_id ).removeClass('win_titb_inactive');
	$( titlebar_id ).addClass('win_titb_active');
	if(taskbar != false) {
		addTaskbar(window_set, icon, title);
	}
	//return window_set;
	if(center == true) {
		windowCenter(window_set);
	}
	remapFolder();
}

function run(start) { // the run box
	// toggle Start menu if launched from there
	if(start == true) {
		$( "#win_start" ).toggle(0, function(){
			$( ".win_titlebar" ).toggleClass( "win_titb_start" );
			$( ".win_tb_button" ).toggleClass( "win_tb_button_start" );
			$( "#win_start_button" ).toggleClass( "win_start_button_depressed" );
		});
	}
	// add in the run.js include into <head>
	var runJsLink = $("<script src='system/widgetjs/run.js'>");
    $("head").append(runJsLink);
	//html code below
	var sec1 = '<div class="win_wid_run_tgt"></div><div id="win_wid_run_container"> <div id="win_wid_run_icondiv"> <img src="system/images/run_icon.png"> ';
	var sec2 = '</div> <p id="win_wid_run_text"> Type the name of a program, folder, or document, and<br> ';
	var sec3 = 'Windows will open it for you. </p> <p id="win_wid_run_opent"> <span class="win_underline">O';
	var sec4 = '</span>pen: </p> <input type="text" id="win_wid_run_input" autofocus> <button id="win_wid_run_obutton" onClick="runOK()" disabled autofocus>';
	var sec5 = 'OK</button> <button class="win_wid_run_cbutton" id="test" onClick="runCancel()">Cancel</button> <button class="win_wid_run_bbutton" onClick="runBrowse()">';
	var sec6 = 'Browse...</button> </div>';
	var widgetHTML = sec1 + sec2 + sec3 + sec4 + sec5 + sec6; // combine html code
	// time to make the widgets...
	makeWidget(false, 'Run', widgetHTML, false, false, false, false, 340, 140, 'win_wid_run_dialog');
	$( '#win_wid_run_input' ).focus();
	// set "open" button active and inactive based on input value
	$( '#win_wid_run_input' ).on('input', function() {
		var tbVal = $( '#win_wid_run_input' ).val();
		if(tbVal.length > 0) { // input != empty
			$( '#win_wid_run_obutton' ).removeAttr('disabled');
		} else { // input is empty
			$( '#win_wid_run_obutton' ).prop('disabled', true);
		}
	});
}
function runOK() {
	var boxVal = $( "#win_wid_run_input" ).val();
	aliasRun(boxVal); // sends the input to the alias => JS function (run.js)
	runClose();
}
function runCancel() {
	runClose();
}
function runBrowse() {
	// this is just a placeholder for if/when we can browse for "executables"
}
function runClose() {
	// get the grandparent of the placeholder div (aka: win_window)
	var win_id = $( ".win_wid_run_tgt" ).parent().parent().attr('id');
	// start refining the window_id retrieved above and execute windowClose()
	var win_id_splt = win_id.split("_");
	var win_num = win_id_splt[1];
	windowClose(win_num);
}
/* WINVER DIALOG FUNCTION */
function winverStart() {
	var html1 = '<div class="win_wid_winver_tgt"></div><div id="win_wid_winver_container">';
	var html2 = '<span id="win_wid_winver_name" class="win_wid_winver_text">Windows 95</span>';
	var html3 = '<img id="win_wid_winver_icon" src="system/images/winver_logo.png">';
	var html4 = '<span id="win_wid_winver_copy" class="win_wid_winver_text">Copyright &copy; 1981-1995, Microsoft Corp.</span>';
	var html5 = '<button id="win_wid_winver_ok" onclick="closeWinver()">OK</button></div>';
	var winverHTML = html1 + html2 + html3 + html4 + html5;
	makeWidget(false, "Windows", winverHTML, true, false, false, true, 300, 130, "win_wid_winver_dialog");
}
function closeWinver() {
	// get the grandparent of the placeholder div (aka: win_window)
	var win_id = $( ".win_wid_winver_tgt" ).parent().parent().attr('id');
	// start refining the window_id retrieved above and execute windowClose()
	var win_id_splt = win_id.split("_");
	var win_num = win_id_splt[1];
	windowClose(win_num);
}

// ERROR MESSAGE FUNCTION
function windowsError(icon, title, msg) {
	if (icon == 1) {
		var iconURL = "icons/dialogs/error.png";
	}
	var sec1 = '<div class="win_wid_error_tgt"></div><div class="win_wid_error_container">';
	var sec2 = '<div class="win_wid_error_concont"><div class="win_wid_error_icondiv"><img src="';
	// icon img url
	var sec3 = '" class="win_wid_error_icon"></div><p class="win_wid_error_text">';
	// message text
	var sec4 = '</p></div><p class="win_wid_error_buttoncont">';
	var sec5 = '<button class="win_wid_error_close" onclick="errorClose()">OK</button></p></div>';
	var errorHTML = sec1 + sec2 + iconURL + sec3 + msg + sec4 + sec5;
	makeWidget(false, title, errorHTML, false, false, false, true, 340, 140, "win_wid_error_dialog");
}
function errorClose() {
	var win_id = $( ".win_wid_error_tgt" ).parent().parent().attr('id');
	// start refining the window_id retrieved above and execute windowClose()
	var win_id_splt = win_id.split("_");
	var win_num = win_id_splt[1];
	windowClose(win_num);
}