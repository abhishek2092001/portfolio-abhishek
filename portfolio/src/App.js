
import office from './image/office.jpg';
import './App.css'
import { Parallax } from 'react-parallax';
import { useState } from 'react';
import Hamburger from 'hamburger-react'
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
 
  const [isOpen, setOpen] = useState(false);
  const[burg,setburg]=useState('block');
 const gotoproject=()=>{
  window.scrollTo({top:1800,left:0,behavior:'smooth'});
 }

 const gotoabout=()=>{
  window.scrollTo({top:900,left:0,behavior:'smooth'});
 }

 const gotocontact=()=>{
  window.scrollTo({top:2650,left:0,behavior:'smooth'});
 }
 const gotohome=()=>{
  window.scrollTo({top:0,left:0,behavior:'smooth'});
 }
  return (
   
   
    <div className="App">
      
      
    <div className="content" >
      
   
      <div className="burger" onClick={()=>{ setburg(burg==='block'?'none':'block')}}>
    <Hamburger  toggled={isOpen} toggle={setOpen} />
    </div>
      <ul style={{ display: burg }}>
      <li  > <a href="" onClick={gotohome}>HOME</a> </li>
      <li > <a href="#" onClick={gotoabout}>ABOUT</a> </li>
      <li > <a href="#" onClick={gotoproject}>PROJECTS</a> </li>
      <li > <a href="#" onClick={gotocontact}>CONTACT</a> </li>
    </ul>

  </div>
    <Parallax bgImage={office} strength={600} >
    <div className="container">
    <div className="container1">
        <div className="container2 cont2">
           <p className='hey'>HEY, I'M ABHISHEK SAXENA</p>
           <p className="para">
           A Frontend focused Web Developer building the Frontend <br></br>of Websites  and Web Applications that leads to the success of the overall product
           </p>
           <button className='but'onClick={gotoproject}>Projects</button>
        </div>
        <div className="container2 cont3">
          <img className="photo"></img>
        </div>
    </div>
    </div>
    </Parallax>
   <div id="About-me"><Aboutme/></div> 
    <div id="skills-set"><Skills/></div>
    <div id="Projects"><Projects/></div> 
   <div id="Contacts"><Contact/></div> 
  <Footer/>
    </div>
  
   
   
  );
}

export default App;
