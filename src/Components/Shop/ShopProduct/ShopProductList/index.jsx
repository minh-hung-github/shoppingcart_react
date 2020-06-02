import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ShopProductList.scss';
import { Link } from 'react-router-dom';


class ShopProductList extends PureComponent {
    render() {
        const { shopProductList } = this.props;
        return (
            <div className="product-grid">

                {/* <!-- Product 1 --> */}
                <ul className="flex-container">
                    {shopProductList.map(product => {
                        return (
                            <li
                                key={product.id}
                                style={{ width: '20%', height: '380px' }}
                            >
                                <Link to={`/products/${product.id}`}>
                                    <div className="product-item men">
                                        <div className="product discount product_filter">
                                            <div className="product_image">
                                                <img src={product.images[0]} alt="" />
                                            </div>
                                            <div className="favorite favorite_left"></div>
                                            <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                                            <div className="product_info">
                                                <h6 className="product_name">{product.name}</h6>
                                                <div className="product_price">{product.salePrice}<span>{product.originalPrice}</span></div>
                                            </div>
                                        </div>
                                        <div className="red_button add_to_cart_button"><Link to="#">add to cart</Link></div>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

ShopProductList.propTypes = {
    shopProductList: PropTypes.array,
};

ShopProductList.defaultProps = {
    ShopProductList: null,
}

export default ShopProductList;