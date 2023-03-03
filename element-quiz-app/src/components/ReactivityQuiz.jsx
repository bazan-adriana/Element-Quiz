import React, { useState } from 'react';


function ReactivityQuiz({ element, handleAnswer }) {
    const reactivities = [
        { label: 'Reactive with water', value: 'reacts with water' },
        { label: 'Reactive with acid', value: 'reacts with acid' },
        { label: 'Reactive with oxygen', value: 'reacts with oxygen' },
    ];

    const [answers, setAnswers] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const selectedAnswers = reactivities.filter((reactivity) => answers.includes(reactivity.value));
        const isCorrect = selectedAnswers.every((selectedAnswer) => element.reactivity.includes(selectedAnswer.value));
        handleAnswer(isCorrect);
    };

    return (
        <div>
            <h2>Which of the following statements describe the reactivity of the element with symbol {element.symbol}? (Select all that apply)</h2>
            <form onSubmit={handleSubmit}>
                {reactivities.map((reactivity) => (
                    <div key={reactivity.value}>
                        <input
                            type="checkbox"
                            id={reactivity.value}
                            name={reactivity.value}
                            value={reactivity.value}
                            checked={answers.includes(reactivity.value)}
                            onChange={(e) => {
                                const selectedAnswers = e.target.checked ? [...answers, e.target.value] : answers.filter((answer) => answer !== e.target.value);
                                setAnswers(selectedAnswers);
                            }}
                        />
                        <label htmlFor={reactivity.value}>{reactivity.label}</label>
                    </div>
                ))}
                <br></br>  <button type="submit">Submit Answer</button> <br></br>
            </form>
        </div>
    );
}

export default ReactivityQuiz;
