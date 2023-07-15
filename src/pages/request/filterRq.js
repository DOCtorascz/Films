export default function responseGener(setGaner) {
  const UserContext = {
    TOKEN: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2UxOTViN2NlYzAxYTdiMjI4Yjg3YTAyNGE0ZTM2YSIsInN1YiI6IjY0OTE3YTk1MmY4ZDA5MDBhZDM2Nzc4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jL8xCsuA2d9RPsKMNMNN8vraXL6Rf5_DuIeSYc76gEY',
  }

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: UserContext.TOKEN
    }
  };

  fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    .then(response => response.json())
    .then(response => {
      const moveObj = { genres: [] }
      moveObj.genres = response.genres.map(item => {
        item.checked = false;
        return item
      })
      setGaner(moveObj.genres)
    })
    .catch(err => alert(err));
}