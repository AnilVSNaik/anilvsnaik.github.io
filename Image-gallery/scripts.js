const closeButton = document.querySelector('.lightbox-close');
const lightbox = document.querySelector('.lightbox');

closeButton.onclick = function(event){
	event.preventDefault();
	lightbox.classList.add('hidden');
}

const galleryItems = document.querySelectorAll('.gallery-items');

for(var i = 0; i < galleryItems.length; i++){
	let item = galleryItems[i];
	var input = document.createElement("input");
	input.name = i;
	input.hidden=true;
	item.appendChild(input);
	item.onclick = function(event){
		lightbox.classList.remove('hidden')
		const clickedOn = event.target;
		const galleryItemsParent = clickedOn.parentElement;

		const lightBoxImage = document.querySelector(".lightBox-image");
		lightBoxImage.innerHTML = galleryItemsParent.innerHTML; 
	}
}
const nextButton = document.querySelector(".next");
nextButton.onclick = function(event){
	event.preventDefault();
	let lightBox = document.querySelector('.lightBox-image')
	let nextIndex = parseInt(lightBox.children[2].name) + 1
	lightBox.innerHTML = galleryItems[nextIndex].innerHTML; 

}

const preButton = document.querySelector(".previous");
preButton.onclick = function(event){
	event.preventDefault();
	let lightBox = document.querySelector('.lightBox-image')
	let preIndex = parseInt(lightBox.children[2].name)-1
	lightBox.innerHTML = galleryItems[preIndex].innerHTML;
}


// var currentImage = 1;

// function showDiv(which) {
//    for(i = 0; i < 13; i++) {
//       document.getElementsByClassName("gallery-items"+i).style.display="none";
//    }
//    //in the next 2 lines, make sure which isn't lower than 1, and isn't greater than the number of images
//    if(which < 1) which = 1;
//    if(which > 7) which = 7;
//    document.getElementsByClassName("gallery-items" + which).style.display = "block";
//    currentImage = which;
// } 


