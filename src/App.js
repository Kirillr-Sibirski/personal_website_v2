import React from 'react'
import { Routes, Route, Link} from 'react-router-dom';

import useSound from 'use-sound'

import { Main } from './containers';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
    </Routes>
    </div>
  )
}

export default App