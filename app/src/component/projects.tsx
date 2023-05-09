import ProjectCard from './projectCard';
import { useEffect, useState, useRef } from 'react';
import { gsap} from "gsap";
import { createRoot } from 'react-dom/client';
import "../styles/projects.scss";

interface Project
{
  id: string,
  title: string,
  description: string,
  url: string
};

export default function Projects()
{
    const [projectsList, setProjectsList] = useState<JSX.Element[]>([]);
    const cardPrevIndexRef = useRef(-1);
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('/projo')
        .then(res => {
        if (res.ok)
        {
            return res.json().then(data => {
            setProjects(data.data);
            console.log(data.data);
            let tmpList : JSX.Element[] = [];
            for (let i = 0; i < data.data.length; i++)
            {
                tmpList.push(
                <div className='card' key={i}>
                </div>); 
            }
            setProjectsList(tmpList);
            });
        }
        } )
        .catch(err => console.log(err.message));
    }, []);

    useEffect(() => {
        if (!projects.length)
            return;
        const items = document.querySelectorAll<HTMLElement>('.card');
        items.forEach((e, i) => {
            let child = (
            <ProjectCard
                open={cardPrevIndexRef.current === i } 
                project={
                {title: projects[i].title,
                description: projects[i].description,
                url: projects[i].url
                }}
                onClick={ () => {cardPrevIndexRef.current = cardPrevIndexRef.current === i ? -1 : i; expand(items[i], i)}}  
            />);
            let root = createRoot(e);
            root.render(child);
        });
    
        
        const expand = (item: Element, i: number) => {
        console.log('-------in expand');
        console.log(i);
        console.log(cardPrevIndexRef.current);
        gsap.to(items, {
            width:  i !== cardPrevIndexRef.current? '20vw' : '15vw',
            duration: 2,
            ease: 'elastic(1, .6)'
        })    
        gsap.to(item, {
            width: i === cardPrevIndexRef.current? '60vw' : '20vw',
            duration: 2.5,
            ease: 'elastic(1, .3)'
        })

        let tmp = [...projectsList]
        setProjectsList(tmp);
        };      
    }, [projects, projectsList]);

    return (
        <section className='section four' id='projects'>
            <h1>Projects</h1>
            <div className='projectsContainer' id='scroll'>
            {projectsList}
            </div>
        </section>
    );
}