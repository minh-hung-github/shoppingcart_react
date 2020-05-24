import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ArrivalsProductList.scss';
import { Link } from 'react-router-dom';

class ArrivalsProductlist extends PureComponent {
    render() {
        const { arrivalsProductList } = this.props;
        return (
            <div className="row">
                <div className="col">
                    <div className="product-grid container"
                        data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>

                        <ul className="flex-container">
                            {arrivalsProductList.map(product => {
                                return (
                                    <li
                                        key={product.id}
                                        style={{ width: '20%', height: '380px' }}
                                    >
                                        <Link to={`/products/${product.id}`}>
                                            <div className="product-item">
                                                <div className="product discount product_filter">
                                                    <div className="product_image">
                                                        <img src={product.images[0]} alt="" />
                                                    </div>
                                                    <div className="favorite favorite_left"></div>
                                                    <div
                                                        className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                                                        <span>-$20</span>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_name"><a href="single.html">{product.name}</a></h6>
                                                        <div className="product_price">{product.salePrice}<span>{product.originalPrice}</span></div>
                                                    </div>
                                                </div>
                                                <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

ArrivalsProductlist.propTypes = {
    arrivalsProductList: PropTypes.array,
};

ArrivalsProductlist.defaultProps = {
    arrivalsProductList: [],
}

export default ArrivalsProductlist;