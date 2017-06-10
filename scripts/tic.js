$(document).ready(function($) {
	var globals = {
		resetGame : function(){
			$( ".square" ).each(function() {
				
				if($(this).hasClass('occupied')){
					$(this).removeClass('occupied');
				}
				if($(this).find('.innersquare').hasClass("oImage")){
                	$(this).find('.innersquare').removeClass('oImage');
	            }
	            if($(this).find('.innersquare').hasClass("xImage")){
	                	$(this).find('.innersquare').removeClass('xImage');
	            }

	           	if($('.end-strike').hasClass("strike-show")){
	                	$('.end-strike').removeClass('strike-show');
	            }
	            if($('.end-strike').hasClass("strike-show-left")){
	                	$('.end-strike').removeClass('strike-show-left');
	            }
	           	if($('.end-strike').hasClass("strike-show-right")){
	                	$('.end-strike').removeClass('strike-show-right');
	            }
			});
		}
	};
	//var aiPlayer = new AI('blind');
	//var aiPlayer = new AI('master');
	
    globals.isStarting = false;

	$('.innersquare').on('click', function(event) {

		if(!globals.isStarting)
			return;

		var innersquare = $(this);
		var topLeftAcross = $('.topleftDown');
		topLeftAcross.toggleClass("strike-show");
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

	$('.start').on('click', function(event) {
		globals.isStarting = true;
		globals.resetGame();
		var aiPlayer = new AI('blind');
	    globals.game = new Game(aiPlayer);
	    aiPlayer.plays(globals.game);
	    globals.game.start();
	});


});