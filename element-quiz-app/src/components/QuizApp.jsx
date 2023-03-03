import React, { useState } from 'react';
import elements from './data';
import ElementQuiz from './ElementQuiz'
import './style/QuizApp.css';


function QuizApp() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState('');

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
            setFeedback('Correct!');
        } else {
            setFeedback('Incorrect!');
        }
        // Move to the next question after a brief delay
        setTimeout(() => {
            setCurrentQuestion(currentQuestion + 1);
            setFeedback('');
        }, 1000);
    };

    return (
        <div className="quiz-app-container">
            <h1>Element Quiz </h1>
            <p>Score: {score}</p>
            {feedback && <p>{feedback}</p>}
            {currentQuestion < elements.length ? (
                <ElementQuiz
                    element={elements[currentQuestion]}
                    handleAnswer={handleAnswer}
                    updateScore={setScore}
                />
            ) : (
                <p>You finished the quiz! Final score: {score}</p>
            )}
        </div>
    );
}

export default QuizApp;
