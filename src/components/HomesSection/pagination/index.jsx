import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useState } from 'react';
import responseSort from '../../../pages/request/sortOnRq';

const DefaultMoviesCard = {
  movies: [],
  sortOnPopular: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
  sortOnTop: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
  popular: [],
}

export default function BasicPagination({clickPag, min}) {  
  return (
    <Stack sx={{ width: '100%' }}>
      <Pagination 
      onClick={clickPag} 
      count={500} 
      defaultPage={1} 
      page={min} 
      siblingCount={0} 
      renderItem={(item) => (
        <PaginationItem
          slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
          {...item}
        />
      )}
      />
    </Stack>
  );
}