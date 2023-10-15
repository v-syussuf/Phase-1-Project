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

// Function to render the exercise details
function renderExercise(exercise){
  const container = document.querySelector('.exercise-details');
  
  container.innerHTML = '';
  const exerciseType = document.createElement('exerciseType');
  exerciseType.textContent = (`Exercise type : ${exercise.type}`);
  container.appendChild(exerciseType);


  const exerciseEquip = document.createElement('exerciseEquip');
  exerciseEquip.textContent = (`Equipment : ${exercise.equipment}`);
  container.appendChild(exerciseEquip); 

  const exerciseDiff = document.createElement('exerciseDiff');
  exerciseDiff.textContent = (`Difficulty : ${exercise.difficulty}`);
  container.appendChild(exerciseDiff); 


  const exerciseInstruc = document.createElement('exerciseInstruc');
  exerciseInstruc.textContent = (`Instructions : ${exercise.instructions}`);
  container.appendChild(exerciseInstruc); 


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