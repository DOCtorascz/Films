import HeaderSection from "../headerSection/index.jsx"
import FilterMovies from "../filterContent/index.jsx"
import DialogPopupAuthoriz from "../../popup/loginPopup/index.jsx"
import { useState } from "react"

export default function HomesSection() {
  const [popup, setPopup] = useState(false)

  return (
    <>
      <HeaderSection popups={setPopup}/>
      {!popup ? <FilterMovies /> : <DialogPopupAuthoriz popups={setPopup} />}
    </>
  )
}
