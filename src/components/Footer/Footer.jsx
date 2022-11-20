import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer' style={{position: 'fixed',justifyContent: 'space-around'}}>
        <div className='container'>
            <ul>
                <li><a href="https://www.energy.gov/clean-energy">Clean Energy </a></li>
                <li><a href="https://www.millenniumfellows.org/meet-the-fellows">MF '22' </a></li>
                <li><a href="https://www.worldwildlife.org/">WWF </a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
