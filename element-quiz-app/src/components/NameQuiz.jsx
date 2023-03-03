import React, { useState } from "react";

function NameQuiz({ element, handleAnswer }) {
    const [answer, setAnswer] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        handleAnswer(answer.toLowerCase() === element.name.toLowerCase());
    };

    return (
        <div>
            <h2>
                What is the name of the element with symbol {element.symbol}?
            </h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <br></br>
                    <input
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                    />
                </label>{" "}
                <br></br>
                <button type="submit">Submit Answer</button> <br></br>
            </form>
        </div>
    );
}

export default NameQuiz;
