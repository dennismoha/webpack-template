import Joke from './generateJoke'
import './styles/main.scss'
import aliens from './assets/aliens.jpg'
import generateJoke from './generateJoke';
let Alien = document.getElementById('alien');
Alien.src = aliens
let m = Joke()
const jokeBtn  = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click',generateJoke)
