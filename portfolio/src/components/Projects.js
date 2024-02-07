import React from 'react'

const Projects = () => {
  
  const togit1=()=>{
    window.location.href = 'https://github.com/abhishek2092001/Gchat-app';
  }
  
  return (

      <div className='Project-title'>
        <h1>PROJECTS</h1>
        <p className="p-para">Here you will find some of my personal projects that I created.</p>
        <div className="project1">
            <div className="p1-detail">
                <h1>Multi chat web Application</h1>
                 <p className='parachat'>• A Multichat web application where multiple users can join the group chat and message each other. <br />
•Used HTML , CSS , Javascript , Nodejs , Expressjs. <br />
• Web socket in Nodejs is used to establish the Realtime connection between the users.</p>
            </div>
            <div className="but-detail1"><button className='Details' onClick={togit1} >Details</button></div>
        </div>

        <div className="project1">
            <div className="p1-detail">
                <h1>portfolio website</h1>
                 <p className='parachat'>• Created the portfolio website. <br />
•Used HTML , CSS , Javascript ,React js ,firebase. <br />
• Firebase is used to store the contact details.</p>
            </div>
            <div className="but-detail1"><button className='Details'>Details</button></div>
        </div>
      </div>
    
  )
}

export default Projects
