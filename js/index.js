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