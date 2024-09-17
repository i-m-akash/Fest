import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './EventAnimation.css';
import Alfresco from "../Images/Alfresco.png";
import Kalakriti from "../Images/Kalakriti.png";
import Littmania from "../Images/Littmania.png";
import Solasta from "../Images/Solasta.png";
import Velocity from "../Images/Velocity.png";
import Thunderbolt from "../Images/Thunderbolt.png"
const EventAnimation = () => {



    return (
        <div className='logos'>
                            <div className='logos-slide'>
                                <img src={Kalakriti} alt="img1" />
                                <img src={Alfresco} alt="img2" />
                                <img src={Littmania} alt="img3" />
                                <img src={Solasta} alt="img4" />
                                <img src={Thunderbolt} alt="img5" />
                                <img src={Velocity} alt="img6" />
                                


                            </div>
                        </div>
    );
};

export default EventAnimation;
