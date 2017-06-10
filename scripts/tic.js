$(document).ready(function($) {
	var globals = {};
	//var aiPlayer = new AI('blind');
	//var aiPlayer = new AI('master');
	var aiPlayer = new AI('novice');
    globals.game = new Game(aiPlayer);
    aiPlayer.plays(globals.game);
    globals.game.start();



	$('.innersquare').on('click', function(event) {
		var innersquare = $(this);
		//var topLeftAcross = $('.topLeftAcross');
		//topLeftAcross.toggleClass("strike-show");
		//squareSelected.find('.innersquare').toggleClass("xImage");
		var squareSelected = innersquare.parent(".square");

		if(globals.game.status === "running" && globals.game.currentState.turn === "X" && !squareSelected.hasClass('occupied')) {
             var indx = parseInt(squareSelected.data("indx"));
             var next = new State(globals.game.currentState);
             next.board[indx] = "X";

             ui.insertAt(indx, "X");

             next.advanceTurn();

             globals.game.advanceTo(next);
         }
	});
});