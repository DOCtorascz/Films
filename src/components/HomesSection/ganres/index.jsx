import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useState } from 'react';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function Ganre({ topsFilms, handleChangeGanre }) {
  if (topsFilms !== 'DefaultCinema') {
    return (
      <>
        <h2>Жанры:</h2>
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={topsFilms}
          disableCloseOnSelect
          getOptionLabel={(option) => option.name}
          renderOption={(props, option) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={option.checked}
                onChange={handleChangeGanre}
              />
              {option.name}
            </li>
          )}
          style={{ paddingTop: '20px', marginBottom:'20px', width: '100%' }}
          renderInput={(params) => (
            <TextField {...params} label="Жанры" />
          )}
        />
      </>
    );
  }
}

// import * as React from 'react';
// import Checkbox from '@mui/material/Checkbox';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
// import { useState } from 'react';

// const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon = <CheckBoxIcon fontSize="small" />;

// export default function Ganre() {
//   let selec = false
//   // console.log(selec)
//   return (
//     <>
//       <button onClick={() => selec = false}>УДАЛИТЬ НАХОЙ</button>
//       <Autocomplete
//         multiple
//         id="checkboxes-tags-demo"
//         options={top100Films}
//         disableCloseOnSelect
//         getOptionLabel={(option) => option.title}
//         renderOption={(props, option, { selected }) => (
//           selected = selected ? selected : selec,
//           console.log(selected ),

//           <li {...props}>
//             <Checkbox
//               icon={icon}
//               checkedIcon={checkedIcon}
//               style={{ marginRight: 8 }}
//               checked={selected}
//             />
//             {option.title}
//           </li>
//         )}
//         style={{ width: '100%' }}
//         renderInput={(params) => (
//           <TextField {...params} label="Checkboxes" placeholder="Favorites" />
//         )}
//       />
//     </>
//   );

// }

// const top100Films = [
//   { title: 'The Shawshank Redemption', year: 1994 },
//   { title: 'The Godfather', year: 1972 },
//   { title: 'The Godfather: Part II', year: 1974 },
//   { title: 'The Dark Knight', year: 2008 },
//   { title: '12 Angry Men', year: 1957 },
//   { title: "Schindler's List", year: 1993 },
//   { title: 'Pulp Fiction', year: 1994 },
// ];
