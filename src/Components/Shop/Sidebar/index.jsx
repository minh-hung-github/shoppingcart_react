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
            min1: 50000,
            max1: 200000,
        }
    }

    handleChangePrice = (value) => {
        this.setState({ min1: value[0], max1: value[1] });
    }


    render() {
        // const [value, setValue] = React.useState([20, 37]);
        const { min1, max1 } = this.state;
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

                    <div id="range-slider">
                        <div>{min1} - {max1}</div>
                        <Range
                            min={0}
                            max={30000000}
                            defaultValue={[min1, max1]}
                            tipFormatter={value => `${value.toLocaleString('vi')} VND`}
                            onAfterChange={this.handleChangePrice}
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