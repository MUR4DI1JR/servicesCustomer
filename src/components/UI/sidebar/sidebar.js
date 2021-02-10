import React, {useState} from 'react';
import {connect} from  'react-redux';

import './sidebar.css';
import logo from "../../../assets/better-logo.svg";
import roofIcon from "../../../assets/roof-icon.png";


const Sidebar = ({location, city}) => {
    const [active, setActive] = useState(true);

    const showSideBar = (e) => {
        e.preventDefault();
        if(active === true) {
            setActive(false);
        }else{
            setActive(true)
        }
    };

    return (
        <div className="menu">
            <div className={active ? null : "wallpaper"} onClick={showSideBar}/>
            <div className={active ? "side_bar" : "side_bar".concat(" side_bar-active")}>
                <div className={active ? "burger-btn" : "burger-btn".concat(" burger-btn-active")}>
                    <a href="#" className={active ? "menu-btn" : "menu-btn".concat(" menu-btn-active")}
                       onClick={showSideBar}><span></span></a>
                </div>
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <div className="item_sidebar">
                        <img src={roofIcon} alt="ava"/>
                        {location ?
                            <div className="address">
                                <p>{city}</p>
                                <span>{location}</span>
                            </div> :
                            <p>New refinance</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state =>({
    location: state.location.location,
    city: state.location.city
});

export default connect(mapStateToProps)(Sidebar);