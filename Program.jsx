import React from "react";
import '../CSS/Program.css';
import { programData } from "../data/programData";
import RightArrow from "../assets/rightArrow.png";

const Program = () => {
    return (
        <> 
    <div className="programs" id="programs">
        <div className="programs-header">
            <span>Kişiye Özel</span>
            <span>Programlarımıza</span>
            <span>Ulaşın</span>
        </div>
    </div>

    <div className="program-categories">
        {programData.map((program) => (
            <div className="category">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now">
                    <span>Şimdi Katıl</span>
                    <img src={RightArrow} alt="" />
                </div>
            </div>
     ))}
    </div>
        </>
    
    );
}
export default Program;