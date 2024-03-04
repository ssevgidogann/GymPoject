import React from "react";
import '../CSS/Reasons.css';
import nike from '../assets/nike.png';
import tick from '../assets/tick.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import nb from '../assets/nb.png';
import adidas from '../assets/adidas.png';

const Reasons = () => {
    return(
        <div className="Reasons">
            <div className="left">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>

            <div className="right">
                <span>Bazı Sebepler</span>

                <div>
                    <span>Neden Bizi Seçmelisiniz?</span>
                </div>

                <div className="details-r">
                    <div>
                        <img src={tick} alt="" />
                        <span>+140'IN ÜZERİNDE UZMAN KOÇ</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>YENİ TEKNOLOJİLER VE SPOR EKİPMANLARI </span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>AYRICALIKLI STANDARTLAR</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>SADECE SPORA DEĞİL, KENDİNE GELDİĞİN YER</span>
                    </div>
                </div>
                <span style={{
                    color: "var(--gray)",
                    fontWeight: "normal"
                 }}>ORTAKLARIMIZ</span>

                 <div className="partners">
                    <img src={nb} alt=""/>
                    <img src={adidas} alt=""/>
                    <img src={nike} alt=""/>
                 </div>

            </div>
        </div>
    );
} 

export default Reasons;