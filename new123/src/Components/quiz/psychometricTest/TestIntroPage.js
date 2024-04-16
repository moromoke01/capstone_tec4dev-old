import React from 'react'
import logo from '../../../Assets/logo.png'

function TestIntroPage() {
  return (
    <div className="quiz-container">
      <div className="header">
         <img src ={logo} style={{width:150}} alt="logo"/>
       </div>

       <div className='head-intro'>
        <h2>insigntify caareer <br /> psychometric assessment</h2>
       </div>

       <p>Hi Jane Cooper</p>
       <p>Read the following instructions carefully before you start ypur assessmemt</p>
       <p>In this assessment, you will be assessed on different modules in order to give you the best career prediction</p>

        <p>There will be a total of 50 questions in this assessment.</p>
        <p>THe average time taken to complete this assessment is 60 minutes</p>
        <p>THis assessment contains five(5) sections:
            <ul>
                <li>Section A: Cognitive abilities (mathematical Aptitude, LOgical Reasoning)</li>
                <li>Section B: Personality traits( openness to experience, conscientiousness, emotional stability, agreeableness vs assertiveness)</li>
                <li>Section C: Creativity and INnovation</li>
                <li>Section D: Technical Aptitudes</li>
                <li>Section E: Skills and Interest</li>
            </ul>
        </p>

        <p>You need to complete all the questions in each section before proceeding to the next section</p>
    </div>
  );
}

export default TestIntroPage
