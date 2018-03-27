// 1. Get values from query params in URL
let url = new URL(document.location.href);
let params = new URLSearchParams(url.search);
let img_url = params.get('img-url');
let msg = params.get('msg');
// // 2. Get the <img> and <p> element
imgTag = document.querySelector('img');
console.log(imgTag);
imgTag.src = img_url;

hTag = document.querySelector('#message');
console.log(hTag);
hTag.innerHTML = msg;
// 3. Change the innerHTML of the <p> element


// 4. Change the src attribute of <img> element
function disappear() {
	message = document.querySelector(".container")
	message.style.display = "none";
}

setTimeout(disappear, 10000);
timer = 10
x = document.querySelector('#timer')
x.innerHTML = timer
stop = setInterval(countDown,1000)

function countDown(){
	console.log('asd')
	x.innerHTML = timer
	timer -= 1
	if (timer==0) {
	clearInterval(stop)
	}
}
