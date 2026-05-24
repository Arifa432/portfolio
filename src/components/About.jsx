import { useState } from "react";
export default function About () {
    const hobbies = ['Reading', 'Coding', 'Searching'];

    const [showMore, setShowMore] = useState(false);

    return(
        <div id="about-section" className="about-box">
            <h1 className="about-me">About Me</h1>
            <div className="hobby-side">
                <p className="hobby-title">My Hobbies</p>
                <ul className="hobby-list">
                    {hobbies.map((hobby, index) => (
                        <li key = {index} className="hobby-circle">{hobby}</li>
                    ))}
                </ul>
            </div>

            <div className="text-side">
                <button className="text-side-btn" onClick={() => setShowMore(!showMore)}>
                    {showMore ? "Show Less" : "Show More"}
                </button>
                {showMore &&  <p className="goal-text">My main goal is to become a proficient Full Stack Developer.I am deeply interested in solving complex problems through clean code and building web application that deliver great user experiences. In the near future, I plan to learn advanced state management tools like Redux and backend frameworks to expand my technical expertise</p> }
                
            </div>
        </div>
    )
}