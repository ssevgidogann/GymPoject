import React from "react";
import '../CSS/Hero.css';
import Header from "./Header";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import NumberCounter from 'number-counter';
import { motion } from 'framer-motion';

const Hero = () => {
    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true:false;
    return (
        <>
            <div className="hero" id="home">
            <div className="blur hero-blur"></div>
                <div className="left-h">
                    <Header />

                    <div className="the-best-ad">
                        <motion.div
                            initial={{ left: mobile? '165px': '238px'}}
                            whileInView={{ left: '8px' }}
                            transition={{ ...transition, type: 'tween' }}>
                        </motion.div>
                        <span>SPORA DAİR ARADIĞIN HER ŞEY BURADA!</span>
                    </div>

                    <div className="hero-text">
                        <div>
                            <span>SPORA DEĞİL KENDİNE GELDİĞİN YER</span>
                        </div>
                        <div>
                            <p>
                                En yeni teknolojiler ve spor ekipmanlarıyla, spor deneyimini bir adım ileri taşı!Profesyonel eğitmenler ile birlikte antrenman yap, en yüksek verimi al.
                            </p>
                        </div>
                    </div>

                    <div className="figures">
                        <div>
                            <span>
                                <NumberCounter 
                                   end={140} 
                                   start={100} 
                                   delay = '4'
                                   preFix = "+"/>
                                </span>
                            <span>uzman antrenörler</span>
                        </div>
                        <div>
                            <span>
                            <NumberCounter 
                                   end={978} 
                                   start={800} 
                                   delay = '4'
                                   preFix = "+"/>
                            </span>
                            <span>üye katılımı</span>
                        </div>
                        <div>
                            <span>
                            <NumberCounter 
                                   end={50} 
                                   start={0} 
                                   delay = '4'
                                   preFix = "+"/>
                            </span>
                            <span>fitness programları</span>
                        </div>
                    </div>

                    <div className="hero-button">
                        <button className="btn">Başla</button>
                        <button className="btn">Daha Fazlası</button>
                    </div>
                </div>


                <div className="right-h">
                    <button className="btn">Şimdi Katıl</button>

                    <motion.div
                        initial={{ right: "-1rem" }}
                        whileInView={{ right: "4rem" }}
                        className="heart-rate"
                        transition={transition}>
                        <img src={Heart} alt="" />
                        <span>Kalp Atışı</span>
                        <span>116 BPM</span>
                    </motion.div>

                    <img src={hero_image} alt="" className="hero-image" />
                    <motion.img
                    initial = {{right: "11rem"}}
                    whileInView={{right: "20rem"}}
                    transition={transition}
                    src= {hero_image_back} alt="" className="hero-image-back">
                    </motion.img>

                    <motion.div
                        transition={transition}
                        initial={{ right: "37rem" }}
                        whileInView={{ right: "28rem" }}
                        className="calories">
                        <img src={Calories} alt="" />
                        <div>
                            <span>Yakılan Kalori</span>
                            <span>220kcal</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </>
    );
}

export default Hero;