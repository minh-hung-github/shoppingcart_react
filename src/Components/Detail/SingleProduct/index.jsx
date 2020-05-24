import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './SingleProduct.scss';
import { Link } from 'react-router-dom';

class SingleProduct extends PureComponent {

    handleShowImage = (image) => {
        // console.log(image);
        const { onChangeShowImage } = this.props;
        if (onChangeShowImage) {
            onChangeShowImage(image);
        }
    }

    render() {
        const { product, imageList, showImage, salePrice } = this.props;
        return (
            <div className="row">
                <div className="col-lg-7">
                    <div className="single_product_pics">
                        <div className="row">
                            <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                                <div className="single_product_thumbnails">
                                    <ul>
                                        <li
                                            className={imageList[0] === showImage ? 'active' : ''}
                                            onClick={() => this.handleShowImage(imageList[0])}
                                        // tai sao ham onClick tren the img thi ko chay duoc
                                        >
                                            <img src={imageList[0]} alt="" data-image="images/single_1.jpg" />
                                        </li>

                                        <li
                                            className={imageList[1] === showImage ? 'active' : ''}
                                            onClick={() => this.handleShowImage(imageList[1])}
                                        >
                                            <img src={imageList[1]} alt="" data-image="images/single_2.jpg" />
                                        </li>

                                        <li
                                            className={imageList[2] === showImage ? 'active' : ''}
                                            onClick={() => this.handleShowImage(imageList[2])}
                                        >
                                            <img src={imageList[2]} alt="" data-image="images/single_3.jpg" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-9 image_col order-lg-2 order-1">
                                <div className="single_product_image">
                                    <div className="single_product_image_background" style={{ backgroundImage: `url(${showImage})` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="product_details">
                        <div className="product_details_title">
                            <h2>{product.name}</h2>
                            <p>{product.shortDescription}</p>
                        </div>
                        <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
                            <span className="ti-truck"></span><span>free delivery</span>
                        </div>
                        <div className="original_price">{product.originalPrice}</div>
                        <div className="product_price">{product.salePrice}</div>
                        <ul className="star_rating">
                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            <li><i className="fa fa-star" aria-hidden="true"></i></li>
                            <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                        </ul>
                        <div className="product_color">
                            <span>Select Color:</span>
                            <ul>
                                <li style={{ background: "#e54e5d" }}></li>
                                <li style={{ background: "#252525" }}></li>
                                <li style={{ background: "#60b3f3" }}></li>
                            </ul>
                        </div>
                        <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                            <span>Quantity:</span>
                            <div className="quantity_selector">
                                <span className="minus" onClick={() => this.handleMinusOrPlusProduct("minus")}><i className="fa fa-minus" aria-hidden="true"></i></span>
                                <span id="quantity_value">0</span>
                                <span className="plus" onClick={() => this.handleMinusOrPlusProduct("plus")}><i className="fa fa-plus" aria-hidden="true"></i></span>
                            </div>
                            <div className="red_button add_to_cart_button"><Link to="#" className="red_button">add to cart</Link></div>
                            <div className="product_favorite d-flex flex-column align-items-center justify-content-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SingleProduct.propTypes = {
    product: PropTypes.object,
    imageList: PropTypes.array,
    salePrice: PropTypes.number,
    showImage: PropTypes.string,
    onChangeShowImage: PropTypes.func,
};

SingleProduct.defaultProps = {
    product: {},
    imageList: [],
    salePrice: 0,
    showImage: '',
    onChangeShowImage: null,
}

export default SingleProduct;