import React, { useState, useEffect } from "react";
import elements from "./data";

function PropertyQuiz({ handleAnswer }) {
    const [answer, setAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [currentElement, setCurrentElement] = useState(
        elements[Math.floor(Math.random() * elements.length)]
    );

    const handleAnswerClick = (event) => {
        event.preventDefault();
        const isCorrect = answer === currentElement.reactivity;
        handleAnswer(isCorrect);
        setScore((score) => (isCorrect ? score + 1 : score));
        setCurrentElement(
            elements[Math.floor(Math.random() * elements.length)]
        );
        setAnswer("");
    };

    useEffect(() => {
        setCurrentElement(
            elements[Math.floor(Math.random() * elements.length)]
        );
        setAnswer("");
    }, []);

    return (
        <div>
            {/* <h2>Property Quiz</h2> */}
            <h2>
                What property describes the reactivity of {currentElement.name}{" "}
                ({currentElement.symbol})?
            </h2>
            <form>
                <label>
                    Options: <br></br>
                    <select
                        value={answer}
                        onChange={(event) => setAnswer(event.target.value)}
                    >
                        <option value="">Select an option</option>
                        {/* <option value="Very reactive">Very reactive</option> */}
                        <option value="Reactive">Reactive</option>
                        {/* <option value="Moderately reactive">
                            Moderately reactive
                        </option>
                        <option value="Slightly reactive">
                            Slightly reactive
                        </option> */}
                        <option value="Unreactive">Unreactive</option>
                    </select>
                </label>
                <button type="submit" onClick={handleAnswerClick}>
                Submit Answer
                </button>
            </form>
        </div>
    );
}

export default PropertyQuiz;