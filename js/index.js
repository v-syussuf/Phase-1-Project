const BASE_URL = 'https://api.api-ninjas.com/v1/exercises?muscle=glutes';

document.addEventListener('DOMContentLoaded', () => {
     getExercises();
});



let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  } else{
    document.querySelector('.header').classList.remove('active');
  }
}

// Function to render exercises on the page
function renderExercises(exercises) {
  const container = document.querySelector('.exercises');

  exercises.forEach((exercise) => {
      const exerciseBox = document.createElement('div');
      exerciseBox.classList.add('box');

      // Exercise image
      const exerciseImage = document.createElement('div');
      exerciseImage.classList.add('image');
      const image = document.createElement('img');
      const defaultImageIndex = exercises.indexOf(exercise) + 1; 
      image.src = `images/img-${defaultImageIndex}.jpg`;
      image.alt = exercise.name;
      exerciseImage.appendChild(image);


      // Exercise content
      const exerciseContent = document.createElement('div');
      exerciseContent.classList.add('content');

      const exerciseName = document.createElement('h3');
      exerciseName.textContent = exercise.name;
      exerciseContent.appendChild(exerciseName);

      const exerciseInfo = document.createElement('div');
      exerciseInfo.classList.add('icons');
      exerciseInfo.innerHTML = `
          <span><i class="fas fa-calendar"></i>mon - sat</span>
          <span><i class="fas fa-clock"></i>1 hour</span>
      `;
      exerciseContent.appendChild(exerciseInfo);

      const readMoreLink = document.createElement('a');
   
      readMoreLink.textContent = 'Read More';
      readMoreLink.classList.add('link-btn');
      exerciseContent.appendChild(readMoreLink);

      exerciseBox.appendChild(exerciseImage);
      exerciseBox.appendChild(exerciseContent);

      // Add a click event listener to show exercise details
      exerciseBox.addEventListener('click', () => {
          renderExercise(exercise);
      });

      container.appendChild(exerciseBox);
  });
}

// Function to render the exercise details
function renderExercise(exercise) {
  const container = document.querySelector('.exercise-details');
  container.innerHTML = '';

  const exerciseType = document.createElement('p');
  exerciseType.textContent = `Exercise type: ${exercise.type}`;
  container.appendChild(exerciseType);

  const exerciseEquip = document.createElement('p');
  exerciseEquip.textContent = `Equipment: ${exercise.equipment}`;
  container.appendChild(exerciseEquip);

  const exerciseDiff = document.createElement('p');
  exerciseDiff.textContent = `Difficulty: ${exercise.difficulty}`;
  container.appendChild(exerciseDiff);

  const exerciseInstruc = document.createElement('p');
  exerciseInstruc.textContent = `Instructions: ${exercise.instructions}`;
  container.appendChild(exerciseInstruc);
}
// Function to open the exercise modal
function openExerciseModal(exercise) {
  const modal = document.querySelector('.exercise-modal');
  const exerciseDetails = modal.querySelector('.exercise-details');

  exerciseDetails.innerHTML = `
    <p><strong>Exercise type:</strong> ${exercise.type}</p>
    <p><strong>Equipment:</strong> ${exercise.equipment}</p>
    <p><strong>Difficulty:</strong> ${exercise.difficulty}</p>
    <p class="instructions"><strong>Instructions:</strong><br>${exercise.instructions}</p>
  `;
  modal.style.display = 'block';

  function closeExerciseModal() {
  const modal = document.querySelector('.exercise-modal');
  modal.style.display = 'none';
}
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