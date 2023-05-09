import { useEffect } from "react";
import arrow_down from "../assets/arrow_down.png";
import "../styles/mountains.scss";
import { gsap} from "gsap";


export default function Mountains()
{

    useEffect(() => {

        const timeline = gsap.timeline();
        timeline.to(".profil", 
        {
          zIndex: 0,
          x: 0,
          scale: 0.3,
          duration: 0.2
        });
        timeline.to(".profil", 
        {
          y: -900,
          duration: 1.7,
          delay: 1,
        })
        timeline.to(".profil", 
        {
          y: +900,
          duration: 3,
          delay: 1,
        });
        timeline.to(".profil", 
        {
          zIndex: 1,
          x: 500,
          scale: 0.4,
          delay: 0
        });
        timeline.to(".profil", 
        {
          y: -800,
          duration: 1.7,
          delay: 1,
        })
        timeline.to(".profil", 
        {
          y: +800,
          duration: 3,
          delay: 1,
        });
        timeline.to(".profil", 
        {
          zIndex: 2,
          x: 600,
          scale: 0.7,
          delay: 0
        });
        timeline.to(".profil", 
        {
          y: -600,
          duration: 1.7,
          delay: 1,
        });
        timeline.to(".profil", 
        {
          y: +600,
          duration: 3,
          delay: 1,
        });
        timeline.to('.profil',
        {
          delay: 0,
          scale: 1,
          x: 0,
          zIndex: 8,
        });
        timeline.to('.profil',
        {
          y: -600,
          duration: 3,
          delay: 1,
        })
      
        const titleLine = gsap.timeline();
        titleLine.to(".Title", 
        {
          y: -200 + 'px',
          duration: 2,
          delay: 0.3,
          ease: 'elastic'
        })
      
    }, []);

    return (
        <section className="section one">
            <div className='montainsContainer'>
                <div className="secondMontains" id='secondMontains'></div>
                <h1 className='Title' id='title'>Software Engineer</h1>
                <div className="firstMontains" id='firstMontains'></div>
                <div className="ground" id='ground'></div>
                <div className="profil" id='max'></div>
                <div className='scrollDown'>
                    <p>scoll down</p>
                    <img alt="arrow" src="https://res.cloudinary.com/dcjze5qvx/image/upload/v1683661350/arrow_down_bsupx9.png" width={32} height={32}></img>
                </div>
            </div>
        </section>
    );
}