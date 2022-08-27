import React, { Component } from "react";
import {
    Route, Routes, NavLink, HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import DeliveryInfo from "./DeliveryInfo";
import OfficeDesign from "./OfficeDesign";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>WYTHEVILLE OFFICE SUPPLY</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/about-us">About Us</NavLink></li>
                        <li><NavLink to="/delivery-info">Delivery Info</NavLink></li>
                        <li><NavLink to="/office-design">Office & Design</NavLink></li>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route exact path="/" element={<Home />}/>
                            <Route path="/about-us" element={<About />}/>
                            <Route path="/delivery-info" element={<DeliveryInfo />}/>
                            <Route path="/office-design" element={<OfficeDesign />}/>
                        </Routes>
                    </div>
                    <footer>
                        Wytheville Office Supply &#9670; 
                        146 West Main Street, Wytheville, VA 24382 &#9670; 
                        Phone: 1-800-344-0356 &#9670; 
                        Fax: 1-800-887-4032 &#9670; 
                        Email Support: lorrieallison@wythevilleofficesupply.com
                    </footer>
                </div>
            </HashRouter>
        );
    }
}

export default Main;