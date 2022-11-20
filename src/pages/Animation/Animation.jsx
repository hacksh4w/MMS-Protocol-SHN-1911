import React from 'react'
import Stick from '../../components/Stick/Stick';
import Sphere from '../../components/Spehere/Sphere';
import './Animation.css'
import Wings from '../../components/Wings/Wings';
export default function Animation() {
  return (
    <div className='Objects'>
        <Sphere/>
        <Stick/>
        {/* <Wings3/> */}
        <Wings/>
    </div>
  )
}
