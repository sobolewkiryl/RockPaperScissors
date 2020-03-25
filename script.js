let items = document.querySelectorAll('img');

let secondBoard = document.querySelector('#second');

let clickedAttribute;

let clickedIndex;

let mozna;

let rivals = [];

rivals[0] = {
	
	source: "images/nozyczki.jpg",
	name: 'nozyczki'
	
}
rivals[1] = {
	
	source: "images/paper.jpg",
	name: 'papier'
	
}
rivals[2] = {
	
	source: "images/stone.jpeg",
	name: 'kamien'
	
}

rivals[0] > rivals[1];

	
	let drawed = rivals[Math.floor(rivals.length * Math.random())];
	
	let drawedSrc = drawed.source;

	for(let i = 0;i<items.length;i++){
		
	items[i].addEventListener('click',function(){
		
		    clickedAttribute = items[i].getAttribute('src');
			
			clickedIndex = i;
			
			secondBoard.style.display = 'block';
			
			let executed = false;
			
			if(!executed){
				
				executed = true;
				
				console.log(clickedAttribute);
				
				fillSecondBoard('left',clickedAttribute);
				
				setTimeout(comparison(),5000);
				
			}
 		
		})
		
	}
	
	let leftTopSide = document.getElementById('left-top');
	
	let rightTopSide = document.getElementById('right-top');
	
let fillSecondBoard = (function(){
				
				return function(side,attribute){
						
						let sid = document.getElementById(side),
	  
	                    img = document.createElement('img');
	  
	                    img.src = attribute;
	  
	                    sid.appendChild(img);
							
				}
})();

console.log(drawedSrc);

fillSecondBoard('right', drawedSrc);

fillSecondBoard('mid','images/vs1.png');

let imageCrown = 'images/crown1.png';

function comparison(){
	
	//comparison for stone
	
	if(clickedAttribute == 'images/stone.jpeg' && drawedSrc == 'images/paper.jpg'){
		
		fillSecondBoard('right-top' , imageCrown);
		
	}else if(clickedAttribute == 'images/stone.jpeg' && drawedSrc == 'images/nozyczki.jpg'){
		
		fillSecondBoard('left-top' , imageCrown);
		
	}else if(clickedAttribute == 'images/stone.jpeg' && drawedSrc == 'images/stone.jpeg'){
		
		fillSecondBoard('left-top' , imageCrown);
		fillSecondBoard('right-top' , imageCrown);
		
	}
	
	//comparison for paper
	
		if(clickedAttribute == 'images/paper.jpg' && drawedSrc == 'images/stone.jpeg'){
		
		fillSecondBoard('left-top' , imageCrown);
		
	}else if(clickedAttribute == 'images/paper.jpg' && drawedSrc == 'images/nozyczki.jpg'){
		
		fillSecondBoard('right-top' , imageCrown);
		
	}else if(clickedAttribute == 'images/paper.jpg' && drawedSrc == 'images/paper.jpg'){
		
		fillSecondBoard('left-top' , imageCrown);
		fillSecondBoard('right-top' , imageCrown);
		
	}
	
	//comparison for scissors
	
	if(clickedAttribute == 'images/nozyczki.jpg' && drawedSrc == 'images/stone.jpeg'){
		
		fillSecondBoard('right-top' , imageCrown);
		
	}else if(clickedAttribute == 'images/nozyczki.jpg' && drawedSrc == 'images/paper.jpg'){
		
		fillSecondBoard('left-top' , imageCrown);
		
	}else if(clickedAttribute == 'images/nozyczki.jpg' && drawedSrc == 'images/nozyczki.jpg'){
		
		fillSecondBoard('left-top' , imageCrown);
		fillSecondBoard('right-top' , imageCrown);
		
	}
	
}

let buttonReload = document.querySelector('button');

buttonReload.onclick = function(){
	
	window.location.reload();
	
}

