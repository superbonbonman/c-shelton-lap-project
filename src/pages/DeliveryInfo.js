import React, { Component } from "react";

class DeliveryInfo extends Component {
    render() {
        return (
            <div>
                <h2>Delivery Info</h2>
                <p>Wytheville Office Supply proudly provides deliveries to over 20 counties 
                in the region through our own fleet of delivery drivers dedicated to getting 
                your goods delivered to you every week</p>
                <ul>
                    <li>Mondays: Carroll County Region</li>
                    <li>Tuesdays: Roanoke County Region</li>
                    <li>Wednesdays: Wythe-Bland Region</li>
                    <li>Thursdays: Pulaski County Region</li>
                    <li>Fridays: Christiansburg/Blacksburg Region</li>
                    <li>Saturdays: Abingdon Region</li>
                    <li>Sundays: Mt. Rogers Region</li>
                </ul>
                <p>To schedule a delivery call us at 1-800-344-0356!</p>
            </div>
        );
    }
}

export default DeliveryInfo;