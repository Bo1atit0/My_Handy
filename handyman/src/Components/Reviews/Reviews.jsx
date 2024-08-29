import './Reviews.css';
import nextbtn from '../../images/angle-right.png'
import backbtn from '../../images/angle-left.png'
import user1 from '../../images/user_1.jpg'
import user2 from '../../images/user_2.jpg'
import user3 from '../../images/user_3.jpg'
import user4 from '../../images/user_4.jpg'
import user5 from '../../images/user_5.jpg'
import { useRef } from 'react';

const Reviews = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = ()=> {
    if (tx > -80) {
      tx -= 40;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = ()=> {
    if(tx < 0) {
      tx += 40;
    }
    slider.current.style.transform = `translate(${tx}%)`;
  }

  return (
    <div className='reviews container'>
      <img src={nextbtn} alt='N' className='next-btn' onClick={slideForward}/>
      <img src={backbtn} alt='P' className='prev-btn' onClick={slideBackward}/>
      
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className="slide">
              
              <div className="user-info">
                <img src={user1} alt="user image" />
                <div>
                <h3>Mark Johnson</h3>
                <p>Los Angeles, CA</p>
              </div>
                
              </div>
                <p>
                  HandyMan exceeded my expectations! 
                  The plumber they sent was professional, 
                  on time, and fixed my issue quickly. 
                  I'll definitely be using their services again!
                </p>
              </div>
            </li>

            <li>
            <div className="slide">
              
              <div className="user-info">
                <img src={user2} alt="user image" />
                <div>
                <h3>Olivia Green</h3>
                <span>Chicago, IL</span>
              </div>
                
              </div>
                <p>
                  HandyMan exceeded my expectations! 
                  The plumber they sent was professional, 
                  on time, and fixed my issue quickly. 
                  I'll definitely be using their services again!
                </p>
              </div>
            </li>

            <li>
            <div className="slide">
              
              <div className="user-info">
                <img src={user3} alt="user image" />
                <div>
                <h3>Michael Brown</h3>
                <span>New York, NY</span>
              </div>
                
              </div>
                <p>
                  HandyMan exceeded my expectations! 
                  The plumber they sent was professional, 
                  on time, and fixed my issue quickly. 
                  I'll definitely be using their services again!
                </p>
              </div>
            </li>

            <li>
            <div className="slide">
              
              <div className="user-info">
                <img src={user4} alt="user image" />
                <div>
                <h3>Emily Nguyen</h3>
                <span>Seattle, WA</span>
              </div>
                
              </div>
                <p>
                  HandyMan exceeded my expectations! 
                  The plumber they sent was professional, 
                  on time, and fixed my issue quickly. 
                  I'll definitely be using their services again!
                </p>
              </div>
            </li>

             <li>
            <div className="slide">
              
              <div className="user-info">
                <img src={user5} alt="user image" />
                <div>
                <h3>Dreya Martinez</h3>
                <span>Austin, TX</span>
              </div>
                
              </div>
                <p>
                  HandyMan exceeded my expectations! 
                  The plumber they sent was professional, 
                  on time, and fixed my issue quickly. 
                  I'll definitely be using their services again!
                </p>
              </div>
            </li> 

        </ul>
        
      </div>
       
    </div>
  )
}

export default Reviews;