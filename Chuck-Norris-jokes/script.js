const joke = document.getElementById('newJoke');

fetch("https://api.chucknorris.io/jokes/random").then(function(response){
	return response.json();
})
.then(function(result){
	console.log(result);
	jokez.innerHTML = result.value;
})


