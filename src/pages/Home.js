import React, { Component } from "react";
import BestSellers from "../components/BestSellers";
import SaleHotbar from "../components/SaleHotbar";

class Home extends Component {
    render() {
        return (
            <div>
                <div class="wrapper">
                    <div className="box1">
                    <p>Welcome!</p>
                    <p>Whether your office needs paper and pencils, calculators, 
                    art supplies or a complete redesign including state-of-the-art 
                    fully ergonomic offic furnishings, you've come to the right place! 
                    Beginning as "The Lettershop" in 1948, WOS has grown to be the 
                    region's largest, locally owned retailer of office products
                    in Southwest Virginia.</p>
                    </div>
                    <div className="box2">
                        <p>We Offer Home Delivery!</p>
                        <p>Call our Customer Service Today!</p>
                        <p>1-800-344-0356</p>
                    </div>
                    <div className="box3">
                        <p>We are a proud Supplier/Installer for: </p>
                        <p>Haworth, Tarkett, Xerox, Groupe Lacasse and more!</p>
                    </div>
                </div>
                <BestSellers />
                <SaleHotbar />
            </div>
        );
    }
}

export default Home;