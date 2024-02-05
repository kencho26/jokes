const joke = document.querySelector('.joke');

const generateJoke = () =>{
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
    .then(res => res.json())
    .then(date => {
        joke.textContent = date.joke;
    })
    .catch(err =>console.log(err))
}

window.onload(generateJoke())