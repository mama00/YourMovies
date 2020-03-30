// API/TMDBApi.js

const API_TOKEN = "3a1457d15e8656b9c150cf1e876fe618";

export function getFilms (text,page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text+ "&page=" + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}