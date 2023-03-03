import { useState, useEffect } from "react";
import axios from "axios";

function DashboardPage() {
    const [elements, setElements] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/elements")
            .then((response) => setElements(response.data))
            .catch((error) => setError(error.message));
    }, []);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
            }}
        >
            {error ? (
                <div style={{ color: "red" }}>Error: {error}</div>
            ) : (
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        maxWidth: "1000px",
                    }}
                >
                    {elements.map((element) => (
                        <div
                            key={element.atomicNumber}
                            style={{ margin: "1rem", width: "18rem" }}
                        >
                            <div
                                style={{
                                    border: "15px solid #ccc",
                                    borderRadius: "0.25rem",
                                    padding: "1rem",
                                }}
                            >
                                <div
                                    style={{
                                        marginTop: "0.5rem",
                                        fontSize: "1.3rem",
                                        color: "#777",
                                    }}
                                >
                                    Atomic Number: {element.atomicNumber}
                                </div>
                                <h3>{element.symbol}</h3>
                                <p>{element.name}</p> <br></br>
                                <a
                                    href={`/elements/${element.atomicNumber}`}
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                        backgroundColor: "#007bff",
                                        padding: "0.5rem 2rem",
                                        borderRadius: "0.25rem",
                                        cursor: "pointer",
                                    }}
                                >
                                    Details
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DashboardPage;
