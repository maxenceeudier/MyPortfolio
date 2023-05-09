import { useEffect, useState } from 'react';
import '../styles/App.css';
import "../styles/app.scss";
import Mountains from '../component/mountains';
import TopBar from '../component/topBar';
import Presentation from '../component/presentation';
import HardSkills from '../component/hardSkills';
import Projects from '../component/projects';
import Contact from '../component/contact';

function App() {
  const [maxAnimation, setMaxAnimation] = useState(true);
  const [startWritting, setSartWritting] = useState(false);

  useEffect(() => {
    let title = document.getElementById("title");
    let firstMontains = document.getElementById("firstMontains");
    let secondMontains = document.getElementById("secondMontains");
    let moune = document.getElementById("moune");
    let ground = document.getElementById("ground");
    let max = document.getElementById("max");
    let textMoune = document.getElementById("textMoune");
    let contact = document.getElementById("contact");
    let hardSkills = document.getElementById("hardSkills");
    window.addEventListener("scroll", (e) => {
      let value = window.scrollY;
      console.log(value);
      if (value > 2900 && contact)
      {
        e.preventDefault();
        return;
      }
      
      if (!value)
        setMaxAnimation(true);
      else
        setMaxAnimation(false);
      
      if (title && firstMontains && secondMontains
        && moune && ground && max && textMoune && contact && hardSkills)
      {
        moune.style.marginTop = 1.5 * value + 'px';
        hardSkills.style.marginTop = - 0.1 * value + 'px';
        textMoune.style.marginTop = 0.2 * value + 'px';
        title.style.marginTop = 1.5 * value + 'px';
        firstMontains.style.top = value * 0.5 + 'px';
        secondMontains.style.top = value * 1.2 + 'px';
        ground.style.top = value * 0 + 'px';

        if (value > 520)
        { 
          moune.style.zIndex = '6';
        }
        else
        {
          moune.style.zIndex = '2';
        }
        
        if (value > 600)
        {
          if (value < 952)
          {
            if (value < 820)
              moune.style.background = '#f0f0f0';
            else
            {
              moune.style.background = `url("https://res.cloudinary.com/dcjze5qvx/image/upload/v1683661362/profil_l934zb.jpg")`;
              moune.style.backgroundSize = 'cover';
            }
            moune.style.right = 45 - (0.06 * (value - 600)) + '%';
            moune.style.marginTop = ((1.5 * 600) - (0.9 * 600)) +  (0.9 * value) + 'px';
          }
          else
          {
            
            moune.style.right = 45 - (0.06 * (952 - 600)) + '%';
            moune.style.marginTop = ((1.5 * 600) - (0.9 * 600)) +  (0.9 * 952) + 'px';
          }
        }
        else
        {
          moune.style.background = '#f0f0f0';
          moune.style.right = '45%'
        }
        if (value > 780)
        {
          setSartWritting(true);
        } 
      }

    });
  }, []);

  useEffect(() => {
    const max = document.getElementById('max');
    console.log(maxAnimation);
    if (!maxAnimation && max)
    {
      max.style.opacity = '0';
    }
    else if (max)
    {
      max.style.opacity = '1';
    }
  }, [maxAnimation]);




  return (
    <div>
      <span id='top'></span>
      <TopBar/>
      <div className='moune' id='moune'></div>
      <Mountains/>
      <Presentation startWritting={startWritting}/> 
      <HardSkills />
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
