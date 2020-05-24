import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ProductSortingTop.scss';
import { Link } from 'react-router-dom';
// import './ShopProduct_responsive.scss';

class ProductSortingTop extends PureComponent {

    handleSortProductDefault = (sort, filter) => {
        const newFilter = {
            ...filter,
            _sort: sort,
        }
        const { onChangeSortDefault } = this.props;
        if (onChangeSortDefault) {
            onChangeSortDefault(newFilter);
        }
    };

    handleSortProductLimit = (limit, filter) => {
        const newFilter = {
            ...filter,
            _limit: limit,
            _page: 1,
        }
        // console.log(newFilter);
        const { onChangeShowLimit } = this.props;
        if (onChangeShowLimit) {
            onChangeShowLimit(newFilter);
        }
    };

    handleSetPage = (paginations, setPage, maxPage) => {
        if (paginations._page === maxPage) {
            if (maxPage === 1) return;
            if (maxPage === 2) {
                setPage.page2 = paginations._page;
            }
            if (maxPage >= 3) {
                setPage.page1 = paginations._page - 2;
                setPage.page2 = paginations._page - 1;
                setPage.page3 = paginations._page;
            }
        }

        if (paginations._page < maxPage) {
            if (maxPage === 1) return;
            if (maxPage === 2) {
                setPage.page2 = maxPage;
            }
            if (maxPage >= 3) {
                if (paginations._page === 1) {
                    setPage.page1 = paginations._page;
                    setPage.page2 = paginations._page + 1;
                    setPage.page3 = paginations._page + 2;
                }
                if (paginations._page > 1) {
                    setPage.page1 = paginations._page - 1;
                    setPage.page2 = paginations._page;
                    setPage.page3 = paginations._page + 1;
                }
            }
        }
    };

    handleSelectPage = (page, filter) => {
        const newFilter = {
            ...filter,
            _page: page,
        }
        const { onChangeShowPage } = this.props;
        if (onChangeShowPage) {
            onChangeShowPage(newFilter);
        }
    };

    handleNextPage = (paginations, filter, maxPage) => {
        if (paginations._page < maxPage) {
            const newFilter = {
                ...filter,
                _page: paginations._page + 1,
            };
            // console.log(newFilter);
            const { onChangeNextPage } = this.props;
            if (onChangeNextPage) {
                onChangeNextPage(newFilter);

            }
        }
    };

    render() {
        const { filter, paginations } = this.props;
        // console.log(filter);
        // console.log(paginations);
        const maxPage = Math.ceil(paginations._totalRows / paginations._limit);
        // console.log(maxPage);

        const sort = {
            originalOrder: 'originalPrice',
            price: 'salePrice',
            name: 'name'
        };
        const titleSortDefault = `${(filter._sort === 'originalPrice') ? 'Default Sorting' : (filter._sort === 'salePrice') ? 'Price' : (filter._sort === 'name') ? 'Product Name' : ''}`;

        const limitProduct = {
            limit6: 6,
            limit12: 12,
            limit24: 24,
        };

        const setPage = {
            page1: 1,
            page2: '',
            page3: '',
        };
        this.handleSetPage(paginations, setPage, maxPage);

        return (
            <div className="product_sorting_container product_sorting_container_top">
                <ul className="product_sorting">
                    <li>
                        <span className="type_sorting_text">{titleSortDefault}</span>
                        <i className="fa fa-angle-down"></i>
                        <ul className="sorting_type">
                            <li className="type_sorting_btn" data-isotope-option='{ "sortBy": "original-order" }' onClick={() => this.handleSortProductDefault(sort.originalOrder, filter)}><span>Default Sorting</span></li>
                            <li className="type_sorting_btn" data-isotope-option='{ "sortBy": "price" }' onClick={() => this.handleSortProductDefault(sort.price, filter)}><span>Price</span></li>
                            <li className="type_sorting_btn" data-isotope-option='{ "sortBy": "name" }' onClick={() => this.handleSortProductDefault(sort.name, filter)}><span>Product Name</span></li>
                        </ul>
                    </li>
                    <li>
                        <span>Show</span>
                        <span className="num_sorting_text">{filter._limit}</span>
                        <i className="fa fa-angle-down"></i>
                        <ul className="sorting_num">
                            <li className="num_sorting_btn" onClick={() => this.handleSortProductLimit(limitProduct.limit6, filter)}><span>6</span></li>
                            <li className="num_sorting_btn" onClick={() => this.handleSortProductLimit(limitProduct.limit12, filter)}><span>12</span></li>
                            <li className="num_sorting_btn" onClick={() => this.handleSortProductLimit(limitProduct.limit24, filter)}><span>24</span></li>
                        </ul>
                    </li>
                </ul>
                <div className="pages d-flex flex-row align-items-center">
                    <div className="page_current">
                        <span>{paginations._page}</span>
                        <ul className="page_selection">
                            <li onClick={() => this.handleSelectPage(setPage.page1, filter)}>{setPage.page1}</li>
                            <li onClick={() => this.handleSelectPage(setPage.page2, filter)}>{setPage.page2}</li>
                            <li onClick={() => this.handleSelectPage(setPage.page3, filter)}>{setPage.page3}</li>
                        </ul>
                    </div>
                    <div className="page_total"><span>of</span>{maxPage}</div>
                    <div id="next_page" className="page_next"><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true" onClick={() => this.handleNextPage(paginations, filter, maxPage)}></i></Link></div>
                </div>

            </div>
        );
    }
}

ProductSortingTop.propTypes = {
    filter: PropTypes.object,
    onChangeSortDefault: PropTypes.func,
    onChangeShowLimit: PropTypes.func,
    paginations: PropTypes.object,
    onChangeShowPage: PropTypes.func,
    onChangeNextPage: PropTypes.func,
};

ProductSortingTop.defaultProps = {
    filter: {},
    onChangeSortDefault: null,
    onChangeShowLimit: null,
    paginations: {},
    onChangeShowPage: null,
    onChangeNextPage: null,
}

export default ProductSortingTop;