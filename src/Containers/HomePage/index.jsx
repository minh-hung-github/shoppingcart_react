import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Slider from '../../Components/Home/Slider';
import Banner from '../../Components/Home/Banner';
import NewArrivals from './NewArrivals';
import DealOfTheWeek from '../../Components/Home/DealOfTheWeek';

class HomePage extends PureComponent {
    render() {
        return (
            <div>
                <Slider />
                <Banner />
                <NewArrivals />
                <DealOfTheWeek />
            </div>
        );
    }
}

HomePage.propTypes = {

};

export default HomePage;