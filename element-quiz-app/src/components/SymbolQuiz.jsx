import React, { useState } from "react";

function SymbolQuiz({ element, handleAnswer }) {
    const [userAnswer, setUserAnswer] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        handleAnswer(userAnswer.toLowerCase() === element.name.toLowerCase());
    };

    return (
        <div>
            <h2>What element has the symbol {element.symbol}?</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Your answer: <br></br>
                    <input
                        type="text"
                        value={userAnswer}
                        onChange={(event) => setUserAnswer(event.target.value)}
                    />
                </label>{" "}
                <br></br>
                <button type="submit">Submit Answer</button> <br></br>
            </form>
        </div>
    );
}

export default SymbolQuiz;
