import './App.css';
import wireFrame from "./assets/Wireframe.svg";
import linkedin from "./assets/LinkedIn.png";

function App() {
  return (
    <>
    <p id='redOV'>Hi, I am</p>
    <h2>Rijul</h2>
    <wireFrame />

    <h2>This website is to blog about my journey into Robotics</h2>
    <ul id='socialFlex'>
      <li className='social'><img src={linkedin} alt='LinkedInd'/><p>LinkedIn</p></li>
    </ul>

    </>
  );
}

export default App;
