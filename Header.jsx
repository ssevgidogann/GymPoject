import React, { useState } from "react";
import '../CSS/Header.css';
import Logo from '../assets/logo.png';
import Bars from '../assets/bars.png';
import {Link} from 'react-scroll';

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false)
    return (
        <div className="header">
            <img src={Logo} alt="" className="logo" />

            {(menuOpened === false && mobile === true) ? (
                <div style={{
                    backgroundColor: 'var(--appColor)',
                    padding: '0.5rem',
                    borderRadius: '5px'
                }}
                onClick={() => setMenuOpened(true)}>
                    <img src={Bars}
                        alt=""
                        style={{ width: '1.5rem', height: '1.5rem' }}>
                    </img>
                </div>
            ) :
                <ul className="header-menu">
                    <li>
                        <Link
                        onClick={() => setMenuOpened(false)}
                        to="header"
                        span={true}
                        smooth={true}>Anasayfa</Link>
                    </li>
                    <li>
                        <Link
                    onClick={() => setMenuOpened(false)}
                    to="programs"
                        span={true}
                        smooth={true}>
                             Programlar
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="aboutus"
                        span={true}
                        smooth={true}
                        onClick={() => setMenuOpened(false)}>
                            Hakkımızda
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => setMenuOpened(false)}
                            to="plans"
                        span={true}
                        smooth={true}>

                            Planlar
                        </Link>
                    </li>
                    <li onClick={() => setMenuOpened(false)}>
                        <Link
                        to="testiminiols"
                        span={true}
                        smooth={true}>
                            Yorumlar
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => setMenuOpened(false)}
                        to="contact"
                        span={true}
                        smooth={true}>
                        İletişim
                        </Link>
                    </li>
                </ul>
            }
        </div>
    );
}

export default Header;