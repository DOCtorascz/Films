export default function responseSort(numPage, setCardFilms, setSort) {

  const options = {
    method: 'GET', 
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2UxOTViN2NlYzAxYTdiMjI4Yjg3YTAyNGE0ZTM2YSIsInN1YiI6IjY0OTE3YTk1MmY4ZDA5MDBhZDM2Nzc4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jL8xCsuA2d9RPsKMNMNN8vraXL6Rf5_DuIeSYc76gEY',
    },
  };

  fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${numPage}`, options)
  .then(response => response.json())
  .then(response => setCardFilms(response))
  .catch(err => console.error(err));

  fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${numPage}`, options)
  .then(response => response.json())
  .then(response => setSort(response))
  .catch(err => console.error(err));
}