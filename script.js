const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

function fruit() {
var fruit =
 ['Apple', 'Apricot', 'Avocado 🥑',  'Banana','Bilberry','Blackberry','Blackcurrant',
	   'Blueberry', 
	   'Boysenberry', 
	   'Currant', 
	   'Cherry', 
	   'Coconut', 
	   'Cranberry', 
	   'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu']
};

input.onKeyup = (e) =>{
	let search = e.target.value;
	let emptyArray= suggestions.filter((data)=>{
		return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
	});
	emptyArray = emptyArray.map((data)=>{
		
		return data = '<li>'+ data +'</li>';
	})
}
function search(str) {
	let results = [];
	

	return results;
}

function searchHandler(e) {
	
	const results = search(input);
	input ? showSuggestions(results) : suggestions.innerText = "";
}

function showSuggestions(results) {
	suggestions.innerText ="";
	if(results.length > 0) {
		for(let i = 0; i < results.length && i < 5; i++) {
			const newLi = document.createElement("li");
			newLi.innerText = results[i];
			suggestions.appendChild(newLi);
		}
	}
}

function toggleHighlight(e) {
	const targetClass = e.target.classList;
	const eventType = e.type;
	if(eventType ==='mouseover'){
		targetClass.add('highlight');
	} else if (eventType === 'mouseout') {
		targetClass.remove('highlight')
	}
}
function useSuggestion(e) {
	fruitVal = e.target.innerText;
	input.value = fruitVal;
	suggestions.innerText = "";
}


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener('mouseover', toggleHighlight);
suggestions.addEventListener('mouseout', toggleHighlight);

/*input.onKeyup = (e) =>{
	let search = e.target.value;
	let emptyArray= suggestions.filter((data)=>{
		return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
	});
	emptyArray = emptyArray.map((data)=>{
		
		return data = '<li>'+ data +'</li>';
	})


	//fruit.filter(val => val.toLowerCase().includes(str) ? results.push(val): null);

	//const inputVal = e.target.value.tolowerCase();
}*/