
var piece = document.querySelectorAll('.pieces');
var turn = true;
var count = 0;

for(var i = 0; i < piece.length; i++){
	piece[i].onclick = function(event){

		if(event.target.innerHTML == ""){
			if(turn){
				event.target.innerHTML = "o"
				turn = false;
				count++;
			} else {
				event.target.innerHTML = "x"
				turn = true;
				count++;
			}	
		} else {
			window.alert('Already has a piece! ');
		}
		checkWin()
		console.log(count)
	}
}
	function checkWin(){
	var tL = document.getElementById('topLeft');
	var tM = document.getElementById('topMiddle');
	var tR = document.getElementById('topRight')
	const topHorizontal = [tL.innerHTML, tM.innerHTML, tR.innerHTML];
	 const xWins = ["x","x","x"];
	 const oWins = ["o","o","o"];

	if(JSON.stringify(topHorizontal) == JSON.stringify(xWins)){
	 	window.alert("X wins!");
	 	window.location.replace('index.html')
	 	return
	}

	if(JSON.stringify(topHorizontal) == JSON.stringify(oWins)){
		window.alert("O wins!");
		window.location.replace('index.html')
		return
	}
	var mL = document.getElementById('middleLeft');
	var m = document.getElementById('middle');
	var mR = document.getElementById('middleRight')
	const middleHorizontal = [mL.innerHTML, m.innerHTML, mR.innerHTML];

	if(JSON.stringify(middleHorizontal) == JSON.stringify(xWins)){
		window.alert("X wins!");
		window.location.replace('index.html')
		return
}
	if(JSON.stringify(middleHorizontal) == JSON.stringify(oWins)){
		window.alert("O wins!");
		window.location.replace('index.html')
		return

	}
	var bL = document.getElementById('bottomLeft');
	var bM = document.getElementById('bottomMiddle');
	var bR = document.getElementById('bottomRight')
	const bottomHorizontal = [bL.innerHTML, bM.innerHTML, bR.innerHTML];

	if(JSON.stringify(bottomHorizontal) == JSON.stringify(xWins)){
		window.alert("X wins!");
		window.location.replace('index.html')
		return
}
	if(JSON.stringify(bottomHorizontal) == JSON.stringify(oWins)){
		window.alert("O wins!");
		window.location.replace('index.html')
		return

	}
	var tL2 = document.getElementById('topLeft');
	var mL2 = document.getElementById('middleLeft');
	var bL2 = document.getElementById('bottomLeft')
	const leftVertical = [tL2.innerHTML, mL2.innerHTML, bL2.innerHTML];

	if(JSON.stringify(leftVertical) == JSON.stringify(xWins)){
		window.alert("X wins!");
		window.location.replace('index.html')
		return
}
	if(JSON.stringify(leftVertical) == JSON.stringify(oWins)){
		window.alert("O wins!");
		window.location.replace('index.html')
		return

	}

	var tM2 = document.getElementById('topMiddle');
	var M = document.getElementById('middle');
	var bM2 = document.getElementById('bottomMiddle')
	const middleVertical = [tM2.innerHTML, M.innerHTML, bM2.innerHTML];

	if(JSON.stringify(middleVertical) == JSON.stringify(xWins)){
		window.alert("X wins!");
		window.location.replace('index.html')
		return
}
	if(JSON.stringify(middleVertical) == JSON.stringify(oWins)){
		window.alert("O wins!");
		window.location.replace('index.html')
		return

	}

	var tR2 = document.getElementById('topRight');
	var mR2 = document.getElementById('middleRight');
	var bR2 = document.getElementById('bottomRight')
	const rightVertical = [tR2.innerHTML, mR2.innerHTML, bR2.innerHTML];

	if(JSON.stringify(rightVertical) == JSON.stringify(xWins)){
		window.alert("X wins!");
		window.location.replace('index.html')
		return
}
	if(JSON.stringify(rightVertical) == JSON.stringify(oWins)){
		window.alert("O wins!");
		window.location.replace('index.html')
		return

	}

	var bL3 = document.getElementById('bottomLeft');
	var m2 = document.getElementById('middle');
	var tR3 = document.getElementById('topRight')
	const bltrDiagonal = [bL3.innerHTML, m2.innerHTML, tR3.innerHTML];

	if(JSON.stringify(bltrDiagonal) == JSON.stringify(xWins)){
		window.alert("X wins!");
		window.location.replace('index.html')
		return
}
	if(JSON.stringify(bltrDiagonal) == JSON.stringify(oWins)){
		window.alert("O wins!");
		window.location.replace('index.html')
		return

	}

	var bR3 = document.getElementById('bottomRight');
	var m3 = document.getElementById('middle');
	var tL3 = document.getElementById('topLeft')
	const brtlDiagonal = [bR3.innerHTML, m3.innerHTML, tL3.innerHTML];

	if(JSON.stringify(brtlDiagonal) == JSON.stringify(xWins)){
		window.alert("X wins!");
		window.location.replace('index.html')
		return
		console.log(count)
	
}
	if(JSON.stringify(brtlDiagonal) == JSON.stringify(oWins)){
		window.alert("O wins!");
		window.location.replace('index.html')
		return
		}
		if(count == 9){
			window.alert("It is a draw!");
			window.location.replace('index.html');
		}
	}

