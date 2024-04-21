import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

import wireFrame from "./assets/Wireframe.svg";
import linkedin from "./assets/LinkedIn.svg";
import gitHub from "./assets/GitHub.svg";
import email from "./assets/Email.svg";
import resume from "./assets/Resume.svg";
import mascot from "./assets/Group.svg";
import cookies from "./assets/cookies.svg";
import arrow from "./assets/Arrow.svg";

function App() {
  return (
    <>
    <header>
    <Header />
    </header>

    <div id="app">
    <div id="flexContainer">
    <div id="leftFlex">
      <p id='redOV'>Hi, I am</p>
      <h2>Rijul</h2>
      <wireFrame />

      <h3>This website is to blog about my journey into Robotics</h3>
      <ul id='socialFlex'>
        <li className='social'>
          <img src={linkedin} alt='LinkedInd'/>
          <p>LinkedIn</p>
        </li>
        <li className='social'>
          <img src={gitHub} alt='GitHub'/>
          <p>GitHub</p>
        </li>
        <li className='social'>
          <img src={email} alt='Email'/>
          <p>rijuldas@outlook.com</p>
        </li>
        <li className='social'>
          <img src={resume} alt='Resume'/>
          <p>Resume</p>
        </li>
      </ul>
    </div>
    <div id="rightFlex">
      <img src={mascot} alt='Mascot'/>
    </div>
    </div>
    <hr />

    <div className='center'>
    <h4>More About This Website</h4>
    <p id='text'>This website will be made and maintained by me, Rijul. 
      This is not the show of my skills at web development 
      just a way to keep track of my robotics journey. 
      I am a comp sci student, you can learn more about 
      me from clicking “About Me” in the header. 
      I will hopefully making posts / updates on each of 
      the projects I am working on at least once per week. 
      I do not have much clue about what I am doing in this sector 
      so this will be a great learning experience for me!
    </p>
    </div>

    <div className='center'>
      <h4>Current Projects</h4>
      <ul id='projectList'>
        <li>
          <h5>Drone</h5>
          <img src={cookies} alt='cookies placeholder' />
          <div className='flex'>
          <p className='moreInfo'>More Info</p>
          <img src={arrow} alt='more info arrow' />
          </div>
          <hr />
          <p className='basicInfo'>This drone will be made from scratch using sensors 
            and a esp32 to be able to do some cool stuff.
          </p>
          <hr />
        </li>

        <li>
          <h5>Voice Recorder</h5>
          <img src={cookies} alt='cookies placeholder' />
          <div className='flex'>
          <p className='moreInfo'>More Info</p>
          <img src={arrow} alt='more info arrow' />
          </div>
          <hr />
          <p className='basicInfo'>This Voice Recorder will be made to act sort of like a dash cam 
            but for your general life.
          </p>
          <hr />
        </li>
      </ul>
    </div>

    
    
    </div>
    {/* <footer>
      <Footer />
    </footer> */}
    <Footer />
    </>
  );
}

export default App;
