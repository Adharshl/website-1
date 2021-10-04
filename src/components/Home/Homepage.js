import React from 'react';
import './Home.css';
import { Button } from '../Button';
import '../../App.css';

function Homepage(){
    return(
       <div className="home-container">
           <video src="/videos/video-1.mp4" autoPlay loop muted />
           <h1>ADVENTURE AWAITS</h1>
           <p>What are you waiting for?</p>
           <div className="home-btns">
                <Button className='btns' 
                buttonStyle="btn--outline" 
                buttonSize="btn--large">
                    GET STARTED
                </Button>
                <Button className='btns' 
                buttonStyle="btn--primary" 
                buttonSize="btn--large">
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
           </div>
       </div>
    )
};

export default Homepage;