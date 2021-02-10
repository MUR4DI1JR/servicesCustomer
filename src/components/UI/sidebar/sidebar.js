import React, {useState} from 'react';
import {connect} from  'react-redux';

import './sidebar.css';
import logo from "../../../assets/better-logo.svg";
import roofIcon from "../../../assets/roof-icon.png";
import {NavLink} from "react-router-dom";
import {auth} from "../../../config/firebaseConfig";


const Sidebar = ({location, city, currentUser}) => {
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
                <div className="link">
                    {currentUser === null ? <NavLink to="/sign-in">Sign in</NavLink> :
                        <button onClick={() => auth.signOut()}>sign out</button>}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state =>({
    location: state.location.location,
    city: state.location.city,
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Sidebar);