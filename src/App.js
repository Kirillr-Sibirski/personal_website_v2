import React from 'react'
import { Routes, Route, Link} from 'react-router-dom';

import { About, Projects, SkillsInterests } from './containers';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/skills_interests' element={<SkillsInterests/>} />
    </Routes>
    </div>
  )
}

export default App