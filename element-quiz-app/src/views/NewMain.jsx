import React from "react";
import { Link } from "react-router-dom";
import elements from "../elements";
import "./NewMain.css";

const NewMain = () => {
    console.log(elements);

    return (
        <div className="container">
            <div className="flex row">
                <div className="cell alkali">
                    <Link to={`/elements/${elements[0].atomicNumber}`}>
                        {elements[0].symbol}
                    </Link>
                </div>
                <div className="cell alkali">
                    <Link to={`/elements/${elements[1].atomicNumber}`}>
                        {elements[1].symbol}
                    </Link>
                </div>
            </div>
            <div className="flex row">
                <div className="flex group">
                    <div className="cell alkali">
                        <Link to={`/elements/${elements[2].atomicNumber}`}>
                            {elements[2].symbol}
                        </Link>
                    </div>
                    <div className="cell alkali">
                        <Link to={`/elements/${elements[3].atomicNumber}`}>
                            {elements[3].symbol}
                        </Link>
                    </div>
                </div>
                <div className="flex group">
                    <div className="cell ">
                        <Link to={`/elements/${elements[5].atomicNumber}`}>
                            {elements[5].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[6].atomicNumber}`}>
                            {elements[6].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[7].atomicNumber}`}>
                            {elements[7].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[8].atomicNumber}`}>
                            {elements[8].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[9].atomicNumber}`}>
                            {elements[9].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[10].atomicNumber}`}>
                            {elements[10].symbol}
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex row">
                <div className="flex group">
                    <div className="cell alkali">
                        <Link to={`/elements/${elements[10].atomicNumber}`}>
                            {elements[10].symbol}
                        </Link>
                    </div>
                    <div className="cell alkali">
                        <Link to={`/elements/${elements[11].atomicNumber}`}>
                            {elements[11].symbol}
                        </Link>
                    </div>
                </div>
                <div className="flex group">
                    <div className="cell">
                        <Link to={`/elements/${elements[13].atomicNumber}`}>
                            {elements[13].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[14].atomicNumber}`}>
                            {elements[14].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[15].atomicNumber}`}>
                            {elements[15].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[16].atomicNumber}`}>
                            {elements[16].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[17].atomicNumber}`}>
                            {elements[17].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[18].atomicNumber}`}>
                            {elements[18].symbol}
                        </Link>
                    </div>
                </div>
            </div>
            


            <div className="flex row">
                <div className="flex group">
                    <div className="cell alkali">
                        <Link to={`/elements/${elements[18].atomicNumber}`}>
                            {elements[18].symbol}
                        </Link>
                    </div>
                    <div className="cell alkali">
                        <Link to={`/elements/${elements[19].atomicNumber}`}>
                            {elements[19].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[21].atomicNumber}`}>
                            {elements[21].symbol}
                        </Link>
                    </div>
                </div>
                <div className="flex group">
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[22].atomicNumber}`}>
                            {elements[22].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[23].atomicNumber}`}>
                            {elements[23].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[24].atomicNumber}`}>
                            {elements[24].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[25].atomicNumber}`}>
                            {elements[25].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[26].atomicNumber}`}>
                            {elements[26].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[27].atomicNumber}`}>
                            {elements[27].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[28].atomicNumber}`}>
                            {elements[28].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[29].atomicNumber}`}>
                            {elements[29].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[30].atomicNumber}`}>
                            {elements[30].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[31].atomicNumber}`}>
                            {elements[31].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[32].atomicNumber}`}>
                            {elements[32].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[33].atomicNumber}`}>
                            {elements[33].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[34].atomicNumber}`}>
                            {elements[34].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[35].atomicNumber}`}>
                            {elements[35].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[36].atomicNumber}`}>
                            {elements[36].symbol}
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex row">
                <div className="flex group">
                    <div className="cell alkali">
                        <Link to={`/elements/${elements[36].atomicNumber}`}>
                            {elements[36].symbol}
                        </Link>
                    </div>
                    <div className="cell alkali">
                        <Link to={`/elements/${elements[37].atomicNumber}`}>
                            {elements[37].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[38].atomicNumber}`}>
                            {elements[38].symbol}
                        </Link>
                    </div>
                </div>
                <div className="flex group">
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[39].atomicNumber}`}>
                            {elements[39].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[40].atomicNumber}`}>
                            {elements[40].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[41].atomicNumber}`}>
                            {elements[41].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[42].atomicNumber}`}>
                            {elements[42].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[43].atomicNumber}`}>
                            {elements[43].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[44].atomicNumber}`}>
                            {elements[44].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[45].atomicNumber}`}>
                            {elements[45].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[46].atomicNumber}`}>
                            {elements[46].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[47].atomicNumber}`}>
                            {elements[47].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[48].atomicNumber}`}>
                            {elements[48].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[49].atomicNumber}`}>
                            {elements[49].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[50].atomicNumber}`}>
                            {elements[50].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[51].atomicNumber}`}>
                            {elements[51].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[52].atomicNumber}`}>
                            {elements[52].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[53].atomicNumber}`}>
                            {elements[53].symbol}
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex row">
                <div className="flex group">
                    <div className="cell alkali">
                        <Link to={`/elements/${elements[54].atomicNumber}`}>
                            {elements[54].symbol}
                        </Link>
                    </div>
                    <div className="cell alkali">
                        <Link to={`/elements/${elements[55].atomicNumber}`}>
                            {elements[55].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[56].atomicNumber}`}>
                            {elements[56].symbol}
                        </Link>
                    </div>
                </div>
                <div className="flex group">
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[57].atomicNumber}`}>
                            {elements[57].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[58].atomicNumber}`}>
                            {elements[58].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[59].atomicNumber}`}>
                            {elements[59].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[60].atomicNumber}`}>
                            {elements[60].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[61].atomicNumber}`}>
                            {elements[61].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[62].atomicNumber}`}>
                            {elements[62].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[63].atomicNumber}`}>
                            {elements[63].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[64].atomicNumber}`}>
                            {elements[64].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[65].atomicNumber}`}>
                            {elements[65].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[66].atomicNumber}`}>
                            {elements[66].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[67].atomicNumber}`}>
                            {elements[67].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[68].atomicNumber}`}>
                            {elements[68].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[69].atomicNumber}`}>
                            {elements[69].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[70].atomicNumber}`}>
                            {elements[70].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[71].atomicNumber}`}>
                            {elements[71].symbol}
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex row">
                <div className="flex group">
                    <div className="cell alkali">
                        <Link to={`/elements/${elements[72].atomicNumber}`}>
                            {elements[72].symbol}
                        </Link>
                    </div>
                    <div className="cell alkali">
                        <Link to={`/elements/${elements[73].atomicNumber}`}>
                            {elements[73].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[74].atomicNumber}`}>
                            {elements[74].symbol}
                        </Link>
                    </div>
                </div>
                <div className="flex group">
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[75].atomicNumber}`}>
                            {elements[75].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[76].atomicNumber}`}>
                            {elements[76].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[77].atomicNumber}`}>
                            {elements[77].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[78].atomicNumber}`}>
                            {elements[78].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[79].atomicNumber}`}>
                            {elements[79].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[80].atomicNumber}`}>
                            {elements[80].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[81].atomicNumber}`}>
                            {elements[81].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[82].atomicNumber}`}>
                            {elements[82].symbol}
                        </Link>
                    </div>
                    <div className="cell transitional">
                        <Link to={`/elements/${elements[83].atomicNumber}`}>
                            {elements[83].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[84].atomicNumber}`}>
                            {elements[84].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[85].atomicNumber}`}>
                            {elements[85].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[86].atomicNumber}`}>
                            {elements[86].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[87].atomicNumber}`}>
                            {elements[87].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[88].atomicNumber}`}>
                            {elements[88].symbol}
                        </Link>
                    </div>
                    <div className="cell">
                        <Link to={`/elements/${elements[89].atomicNumber}`}>
                            {elements[89].symbol}
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bottom-rows">
                <div className="flex-end row">
                    <div className="flex group">
                        <div className="cell">
                            <Link to={`/elements/${elements[90].atomicNumber}`}>
                                {elements[90].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link to={`/elements/${elements[91].atomicNumber}`}>
                                {elements[91].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link to={`/elements/${elements[92].atomicNumber}`}>
                                {elements[92].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link to={`/elements/${elements[93].atomicNumber}`}>
                                {elements[93].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link to={`/elements/${elements[94].atomicNumber}`}>
                                {elements[94].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link to={`/elements/${elements[95].atomicNumber}`}>
                                {elements[95].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link to={`/elements/${elements[96].atomicNumber}`}>
                                {elements[96].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link to={`/elements/${elements[97].atomicNumber}`}>
                                {elements[97].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link to={`/elements/${elements[98].atomicNumber}`}>
                                {elements[98].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link to={`/elements/${elements[99].atomicNumber}`}>
                                {elements[99].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link
                                to={`/elements/${elements[100].atomicNumber}`}
                            >
                                {elements[100].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link
                                to={`/elements/${elements[101].atomicNumber}`}
                            >
                                {elements[101].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link
                                to={`/elements/${elements[102].atomicNumber}`}
                            >
                                {elements[102].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link
                                to={`/elements/${elements[103].atomicNumber}`}
                            >
                                {elements[103].symbol}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex-end row">
                    <div className="flex group">
                        <div className="cell">
                            <Link
                                to={`/elements/${elements[104].atomicNumber}`}
                            >
                                {elements[104].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link
                                to={`/elements/${elements[105].atomicNumber}`}
                            >
                                {elements[105].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link
                                to={`/elements/${elements[106].atomicNumber}`}
                            >
                                {elements[106].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link
                                to={`/elements/${elements[107].atomicNumber}`}
                            >
                                {elements[107].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link
                                to={`/elements/${elements[108].atomicNumber}`}
                            >
                                {elements[108].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link
                                to={`/elements/${elements[109].atomicNumber}`}
                            >
                                {elements[109].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link
                                to={`/elements/${elements[110].atomicNumber}`}
                            >
                                {elements[110].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link
                                to={`/elements/${elements[111].atomicNumber}`}
                            >
                                {elements[111].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link
                                to={`/elements/${elements[112].atomicNumber}`}
                            >
                                {elements[112].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link
                                to={`/elements/${elements[113].atomicNumber}`}
                            >
                                {elements[113].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link
                                to={`/elements/${elements[114].atomicNumber}`}
                            >
                                {elements[114].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link
                                to={`/elements/${elements[115].atomicNumber}`}
                            >
                                {elements[115].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link
                                to={`/elements/${elements[116].atomicNumber}`}
                            >
                                {elements[116].symbol}
                            </Link>
                        </div>
                        <div className="cell">
                            <Link
                                to={`/elements/${elements[117].atomicNumber}`}
                            >
                                {elements[117].symbol}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>{" "}
            <br></br> <br></br>
            <Link
                to="/dashboard"
                style={{
                    textDecoration: "none",
                    color: "white",
                    backgroundColor: "#007bff",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.25rem",
                    cursor: "pointer",
                }}
            >
                Details
            </Link>
        </div>
    );
};

export default NewMain;
