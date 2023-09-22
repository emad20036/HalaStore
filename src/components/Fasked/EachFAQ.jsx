// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const EachFAQ = ({ question, answer }) => {

    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  
    const toggleAnswer = () => {
      setIsAnswerVisible(!isAnswerVisible);
    };
    return (
      <div className='mmmm'>
        <div className="faq-item">
          <div className="faq-question" onClick={toggleAnswer}>
            {question}
          </div>
          {isAnswerVisible && <div className="faq-answer">{answer}</div>}
          <hr />
        </div>
      </div>
    );
}

export default EachFAQ