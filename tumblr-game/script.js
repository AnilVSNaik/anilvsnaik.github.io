//query from
const form = document.getElementById('query-form');

//Search
const query = document.getElementById('query');
const tags = ['cendol', 'malaysia', 'singapore', 'cendol', 'city', 'dogs', 'cats', 'space', 'chicken', 'memes', 'God of War', 'nord','landscape','GIF','psychedelic'];
const list = document.getElementById('list-data');
const answerList = document.getElementById('choices')

let answer = ""
function randomColor(){
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);
	return 'rgb(' + r + ',' + g + ',' + b + ')'
}

function reset(){
	answerList.innerHTML = '';
	answer = tags[Math.floor(Math.random() * tags.length)];
	getTaggedPhotos(answer);
	choices = []
	choices.push(answer);

	while(choices.length < 4){
		const rand = tags[Math.floor(Math.random() * tags.length)];
		console.log(choices)
		if(choices.indexOf(rand) == -1){
			choices.push(rand);
		}
	}
	choices.sort(function(){
		return Math.random()*2-1;
	});

	getTag();
	getTaggedPhotos();
}

function getTag(){
	for(let i = 0; i < choices.length; i++){
		const li = document.createElement('li');
		const btn = document.createElement('button');
		// ul.appendChild(li);
		li.appendChild(btn);
		btn.innerHTML = choices[i];
		console.log(choices[i]);
		btn.style.background = randomColor();
		btn.onclick = function(){
			if(btn.innerHTML == answer){
				window.alert("Nice Job");
			}
			else {
				window.alert("Close but no cigar.");
			}
			reset();
		}
		console.log(answerList)
		answerList.appendChild(btn);
	}
}
// onsubmit
form.onsubmit = function(event){
	event.preventDefault()
	// get value in input field
	const queryTerm = query.value;
	console.log(queryTerm);
	getTaggedPhotos(queryTerm);

}


function getTaggedPhotos(tagName){
	fetch("https://api.tumblr.com/v2/tagged?tag=" + tagName + "&api_key=ESLNIa7vBFwqvokjnO5j49akIJ6GFksIlozuEJkzqeYM8Zpbte")
	.then(function(response){
		return response.json();
	})
	.then(function(result){

		list.innerHTML = '';
		const items = result.response;

		for(let i = 0; i < items.length; i++){
		const item = items[i];
		if(item.type == 'photo'){
			const altSizes = item.photos[0].alt_sizes;
			const imgSrc = altSizes[altSizes.length - 5].url;
			const img = document.createElement('img');
			img.src = imgSrc;
			img.onload = function(){
			msnry.layout();
			};
			const li = document.createElement('li');
			li.appendChild(img);
			list.appendChild(li);
				}
			}

			var msnry = new Masonry(list , {
	 		 itemSelector: 'li',
			});
		msnry.layout();
	})
}
reset();
getTag();
getTaggedPhotos();
