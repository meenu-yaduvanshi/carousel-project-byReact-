import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './style.css';
import Carousel from "./Carousel";

function App() {
  const [imgState, setImgState] = useState(0)

  const nextBtn = () => {
    { setImgState(imgState + 1) }
    if (imgState === 6) {
      setImgState(0)
    }
  }
  const prevoiusBtn = () => {
    { setImgState(imgState - 1) }
    if (imgState === 6) {
      setImgState(0)
    }
  }

  const [autoplayState, setAutoState] = useState(false)

  const autoplay = ("click", () => {
    setAutoState(!autoplayState)
  })

  setTimeout(() => {
    if (autoplayState)
      setImgState(imgState + 1)
    if (imgState === 6) {
      setImgState(0)
    }
  }, 1000)

  return (
    <div className='main-div'>
      <h1>Carousel</h1>
      <h5>{imgState}</h5>
      <label htmlFor='autoplays'>Autoplay</label>
      <input type="checkbox" id='autoplays' value={autoplayState} onChange={autoplay} />
      <button className='back-btn' onClick={prevoiusBtn}>&#60;</button>
      <Carousel state={imgState} />
      <button className='next-btn' onClick={nextBtn}>&#62;</button>
    </div>
  )
}


export default App
