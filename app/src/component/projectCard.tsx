import VideoPlayer from "./videoPlayer";

export default function ProjectCard(props: {onClick: () => void ,open: boolean, project: {title: string, description: string, url: string}}) : JSX.Element{
    return (props.open?   
        <div style={{display:'flex', height: '100%'}} onClick={() => props.onClick()}>
            <div style={{width: '70%'}}>
                <VideoPlayer play={true} url={props.project.url} />
            </div>
            <div style={{width:'30%', display:'flex', flexDirection:'column', alignItems:'center', color:'black'}}>
                <h2 style={{height: '20%', display: "flex", alignItems: 'center'}}>{props.project.title}</h2>
                <div style={{width: '60%', height: '78%', overflow: 'scroll', textAlign: 'left', whiteSpace: 'normal'}}>
                    <p>{props.project.description}</p>
                </div>
            </div>
        </div>
        :
        <div style={{display:'flex', height: '100%', flexDirection:'column'}} onClick={() => props.onClick()}>
           <div style={{width: '100%', height: '70%'}}>
            <VideoPlayer url={props.project.url}/>
           </div>
            <div style={{height:'30%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', color:'black'}}>
                <h2>{props.project.title}</h2>
            </div>
        </div> 
    );
}