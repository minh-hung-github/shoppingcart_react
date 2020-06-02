import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Header extends PureComponent {
    render() {
        const { quantityTotal } = this.props;
        return (
            <>
                <header className="header trans_300">

                    {/* <!-- Top Navigation --> */}

                    <div className="top_nav">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="top_nav_left">free shipping on all u.s orders over $50</div>
                                </div>
                                <div className="col-md-6 text-right">
                                    <div className="top_nav_right">
                                        <ul className="top_nav_menu">

                                            {/* <!-- Currency / Language / My Account --> */}
                                            <li className="language">
                                                <a href="#">
                                                    English
                                <i className="fa fa-angle-down"></i>
                                                </a>
                                                <ul className="language_selection">
                                                    <li><a href="#">French</a></li>
                                                    <li><a href="#">Italian</a></li>
                                                    <li><a href="#">German</a></li>
                                                    <li><a href="#">Spanish</a></li>
                                                </ul>
                                            </li>
                                            <li className="account">
                                                <a href="#">
                                                    My Account
                                <i className="fa fa-angle-down"></i>
                                                </a>
                                                <ul className="account_selection">
                                                    <li><a href="#"><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</a>
                                                    </li>
                                                    <li><a href="#"><i className="fa fa-user-plus"
                                                        aria-hidden="true"></i>Register</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Main Navigation --> */}

                    <div className="main_nav_container">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-right">
                                    <div className="logo_container">
                                        <a href="#">Nordic<span>Shop</span></a>
                                    </div>
                                    <nav className="navbar">
                                        <ul className="navbar_menu">
                                            <li><NavLink to="/" exact>home</NavLink></li>
                                            <li><NavLink to="/shop" >shop</NavLink></li>
                                            <li><NavLink to="/promotion" >promotion</NavLink></li>
                                            <li><a href="https://nordiccoder.com/blog" target="blank">blog</a></li>
                                            <li><NavLink to="/contact" >contact</NavLink></li>
                                        </ul>
                                        <ul className="navbar_user">

                                            <li className="checkout">
                                                <Link to="/products/shoppingcart">
                                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                    <span id="checkout_items" className="checkout_items">{quantityTotal}</span>
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="hamburger_container">
                                            <i className="fa fa-bars" aria-hidden="true"></i>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>

                </header>
            </>
        );
    }
}

Header.propTypes = {
    quantityTotal: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
    quantityTotal: state.cartReducer.quantityTotal,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({

    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);