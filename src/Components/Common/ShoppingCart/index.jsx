import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ShoppingCart.scss';
import { bindActionCreators } from 'redux';
import { deleteCart } from '../../../action/cart';

class ShoppingCart extends PureComponent {

    handleDeleteCart = (cart) => {
        const { deleteCart } = this.props;

        deleteCart(cart);
    }

    render() {
        const { cartList, totalPrice } = this.props;
        return (
            <>
                <div className="container">
                    <div className="clearfloat">
                        <h2 className="float_left">Cart List</h2>
                        <p className="float_right"><h3>Total Price: {totalPrice} VND</h3></p>
                    </div>
                    <div className="row">

                        <ul className="width">
                            {cartList.map(cart => {
                                return (
                                    <li key={cart.product.id} >
                                        <div className="li_detail">
                                            <div className=" image">
                                                <img src={cart.product.images[0]} />
                                            </div>
                                            <div className=" detail">
                                                <p >{cart.product.name}</p>
                                                <p> Quantity: {cart.quantity}</p>
                                                <p>Price: {cart.product.salePrice} VND</p>
                                                <p className="delete_cart">
                                                    <span onClick={() => this.handleDeleteCart(cart)}>Delete</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>



                {/* <section className="shoppingCart-section">
                    <div className="container">
                        <div className="layout">
                            <div className="row">
                                <div className="col-12 col-lg-9">
                                    <h2>Product List</h2>
                                    <ul>
                                        {cartList.map(cart => {
                                            return (
                                                <li key={cart.product.id}>
                                                    <div className="cartproduct">
                                                        <div className="cartproduct__img">
                                                            <img src={cart.product.images[0]} alt="" />
                                                        </div>
                                                        <div className="cartproduct__text">
                                                            <div className="cartproduct__name">
                                                                <p >{cart.product.name}</p>
                                                                <p className="cartproduct__delete">
                                                                    <span onClick={() => this.handleDeleteCart(cart)}>Delete</span>
                                                                </p>
                                                            </div>
                                                            <div className="cartproduct__price">
                                                                <p>Price: {cart.product.salePrice} VND</p>
                                                                <p> Quantity: {cart.quantity}</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>

                                </div>
                                <div className=" col-12 col-lg-3">
                                    <p className="cartproduct__totalprice">Total Price: {totalPrice} VND</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section> */}
            </>

        );
    }
}

ShoppingCart.propTypes = {
    cartList: PropTypes.array.isRequired,
    totalPrice: PropTypes.number.isRequired,

    deleteCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    cartList: state.cartReducer.cartList,
    totalPrice: state.cartReducer.totalPrice,
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        deleteCart: deleteCart,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);