// Nextbut.jsx
import React, { useState } from "react";
import { Signup } from "./Signup"; // Check if the path is correct
import { Signup2 } from "./Signup2";
import { useNavigate } from 'react-router-dom';

export function Nextbutton() {
    const [active, setactive] = useState(false);
    const navigate = useNavigate();

    const handleNextClick = () => {
        setactive(!active);
        // You can navigate to Signup2 here
        navigate("/signup2");
    };

    return (
        <>
            <button className="signupbutton" onClick={handleNextClick}>Next</button>
            {/* if active is true show the form else hide it */}
            {!active ? null : <Signup2 />}
        </>
    );
}
