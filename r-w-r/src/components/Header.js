import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg";
import resume from "../assets/RijulCV.pdf";

import "./css/Header.css";

const Header = () => {
    return(
        <>
        <div id='header'>
        <nav>
        <Link to="/" id='left'><img src={logo} alt="logo" id='logo'/></Link>
        <ul id='right'>
            <li><Link to="aboutMe">About Me</Link></li>
            <li><Link to="projects">Projects</Link></li>
            <li><Link to="drone">Drone</Link></li>
            <li><Link to="voiceRecorder">Voice Rec</Link></li>
            <li><Link to="contact">Contact</Link></li>
            <li><a href={resume} download="Rijul's Resume.pdf">Resume</a></li>
        </ul>
        </nav>
        </div>
        </>
    );
}

export default Header;