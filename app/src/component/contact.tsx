import "../styles/contact.scss";

export default function Contact()
{
    return (
        <div className="section five" id="contact">
            <h1>Contact</h1>
            <div className="contactContainer" id='contact'>
                <div className='contact'><a href="https://github.com/maxenceeudier" target="_blank" rel="noreferrer"><img alt='gitHub' src="https://res.cloudinary.com/dcjze5qvx/image/upload/v1683661352/logo10_ke8r1x.png" width={42} height={42}/></a></div>
                <div className='contact'><a href="https://www.linkedin.com/in/maxence-eudier-6a766519b/" target="_blank" rel="noreferrer"><img alt='LK' src="https://res.cloudinary.com/dcjze5qvx/image/upload/v1683661350/linkedin_mr41vs.png" width={42} height={42}/></a></div>
            </div>
        </div>
    );
}