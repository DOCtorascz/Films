export default function detailsMovies(setDetails, setActor, id) {
  const options = {
    method: 'GET', 
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjY5NmUxYmIxNzNiZWM4ZTU3N2Q4MDg4ZDk5YzU5NyIsInN1YiI6IjY0YTdhNjc3OTU3ZTZkMDExYzRiZGM2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7CSiVrygtJWP3wid2r7DNCRfmBc_TrMnSlRND8RUi_M',
    },
  };

  fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
  .then(response => response.json())
  .then(response => setDetails(response))
  .catch(err => console.error(err));

  fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
  .then(response => response.json())
  .then(response => setActor(response))
  .catch(err => console.error(err));
}