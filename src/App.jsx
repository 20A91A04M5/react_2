import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prods from './Pro/Products'

function App() {

  return (
    <>
    <h1 style={{color:"orange",fontSize:"30px",textAlign:"center"}}>Products</h1>
    <div style={{display:"flex",gap:"15px",flexWrap:"wrap",border:"3px groove black", padding:"20px"}}>
      <Prods />
    </div>
    </>
  )
}

export default App
