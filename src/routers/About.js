import React from 'react';
import './About.css';

function About(props) {
    console.log(props);
    return (
        <div className="about_container">
            <span>
                "Freedom is the freedom ti say that two plus two make four. If 
                that is granted, all else
                follows."
            </span>
            <span>- George Orwell, 1984</span>
        </div>
    );
}

export default About;