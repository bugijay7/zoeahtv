import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Homepage from './Pages/Homepage';
import Gallery from './Pages/Gallery';
import Services from './Pages/Services';
import Contactpage from './Pages/Contactpage';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='app-container'>
        <Router>
          <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contactpage" element={<Contactpage />} />
          <Route path="/Services" element={<Services />} />
          </Routes>
        </Router>
      </div>
  )
}

export default App
