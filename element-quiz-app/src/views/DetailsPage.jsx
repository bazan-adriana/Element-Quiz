import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const DetailsPage = () => {
    const [element, setElement] = useState(null);
    const { atomicNumber } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/elements/${atomicNumber}`)
            .then((res) => setElement(res.data))
            .catch((err) => console.log(err));
    }, [atomicNumber]);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
            }}
        >
            {element ? (
                <div style={{ width: "35%",
                background: "white",
                border: "15px solid #ccc",
                borderRadius: "0.25rem",
                padding: "1rem",}}>
                    <h2>{element.name}</h2>
                    <p>
                        <strong>Symbol: </strong>
                        {element.symbol}
                    </p>
                    <p>
                        <strong>Atomic Number: </strong>
                        {element.atomicNumber}
                    </p>
                    <p>
                        <strong>Atomic Mass: </strong>
                        {element.atomicMass}
                    </p>
                    <p>
                        <strong>Group Block: </strong>
                        {element.groupBlock}
                    </p>
                    <p>
                        <strong>Standard State: </strong>
                        {element.standardState}
                    </p>
                    <p>
                        <strong>Bonding Type: </strong>
                        {element.bondingType}
                    </p>
                    <p>
                        <strong>Year Discovered: </strong>
                        {element.yearDiscovered}
                    </p> 
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            color: "white",
                            backgroundColor: "#007bff",
                            padding: "0.5rem 2rem",
                            borderRadius: "0.25rem",
                            cursor: "pointer",
                        }}
                    >
                        Periodic Table
                    </Link>
                </div>
            ) : (
                <p>Loading...</p>
            )} 
        </div>
    );
};

export default DetailsPage;
