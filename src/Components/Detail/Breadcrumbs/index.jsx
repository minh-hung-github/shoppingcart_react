import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Breadcrumbs.scss';

class Breadcrumbs extends PureComponent {
    render() {
        return (
            <div className="row">
                <div className="col">

                    {/* <!-- Breadcrumbs --> */}

                    <div className="breadcrumbs d-flex flex-row align-items-center">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop"><i className="fa fa-angle-right" aria-hidden="true"></i>Men's</Link></li>
                            <li className="active"><Link to="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Single Product</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

Breadcrumbs.propTypes = {

};

export default Breadcrumbs;