import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";
import {nextClick} from "../../../redux/db/dbAction";
import {auth} from "../../../config/firebaseConfig";


import './home.css';
import Buttons from "../../UI/container/Button/buttons";
import Address from "./Address";
import Property from "./property";
import Sidebar from "../../UI/sidebar/sidebar";

const Home = ({location, next, code, nextClick, currentUser}) => {
    return (
        <div className="container">
            <Sidebar/>
            <div className="home">
                {
                    next ?
                        <Property/> :
                        <div className="block">
                            <Address/>
                            <div className="confirm">
                                {location !== '' && code !== '' ?
                                    <Buttons clicked={nextClick}
                                             btnType={location ? "Success" : "Danger"}>Next</Buttons>
                                    :
                                    <Buttons btnType="disable" dis={true}>Next</Buttons>
                                }
                            </div>
                        </div>
                }
                <div className="right_side_bar">
                    {currentUser === null ? <NavLink to="/sign-in">Sign in</NavLink> :
                        <button onClick={() => auth.signOut()}>sign out</button>}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state =>({
    currentUser: state.auth.currentUser,
    location: state.location.location,
    city: state.location.city,
    code: state.location.code,
    next: state.location.next
});

const mapDispatchToProps = dispatch => ({
    nextClick: next => dispatch(nextClick(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);