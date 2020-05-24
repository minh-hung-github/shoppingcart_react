import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import './Breadcrumbs.scss';
import './Breadcrumbs_responsive.scss';

class Breadcrumbs extends PureComponent {
    render() {
        return (
            <div className="breadcrumbs d-flex flex-row align-items-center">
                <ul>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li className="active"><Link to="/shop"><i className="fa fa-angle-right" aria-hidden="true"></i>Men's</Link></li>
                </ul>
            </div>
        );
    }
}

Breadcrumbs.propTypes = {

};

export default Breadcrumbs;