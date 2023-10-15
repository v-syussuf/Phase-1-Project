const BASE_URL = 'https://api.api-ninjas.com/v1/exercises?muscle=glutes';

document.addEventListener('DOMContentLoaded', () => {
     getExercises();
});

// Function to render exercises on our browser
function renderExercises(exercises){
  const container = document.querySelector('.exercises');
  
  exercises.forEach((exercise) => {
    const exerciseName = document.createElement('h1');
    exerciseName.textContent = exercise.name;
    exerciseName.addEventListener('click', () => {
    renderExercise(exercise);
   });
   container.appendChild(exerciseName);
  });
}



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