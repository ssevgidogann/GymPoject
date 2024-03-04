import React from "react";
import '../CSS/Plans.css';
import { plansData } from "../data/plansData";
import whiteTick from "../assets/whiteTick.png";

const Plans = () => {
    return(
        <div className="plans-container">
            <div className="blur plan-blur-1"></div>
            <div className="blur plan-blur-2"></div>
            <div className="programs-header" style={{gap: '2rem'}}>
                <span>YOLCULUĞUNUZA ŞİMDİ BİZİMLE BAŞLAMAYA HAZIR MISINIZ?</span>
            </div>

            <div className="plans"> 
            {plansData.map((plan, i) => (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>₺{plan.price}</span>

                    <div className="features">
                        {plan.features.map((features, i) => (
                         <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span key={i}>{features}</span>
                         </div>
                       ))}
                    </div>
                    <div>
                        <span>Daha Fazlasına Bakın</span> 
                    </div>
                    <button className="btn">Şimdi Katılın</button>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Plans;