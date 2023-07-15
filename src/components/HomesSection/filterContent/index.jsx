import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import CollapsList from '../collapsList/index.jsx';
import YearRelise from '../yearRelise/index.jsx';
import Ganre from '../ganres/index.jsx';
import BasicPagination from '../pagination/index.jsx';
import responseGener from '../../../pages/request/filterRq.js';
import Movies from '../movies/index.jsx';
import { useState, useEffect, useReducer, useContext, createContext } from 'react';

const defaultFilter = {
  SORTON: 'popular',
  RELISE: [1980, 2000],
  GANRECHECK: false,
}

export default function FilterMovies() {
  const [filter, setFilter] = useState(defaultFilter)
  const [ganre, setGanre] = useState('DefaultCinema')
  const [resetMovies, setResetMovies] = React.useState(ganre)
  let [minPage, setMinPage] = useState(1)

  function handleClickPaginat(e) {
    const nameTag = e.target.tagName;

    if (nameTag === 'svg' || nameTag === 'path') {
      setMinPage(++minPage)
    }
  }

  function handleClicksReset() {
    setFilter({
      ...defaultFilter,
      SORTON: 'popular',
      RELISE: [1980, 2000],
      GANRECHECK: false,
    })
  }

  const handleClickSortParametr = (event) => {
    if (event.target.value !== 0) {
      const valueSort = event.target.value;
      setFilter({
        ...filter,
        SORTON: valueSort,
      })
    }
  }

  const handleClickYearParametr = (event, newValue) => {
    setFilter({
      ...filter,
      RELISE: newValue,
    })
  };

  function handleClickReset() {
    setResetMovies(false)
  }

  const handleChangeGanre = (event, booleanValue) => {
    const newArrayGanre = ganre.map(item => {
      const nameGanre = event.target.parentNode.parentNode.textContent;

      if (nameGanre === item.name) {
        if (item.checked === false) {
          item.checked = booleanValue
        } else {
          item.checked = false
        }
      }
      return item
    })

    setGanre(newArrayGanre)
  };

  const handleChangeReset = (event) => {
    const newArrayGanres = ganre.map(item => {
      item.checked = false
      return item
    })

    setGanre(newArrayGanres)
  };

  useEffect(() => {
    responseGener(setGanre)
  }, [])

  return (
    <div className="FilterMovies">
      <section className="filter">
        <div className="container">
          <div className="filter__inner">
            <div className="filter__nameResetInner">
              <h1 className="filter__name">Фильтры:</h1>
              <div className="filter__parametrs">
                <IconButton onClick={(event) => {
                  if (filter.SORTON !== 'popular' || filter.RELISE !== [1980, 2000] || resetMovies !== 'DefaultCinema') {
                    handleClicksReset()
                    handleClickReset()
                    handleChangeReset()
                  }
                }} aria-label="reset">
                  <ClearIcon />
                </IconButton>
              </div>
            </div>
            <CollapsList valueCheks={filter} checks={handleClickSortParametr} />
            <YearRelise popular={filter} handlePopular={handleClickYearParametr} />
            {/* <Ganre /> */}
            <Ganre topsFilms={ganre} handleChangeGanre={(event) => { handleChangeGanre(event, true) }} />
            <BasicPagination clickPag={(e) => handleClickPaginat(e)} min={minPage} />
          </div>
        </div>
      </section>
      <div className='cardInner'>
        <Movies sortOn={filter.SORTON} min={minPage}/>
      </div>
    </div >
  )
}