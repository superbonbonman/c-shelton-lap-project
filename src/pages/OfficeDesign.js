import React, { Component } from "react";
import office1 from '../images/officedesign1.jpg';
import office2 from '../images/officedesign2.jpg';
import office3 from '../images/officedesign3.jpg';
import office4 from '../images/officedesign4.jpg';
import office5 from '../images/officedesign5.jpg';
import office6 from '../images/officedesign6.jpg';

class OfficeDesign extends Component {
    render() {
        return (
            <div>
                <h2>Office & Design</h2>
                <p>Interested in redesigning your office or workspace?</p>
                <p>Wytheville Office Supply provides Office Furnishings and Design services to help you get 
                your workspace looking and feeling like a better place to work. </p>
                <h3>Executive Office Furnishings:</h3>
                <img src={office1} alt="office" />
                <ul>
                    <li>Desks and Seating</li>
                    <li>Tables</li>
                    <li>Computer Furniture</li>
                    <li>Metal Desks</li>
                    <li>Panel Systems</li>
                </ul>
                <img src={office2} alt="office" />
                <h3>Project Management Services:</h3>
                <img src={office3} alt="office" />
                <ul>
                    <li>Carpet, featuring Tarkett</li>
                    <li>Ceramic and VCT Tile</li>
                    <li>Wallpaper/Wall Covering</li>
                    <li>Blinds & Window Treatments</li>
                    <li>Space Planning with Giza</li>
                    <li>Computer Aided Layouts & Design</li>
                </ul>
                <img src={office4} alt="office" />
                <p>Haworth, Groupe Lacasse, quality names for your work environment</p>
                <img src={office5} alt="office" />
                <p>Let Wytheville Office Supply design your next work environment!</p>
                <p>We are skilled in designing office or industrial environments that are 
                ergonomic, stylish, and durable</p>
                <img src={office6} alt="office" />
                <p>Call 1-800-344-0356 to get started today!</p>
            </div>
        );
    }
}

export default OfficeDesign;