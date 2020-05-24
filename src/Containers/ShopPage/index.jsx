import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../../Components/Shop/Sidebar';
import Breadcrumbs from '../../Components/Shop/Breadcrumbs';
import ShopProduct from '../../Components/Shop/ShopProduct';
import productApi from '../../api/productApi.js';



class ShopPage extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            filter: {
                _page: 1,
                _limit: 12,
                _sort: 'originalPrice',
                _order: 'asc',
                salePrice_gte: 10000,
                salePrice_lte: 200000,
            },
            paginations: {
                _page: 1,
                _limit: 12,
                _totalRows: 1,
            },
            shopProductList: [],
            // showNumberProduct: 0,
            // defaultSorting: '',

        }
    }

    async componentDidMount() {
        try {
            const productList = await productApi.getAll(this.state.filter);
            console.log(productList);
            this.setState({ paginations: productList.pagination, shopProductList: productList.data, })
        } catch (error) {
            console.log('Failed to get data', error.message);
        }
    }

    handleSortProductDefault = async (newFilter) => {
        try {
            const newProductList = await productApi.getAll(newFilter);
            // console.log(newProductList);
            this.setState({ filter: newFilter, shopProductList: newProductList.data, paginations: newProductList.pagination });
        } catch (error) {
            console.log('Failed get to data', error.message);
        }
    };

    handleSortProductLimit = async (newFilter) => {
        try {
            const newProductList = await productApi.getAll(newFilter);
            // console.log(newProductList);
            this.setState({ filter: newFilter, shopProductList: newProductList.data, paginations: newProductList.pagination })
        } catch (error) {
            console.log('Failed get to data', error.message);
        }
    };

    handleSelectPage = async (newFilter) => {
        try {
            const newProductList = await productApi.getAll(newFilter);
            // console.log(newProductList);
            this.setState({ filter: newFilter, shopProductList: newProductList.data, paginations: newProductList.pagination });
        } catch (error) {
            console.log('Failed get to data', error.message);
        }
    };

    handleNextPage = async (newFilter) => {
        try {
            const newProductList = await productApi.getAll(newFilter);
            // console.log(newProductList);
            this.setState({ filter: newFilter, shopProductList: newProductList.data, paginations: newProductList.pagination });
        } catch (error) {
            console.log('Failed get to data', error.message);
        }
    };

    render() {
        const { shopProductList, filter, paginations } = this.state;
        // console.log(filter);
        // console.log(paginations);
        return (
            <div className="container product_section_container">
                <div className="row">
                    <div className="col product_section clearfix">
                        <Breadcrumbs />
                        <Sidebar

                        />
                        <ShopProduct
                            filter={filter}
                            paginations={paginations}
                            shopProductList={shopProductList}
                            onChangeSortDefault={this.handleSortProductDefault}
                            onChangeShowLimit={this.handleSortProductLimit}
                            onChangeShowPage={this.handleSelectPage}
                            onChangeNextPage={this.handleNextPage}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

ShopPage.propTypes = {

};

export default ShopPage;