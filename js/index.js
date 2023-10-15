const BASE_URL = 'https://api.api-ninjas.com/v1/exercises?muscle=glutes';

document.addEventListener('DOMContentLoaded', () => {
     getExercises();
});


// function to fetch a list of exercises from our API
 function getExercises(){
    fetch(BASE_URL, {
      method: "GET",
      headers: {
        'X-Api-Key' : '5tlSkJveYo38DARGGvRkGw==iQUpMdzYoJ6reyh4',
      },
    })
        .then((response) => response.json())
        .then(renderExercises)
        .catch((error) => console.log('error', error));
       
}