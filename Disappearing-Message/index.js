// 1. Get the <form> element
form = document.querySelector ('#create-form');
	console.log(form);
// 2. Event Listen when form has been submitted
// // 2.1 Prevent the default behavior of form submission
form.onsubmit = function(event) {
	event.preventDefault();

// // 2.2 Get the value of <input> elements
let msg = document.querySelector("#input-msg").value;
	console.log(msg);
let img = document.querySelector("#input-img").value;
	console.log(img);


// // 2.3 Concatenate the URL string
homeURL = "https://anilvsnaik.github.io/Disappearing-Message/message.html"

url = homeURL + '?img-url=' + img + '&msg=' + msg;
	console.log(url);

// // 2.4 Get the <p> element and change it's value to the URL string
combine=document.querySelector('#combine')
combine.value=url
}
function myFunction() {
  var copy = document.getElementById("combine");
  
  copy.select();
  
  document.execCommand("Copy");
  
  alert("Copied the text");
}

