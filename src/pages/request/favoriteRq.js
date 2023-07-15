export default function favoritesFilm(id) {
  // https://api.themoviedb.org/3/account/{account_id}/favorite/movies
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2UxOTViN2NlYzAxYTdiMjI4Yjg3YTAyNGE0ZTM2YSIsInN1YiI6IjY0OTE3YTk1MmY4ZDA5MDBhZDM2Nzc4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jL8xCsuA2d9RPsKMNMNN8vraXL6Rf5_DuIeSYc76gEY',
    },
    body: JSON.stringify({media_type: 'movie', media_id: id, favorite: true})
  };

  fetch('https://api.themoviedb.org/3/account/20115663/favorite', options)
    .then(response => response.json())
    .then(response => { console.log(response) })
    .catch(err => alert(err));
}