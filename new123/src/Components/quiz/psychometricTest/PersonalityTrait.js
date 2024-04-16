import React, { useState, useEffect } from 'react';
import logo from '../../../Assets/logo.png'

const PersonalityTrait = () => {
  const [personalTraitQuestions, setPersonalTraitQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    // Fetch cognitive ability questions from the backend
    fetchPersonalTraitQuestions();
  }, []);

  const fetchPersonalTraitQuestions = async () => {
    try {
      // Simulate fetching data from a URL
      const response = await fetch('http://localhost:5000/question/questions');
      const data = await response.json();
      // Filter questions by section 
      const TraitQuestions = data.filter(question => question.section === "Personality Trait");
      setPersonalTraitQuestions(TraitQuestions);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleNext = () =>{
    if (currentQuestionIndex < personalTraitQuestions.length -1) {
      setCurrentQuestionIndex(prevIndex => prevIndex +1);

      setSelectedOption('');
      
    }
  };


  const handlePrevious = () =>{
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex -1);
      setSelectedOption('');
      
    }
  };

  const handleOptionChange = (event) =>{
    setSelectedOption(event.target.value);
  };


  const handleAnswer = (questionIndex, selectedOption) => {
    // Handle user's answer selection
    // You can compare selectedOption with correctAnswer to determine correctness
    // Update UI to reflect user's choice
  };

  const currentQuestion = personalTraitQuestions[currentQuestionIndex];

  return (
    <div className="quiz-container">
       <div className="header">
         <img src ={logo} style={{width:150}} alt="logo"/>
         <h4><b>Section B: Personal Trait Questions</b></h4>

         <span>
          <i>59:49</i>
          <button>End Assessment</button></span>
       </div>
     
      <div className="questions">
        {currentQuestion && ( 
         <div className="question">
           <h4>{currentQuestionIndex + 1}. {currentQuestion.question}</h4>
           <form>
             {currentQuestion.options.map((option, index) => (
              <div className="option-div" key={index}>
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                  />
                  <label htmlFor={`option-${index}`}className="options">{option}</label>
              </div>
             ))}
             </form>
           </div>
        )}
        <div className="bottom-buttons">
          <button className="btn btn-left" onClick={handlePrevious
          }> Previous</button>

          <button className="btn btn-right" onClick={handleNext}> Next</button>
           
        </div>
      </div>
    </div>
  );
};

export default PersonalityTrait;
