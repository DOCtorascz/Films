import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import responseSort from '../../../pages/request/sortOnRq';
import { useEffect, useState } from 'react';
import favoritesFilm from '../../../pages/request/favoriteRq';
import { Link } from "react-router-dom";

const defaultPath = 'https://www.themoviedb.org/t/p/w780/';

const DefaultMoviesCard = {
  movies: [],
  sortOnPopular: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
  sortOnTop: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
  popular: [],
  favorite: [],
}


export default function Movies({ sortOn, min }) {
  const [cardFilms, setCardFilms] = useState(DefaultMoviesCard.movies)
  const [sort, setSort] = useState(DefaultMoviesCard.popular)
  const [favorites, setFavorite] = useState(DefaultMoviesCard.favorite)

  useEffect(() => {
    responseSort(min, setCardFilms, setSort)
  }, [min])

  const favorite = (e) => {
    if (e.target.tagName === 'svg') {
      const movieName = e.target.parentNode.parentNode.parentNode.children[0].children[0].textContent
      DefaultMoviesCard.favorite.push(movieName);
      setFavorite([
        ...DefaultMoviesCard.favorite,
      ])
    } else {
      const movieName = e.target.parentNode.parentNode.parentNode.parentNode.children[0].children[0].textContent
      DefaultMoviesCard.favorite.push(movieName);
      setFavorite([
        ...DefaultMoviesCard.favorite,
      ])
    }
  }

  const findDuplicates = (favorites) => favorites.filter((item, index) => favorites.indexOf(item) !== index)
  const dubl = findDuplicates(favorites);

  if (cardFilms.length !== 0 && sortOn === 'popular') {
    const favoriteCard = cardFilms.results.map((item, index) => {
      favorites.forEach(ite => {
        if (item.title === ite) {
          item.adult = true
        }
      })  

      dubl.forEach(items => {
        if (items === item.title) {
          item.adult = false
        }
      })

      return item
    })

    return (
      favoriteCard.map(item => {
        return (
          <Card key={item.id} sx={{ width: 345, height: '320px' }} >
            <Link to={`details/${item.id}`}>
              <CardMedia
                sx={{ height: '50%' }}
                image={defaultPath + item.backdrop_path}
                title="green iguana"
              />
            </Link>
            <div className='infoCardInner'>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.vote_average}
                </Typography>
              </CardContent>
              <CardActions>
                <Button>
                  <StarBorderIcon sx={{ background: item.adult ? 'black' : 'transparent' }} onClick={(e) => { 
                    favorite(e);
                    favoritesFilm(item.id);
                  }} />
                </Button>
              </CardActions>
            </div>
          </Card>
        )
      })
    );
  } else if (sort.length !== 0 && sortOn === 'popularReverse') {
    return (
      sort.results.map(item => {
        return (
          <Card key={item.id} sx={{ width: 345, height: '320px' }} >
            <Link to={`details/${item.id}`}>
              <CardMedia
                sx={{ height: '50%' }}
                image={defaultPath + item.backdrop_path}
                title="green iguana"
              />
            </Link>
            <div className='infoCardInner'>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.original_title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.vote_average}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => console.log('s')}>
                  <StarBorderIcon />
                </Button>
              </CardActions>
            </div>
          </Card>
        )
      })
    );
  }
}