import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import detailsMovies from "../../../pages/request/detailsRq";
import { useEffect, useState } from "react";

const defaultInfoFilms = {
  DETAILS: '',
  ACTOR: '',
}

export default function DetailsCard() {
  const [details, setDetails] = useState(defaultInfoFilms.DETAILS)
  const [actor, setActor] = useState(defaultInfoFilms.ACTOR)

  const currentUrl = window.location.href;
  const movieIndex = currentUrl.indexOf('details')
  const movieSection = currentUrl.slice(movieIndex, currentUrl.length)
  const slash = movieSection.indexOf('/')
  const movieId = movieSection.slice(slash + 1, movieSection.length)
  const defaultPath = 'https://www.themoviedb.org/t/p/w780/';

  useEffect(() => {
    detailsMovies(setDetails, setActor, movieId);
  }, [movieId])

  if (details !== '') {
    return (
      <main className='details'>
        <div className="details__inner">
          <Card sx={{ 'width': 345, height: '500px' }} >
            <CardMedia
              sx={{ height: '100%' }}
              image={defaultPath + details.poster_path}
              title="green iguana"
            />
          </Card>
          <ul className='janre'>
            <li>Жанры:</li>
            {details.genres.map(element => {
              return (<li key={element.id}>{element.name}</li>)
            })}
          </ul>
        </div>
      </main>
    )
  }
}