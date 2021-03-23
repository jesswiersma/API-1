 const baseURL = "https://cat-fact.herokuapp.com/facts/random?animal_type=?"


 //Search Form
 const searchTerm = document.querySelector('.search');
 const searchForm = document.querySelector('.form');
 const submitBtn = document.querySelector('.submit');


 //Results
searchForm.addEventListener('submit' , fetchAnimalFact);

function fetchAnimalFact(e) {
    console.log(e)
    e.preventDefault ();
    fetch(baseURL)
    .then((results) => results.json())
    .then((json) => displayAnimalFact(json))
    .catch((error)  => console.log(error))
}


function displayAnimalFact(fact) {
    console.log('result', fact)
}


