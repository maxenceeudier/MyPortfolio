import { useEffect, useState } from "react";
import "../styles/hardSkills.scss";

const logosUrl = [
    "https://res.cloudinary.com/dcjze5qvx/image/upload/v1683661350/logo0_kaw4wb.png",
    "https://res.cloudinary.com/dcjze5qvx/image/upload/v1683661350/logo1_pofqy5.png",
    "https://res.cloudinary.com/dcjze5qvx/image/upload/v1683661350/logo2_fryls2.png",
    "https://res.cloudinary.com/dcjze5qvx/image/upload/v1683661351/logo3_wkyeqj.png",
    "https://res.cloudinary.com/dcjze5qvx/image/upload/v1683661351/logo4_vyvex5.png",
    "https://res.cloudinary.com/dcjze5qvx/image/upload/v1683661356/logo5_dddbtq.png",
    "https://res.cloudinary.com/dcjze5qvx/image/upload/v1683661357/logo6_kw3a2n.png",
    "https://res.cloudinary.com/dcjze5qvx/image/upload/v1683661350/logo7_zfuu5o.png",
    "https://res.cloudinary.com/dcjze5qvx/image/upload/v1683661352/logo8_dcsqhb.png",
    "https://res.cloudinary.com/dcjze5qvx/image/upload/v1683661352/logo9_njb12v.webp",
    "https://res.cloudinary.com/dcjze5qvx/image/upload/v1683661352/logo10_ke8r1x.png",
    "https://res.cloudinary.com/dcjze5qvx/image/upload/v1683661352/logo11_yntzlr.png",
    "https://res.cloudinary.com/dcjze5qvx/image/upload/v1683661354/logo12_alpxup.png",
    "https://res.cloudinary.com/dcjze5qvx/image/upload/v1683661352/logo13_pmjmoh.png",

];

export default function HardSkills()
{
    const [logosHardSkills, setLogosHardSkills] = useState<JSX.Element[]>();

    useEffect(() => {
        if (!logosHardSkills)
        {
            const logosHardSkillsTmp : JSX.Element[] = [];
            for (let i = 0; i < 14; i++)
            {
            logosHardSkillsTmp.push(<div className='logo' data-speed={`${i / 2 + 3}`}><img alt="logo" src={logosUrl[i]} style={{width:'60%', height: '60%'}}/></div>)
            }
            setLogosHardSkills([...logosHardSkillsTmp]);
        }

        const logos = document.querySelectorAll<HTMLElement>(".logo");
        logos.forEach((layer, i) => {
        const placementX = [-5, 20, 40, 50, 80, 100, 105, 80, 70, 50, 40, 20, -10, -20];
        const placementY = [20, 5, 0, 10, 10, 10, 50, 55, 80, 65, 85, 65, 70, 30];
        const size = [100, 135, 50, 120, 100, 140, 90, 100, 60, 90, 100, 60, 70, 130];
        layer.style.top = `${placementY[i]}%`;
        layer.style.left = `${placementX[i]}vh`;
        layer.style.width = `${size[i]}px`;
        layer.style.height = `${size[i]}px`;
        const speed = Number(layer.getAttribute('data-speed'));
        const x = (window.innerWidth + (speed * 100) ) / 100;
        const y = (window.innerHeight + (speed * 2000) ) / 100;
            
            layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
        
        
        document.addEventListener("mousemove", (e) => {
            const logos = document.querySelectorAll<HTMLElement>(".logo");
            logos.forEach((layer, i) => {
                const speed = Number(layer.getAttribute('data-speed'));
                const x = (window.innerWidth + (speed * e.pageX) ) / 100;
                const y = (window.innerHeight + (speed * e.pageY) ) / 100;
                
                layer.style.transform = `translateX(${x}px) translateY(${y}px)`;

            });
        });   
    }, [logosHardSkills])

    return(
        <section className='section tree' id='hardSkills'>
            <div className='hardSkills'>
            <div className='hardSkillsContainer'>
                {logosHardSkills}
                <h1>HardSkills</h1>
            </div>
            </div>
        </section>
    );
}