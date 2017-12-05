
const API_KEY = '75a23ddcb004e1d05a70e46c083430569d302908392fb1007a7f5014307561f3';
const WALLURL = "https://api.unsplash.com/photos/random?client_id="+API_KEY;
window.onload = function(){//
	fetchQuote();
	fetchImage();

}
function myFunction(){
	console.log("Button Click");
	fetchQuote();
	fetchImage();
}

function fetchQuote(){
	console.log('fetch started');
	let request = new XMLHttpRequest();
	request.open("GET", "https://talaikis.com/api/quotes/random/", true);
	request.onload=function(){
		let response = request.responseText;
		let result = JSON.parse(response);
		console.log(result.quote);
		console.log(result.author);
		document.getElementById("quote").innerHTML = result.quote;
		document.getElementById("author").innerHTML = "~"+result.author;	
		
	}

	request.send();
}




function fetchImage(){
	let wallRequest = new XMLHttpRequest();
	console.log(WALLURL);
	wallRequest.open("GET", WALLURL, true);
	wallRequest.onload = function(){
		let response = wallRequest.responseText;
		let result = JSON.parse(response);
		let imageUrl = result.urls['regular'];
		console.log(result);
		document.getElementById("quote-container").style.backgroundImage = 'url('+imageUrl+')';
	}
	wallRequest.send();
	

}