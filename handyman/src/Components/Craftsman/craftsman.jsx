import React from 'react';
import craftsmen from '../../images/hero_image.png';
import './craftsman.css';
import {Link} from 'react-router-dom'

const craftsman = () => {
  return (
    <div className='craftsman container'>

      <div className="craftsman-caption">
        <p>
          Are you a cleaner? Can you assemble furniture? 
          Are you a plumber? There is a place for you 
          at HandyMan. Join us now and start earning.
        </p>
        <p>
          At HandyMan, we connect skilled professionals like you 
          with customers who need your expertise. Whether it's 
          a one-time job or a long-term contract, you'll find 
          opportunities to showcase your talents and build 
          a steady income.
        </p>
        <p>
          Don't miss out on the chance to grow your business 
          and be part of a community that values your skills. 
          Sign up today and take the first step towards a 
          rewarding career with HandyMan.
        </p>
        <Link to="/get-started">
        <button className='btn dark-btn'>Become a HandyMan</button>
        </Link>
      </div>

      <div className="craftsman-image">
        <img src={craftsmen} alt="Image of Craftsmen" className='craftsman-img'/>
      </div>

    </div>
  )
}

export default craftsman
