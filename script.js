//your code here
let pageNumber = document.getElementById("pageNumber")
async function fetchData(PageNumber){
	const response = await fetch (`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`)
	const data = await response.json();
	console.log(data);
}

function loadNext(){
	pageNumber++;
	fetchData(pageNumber)
	pageNumber.innerText = pageNumber;
}

function loadPrev(){
	pageNumber--;
	if(pageNumber === 1){
		document.getElementById('load_prev').disable = true;
	}
	else{
		document.getElementById('load_prev').disable = false;
		fetchData(pageNumber)
		pageNumber.innerText = pageNumber;
	}
	
}