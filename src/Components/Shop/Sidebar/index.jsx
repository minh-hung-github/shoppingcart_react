import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Sidebar.scss';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';



class Sidebar extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            minPrice: 0,
            maxPrice: 200000,
        }
    }
    render() {
        const { minPrice, maxPrice } = this.state;
        return (
            <div className="sidebar">
                <div className="sidebar_section">
                    <div className="sidebar_title">
                        <h5>Product Category</h5>
                    </div>
                    <ul className="sidebar_categories">
                        <li><a href="#">Men</a></li>
                        <li className="active"><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>Women</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">New Arrivals</a></li>
                        <li><a href="#">Collection</a></li>
                        <li><a href="categories.html">shop</a></li>
                    </ul>
                </div>

                {/* <!-- Price Range Filtering --> */}
                <div className="sidebar_section">
                    <div className="sidebar_title">
                        <h5>Filter by Price</h5>
                    </div>
                    <p>
                        {/* <input type="text" id="amount" readonly style="border:0; color:#f6931f; font-weight:bold;"></input> */}
                        {/* ${value[0]}-${value[1]} */}
                    </p>
                    <div id="range-slider">
                        <Range
                            min={10000}
                            max={30000000}
                            defaultValue={[minPrice, maxPrice]}
                        />
                    </div>
                    <div className="filter_button"><span>filter</span></div>
                </div>

            </div>
        );
    }
}

Sidebar.propTypes = {

};

export default Sidebar;