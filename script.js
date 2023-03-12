let names = ["Ritesh","Ankit"]
let namesDisplay = document.getElementById("names-display");
names.map( (name) => {
    let contentDiv = document.createElement('div');
    let contentName = document.createElement('h2')
    contentDiv.className = "nameContainer names";
    contentName.innerHTML = name;
    contentDiv.appendChild(contentName);
    namesDisplay.appendChild(contentDiv);
})



// JavaScript code
function search_names() {
	let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('names');
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
            document.getElementById('searchbar').value = "";
            
        }
        else {
            x[i].style.display="flex";				
        }
    }
}

