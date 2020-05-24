import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ProductSortingBottom.scss';
import { Link } from 'react-router-dom';

class ProductSortingBottom extends PureComponent {

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

        const limitProduct = {
            limit1: 1,
            limit2: 2,
            limit3: 3,
            limit4: 4,
        };

        const maxPage = Math.ceil(paginations._totalRows / paginations._limit);

        const setPage = {
            page1: 1,
            page2: '',
            page3: '',
        };
        this.handleSetPage(paginations, setPage, maxPage);

        return (
            <div className="product_sorting_container product_sorting_container_bottom clearfix">
                <ul className="product_sorting">
                    <li>
                        <span>Show:</span>
                        <span className="num_sorting_text">{filter._limit}</span>
                        <i className="fa fa-angle-down"></i>
                        <ul className="sorting_num">
                            <li className="num_sorting_btn" onClick={() => this.handleSortProductLimit(limitProduct.limit1, filter)}><span>01</span></li>
                            <li className="num_sorting_btn" onClick={() => this.handleSortProductLimit(limitProduct.limit2, filter)}><span>02</span></li>
                            <li className="num_sorting_btn" onClick={() => this.handleSortProductLimit(limitProduct.limit3, filter)}><span>03</span></li>
                            <li className="num_sorting_btn" onClick={() => this.handleSortProductLimit(limitProduct.limit4, filter)}><span>04</span></li>
                        </ul>
                    </li>
                </ul>
                <span className="showing_results">Showing 1-{maxPage} of {paginations._totalRows} results</span>
                <div className="pages d-flex flex-row align-items-center">
                    <div className="page_current">
                        <span>{paginations._page}</span>
                        <ul className="page_selection">
                            <li><Link to="#" onClick={() => this.handleSelectPage(setPage.page1, filter)}>{setPage.page1}</Link></li>
                            <li><Link to="#" onClick={() => this.handleSelectPage(setPage.page2, filter)}>{setPage.page2}</Link></li>
                            <li><Link to="#" onClick={() => this.handleSelectPage(setPage.page3, filter)}>{setPage.page3}</Link></li>
                        </ul>
                    </div>
                    <div className="page_total"><span>of</span>{maxPage}</div>
                    <div id="next_page_1" className="page_next"><Link to="#"><i className="fa fa-long-arrow-right" aria-hidden="true" onClick={() => this.handleNextPage(paginations, filter, maxPage)}></i></Link></div>
                </div>

            </div>
        );
    }
}

ProductSortingBottom.propTypes = {
    filter: PropTypes.object,
    onChangeShowLimit: PropTypes.func,
    paginations: PropTypes.object,
    onChangeShowPage: PropTypes.func,
    onChangeNextPage: PropTypes.func,
};

ProductSortingBottom.defaultProps = {
    filter: {},
    onChangeShowLimit: null,
    paginations: {},
    onChangeShowPage: null,
    onChangeNextPage: null,
}
export default ProductSortingBottom;