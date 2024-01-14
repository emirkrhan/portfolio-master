import './App.css'
import React from 'react'

import { Route, Routes } from 'react-router-dom';
import Black from './component/black/Black';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Black />} />
      </Routes>
    </div>
  )
}

export default App