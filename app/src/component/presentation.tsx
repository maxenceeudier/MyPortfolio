import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';
import "../styles/presentation.scss";

export default function Presentation(props : {startWritting : boolean})
{
    const [h1Write, setH1Write] = useState<JSX.Element>();

    useEffect(() => {
    if (props.startWritting)
    {
        const typeWritter = <Typewriter
        options={{deleteSpeed: 15, delay: 30}}
        onInit={(typewriter) => {
        typewriter
        .typeString("<h1>Hi ! I'm Maxence EUDIER</h1><br/>")
        .pauseFor(300)
        .typeString("I'm a Dev <strong>Typescript/React</strong>")
        .pauseFor(1500)
        .deleteChars(16)
        .typeString('<strong>NodeJs/C/C++</strong>')
        .pauseFor(1500)
        .deleteChars(12)
        .typeString('<strong>Fullstack !</strong>')
        .pauseFor(1000)
        .typeString('<br/><br/><p>After 5 years in the French army,</p>')
        .typeString('<p>I found a new passion for coding.</p>')
        .typeString('<p>My ambition is to become a great craftmanship Software Engineer.</p>')
        .typeString('<p>I can’t wait to find my next career move.</p>')
        .start();
        }}/>
        setH1Write(typeWritter);
        }

    }, [props.startWritting])
    
    return(
        <section className='section two' id="profil">
            <div className='presentationContainer' id='textMoune'>
            <div id='textWrite'>{h1Write}</div>
            </div>
       </section>
    );
}