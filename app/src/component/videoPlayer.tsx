export default function VideoPlayer(props : {
    play? : boolean,
    url : string
}){
    return (
        <video
            controls={props.play ? props.play : false}
            autoPlay={props.play ? props.play : false}
            muted
            loop
            style={{ height: "100%", width: "100%", objectFit: props.play? "contain" : "cover" }} //object-fit:cover
            >
            <source src={props.url} type="video/mp4" />
            </video>
    );

}