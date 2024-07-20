import React from 'react';
import './module.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useNavigate } from 'react-router-dom';
import { BASE_PATH } from '../../base_paths';

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="header">
            <div className="left-section">
                <button className="header-button">SHOP</button>
                <button className="header-button">ABOUT</button>
                <button className="header-icon"><SearchRoundedIcon /></button>
            </div>
            <div className="center-section">
                <span onClick={() => { navigate(BASE_PATH) }} className="header-title">THE FIGMA STORE</span>
            </div>
            <div className="right-section">
                <select className="country-selector">
                    <option value="US">UNITED STATES</option>
                    <option value="CA">CANADA</option>
                    <option value="JP">JAPAN</option>
                    <option value="UK">UNITED KINGDOM</option>
                    <option value="EU">EUROPEAN UNION</option>
                    <option value="BR">I'M JUST BROWSING</option>
                    {/* Add more countries as needed */}
                </select>
                <button className="header-button">CART 0</button>
            </div>
        </header>
    );
};

export default Header;
