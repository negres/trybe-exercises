const url = 'https://icanhazdadjoke.com/';
const fetchJoke = () => {
  fetch(url, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data =>
      document.getElementById('jokeContainer').innerText = data.joke
    );
}

window.onload = () => fetchJoke();