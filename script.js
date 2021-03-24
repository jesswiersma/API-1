 const baseURL = "https://cat-fact.herokuapp.com/facts/random?animal_type="
 let url;

 //Search Form
 const searchTerm = document.querySelector('.search');
 const searchForm = document.querySelector('.catFacts');
 const submitBtn = document.querySelector('.submit');
 

 //Results
 const section = document.querySelector('.section');
 
 //
 searchForm.addEventListener('submit' , fetchAnimalFact);
 const animals =document.getElementById('animals');

 //Submit Event

function fetchAnimalFact(e) {
   console.log(e);
   url = baseURL + animals.value;
    e.preventDefault();
    console.log(url);

    //fetch method
    
    fetch(url)
    .then(function(result) {
        return result.json();
    }) .then(function(json) {
        displayResults(json);
    });

    //Display results
    function displayResults(json) {
      /*  while(section.firstChild) {
            section.removeChild(section.firstChild);
        }*/
        console.log(json.text);
        let fact = json.text
        let text = document.getElementById("animalFact");
        text.innerText = fact;
        //section.appendChild(catFacts);
    }
    }