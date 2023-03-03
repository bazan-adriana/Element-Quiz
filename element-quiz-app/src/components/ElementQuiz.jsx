import React, { useState } from 'react';
import SymbolQuiz from '../components/SymbolQuiz';
import NameQuiz from '../components/NameQuiz';
import PropertyQuiz from '../components/PropertyQuiz';
import ReactivityQuiz from '../components/ReactivityQuiz';


function ElementQuiz({ element, handleAnswer }) {
    const [quizType, setQuizType] = useState('symbol');

    const handleNextQuestion = () => {
        const types = ['symbol', 'name', 'property', 'reactivity'];
        const nextType = types[Math.floor(Math.random() * types.length)];
        setQuizType(nextType);
    };

    let quiz;
    if (quizType === 'symbol') {
        quiz = <SymbolQuiz element={element} handleAnswer={handleAnswer} />;
    } else if (quizType === 'name') {
        quiz = <NameQuiz element={element} handleAnswer={handleAnswer} />;
    } else if (quizType === 'property') {
        quiz = <PropertyQuiz element={element} handleAnswer={handleAnswer} />;
    } else if (quizType === 'reactivity') {
        quiz = <ReactivityQuiz element={element} handleAnswer={handleAnswer} />;
    }

    return (
        <div>
            {quiz}
            <button onClick={handleNextQuestion}>Next Question</button>
        </div>
    );
}

export default ElementQuiz;
