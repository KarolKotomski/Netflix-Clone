import React from "react";
import logo from "../images/netflix_logo.png";
import { Link } from "react-router-dom";

const NoMatchHeader = () => {
    return (
        <header className="noMatch_header">
        <div className='container_long'>
            <div className='noMatch_header_container_long'>
            <Link to='/' onClick={() => window.scrollTo(0, 0)}>
						;
						<img src={logo} alt='netflix logo' />
					</Link>
            </div>
        </div>
    </header>
    )
};

export default NoMatchHeader;
