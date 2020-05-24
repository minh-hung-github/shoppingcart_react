import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ProductSortingTop from './ProductSortingTop';
import ShopProductList from './ShopProductList';
import ProductSortingBottom from './ProductSortingBottom';

class ShopProduct extends PureComponent {

    handleSortProductDefault = (newFilter) => {
        const { onChangeSortDefault } = this.props;
        if (onChangeSortDefault) {
            onChangeSortDefault(newFilter);
        }
    }

    handleSortProductLimit = (newFilter) => {
        const { onChangeShowLimit } = this.props;
        if (onChangeShowLimit) {
            onChangeShowLimit(newFilter);
        }
    };

    handleSelectPage = (newFilter) => {
        const { onChangeShowPage } = this.props;
        if (onChangeShowPage) {
            onChangeShowPage(newFilter);
        }
    };

    handleNextPage = (newFilter) => {
        const { onChangeNextPage } = this.props;
        if (onChangeNextPage) {
            onChangeNextPage(newFilter);
        }
    };

    render() {
        const { shopProductList, filter, paginations, onChangeNextPage } = this.props;
        return (
            <div className="main_content">
                <div className="products_iso">
                    <div className="row">
                        <div className="col">
                            <ProductSortingTop
                                filter={filter}
                                paginations={paginations}
                                onChangeSortDefault={this.handleSortProductDefault}
                                onChangeShowLimit={this.handleSortProductLimit}
                                onChangeShowPage={this.handleSelectPage}
                                onChangeNextPage={this.handleNextPage}
                            />
                            <ShopProductList shopProductList={shopProductList} />
                            <ProductSortingBottom
                                filter={filter}
                                paginations={paginations}
                                onChangeShowLimit={this.handleSortProductLimit}
                                onChangeShowPage={this.handleSelectPage}
                                onChangeNextPage={this.handleNextPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ShopProduct.propTypes = {
    shopProductList: PropTypes.array,
    filter: PropTypes.object,
    onChangeSortDefault: PropTypes.func,
    onChangeShowLimit: PropTypes.func,
    paginations: PropTypes.object,
    onChangeShowPage: PropTypes.func,
    onChangeNextPage: PropTypes.func,
};

ShopProduct.defaultProps = {
    shopProductList: [],
    filter: {},
    onChangeSortDefault: null,
    onChangeShowLimit: null,
    paginations: {},
    onChangeShowPage: null,
    onChangeNextPage: null,
}

export default ShopProduct;