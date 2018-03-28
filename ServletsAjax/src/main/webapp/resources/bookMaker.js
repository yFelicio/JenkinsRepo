function getBook() {
	var xhr = new XMLHttpRequest();
	console.log("in book");
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var book = JSON.parse(xhr.responseText);
			document.getElementById("stuff").innerHTML = book.title;
			console.log(book);
		}
	}
		xhr.open("GET", "book", true);
		xhr.send();
}

function createBook() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			document.getElementById("stuff").innerHTML = "did something";
			
		}
	}
	xhr.open("POST", "book", true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send("book="+JSON.stringify({title:"The Hungry Caterpiller 2", desc: "even better than the last", author: "Howard", isbn: 12345, pageCount:50}));
}

window.onload = function() {
	document.getElementById("getBook").addEventListener("click", getBook, false);
	document.getElementById("createBook").addEventListener("click", createBook, false);
}