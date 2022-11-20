import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/Landing/LandingPage';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {

  return (
    <div className="App">
      {/* <Navbar /> */}
      <LandingPage />
      <Footer />
    </div>
  )
}

export default App
