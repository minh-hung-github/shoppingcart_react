import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../../Components/Detail/Breadcrumbs';
import SingleProduct from '../../Components/Detail/SingleProduct';
import productApi from '../../api/productApi';
import TabsDetailMenu from '../../Components/Detail/TabsDetailMenu';
import { Switch, Route, Redirect } from 'react-router-dom';

class DetailPage extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            product: {},
            imageList: [],
            showImage: '',
            salePrice: 0,
        }
    }

    async componentDidMount() {
        const { match } = this.props;
        try {
            const newProduct = await productApi.getById(match.params.productId);
            console.log(newProduct);
            this.setState(
                {
                    product: newProduct,
                    imageList: newProduct.images,
                    showImage: newProduct.images[0],
                    salePrice: newProduct.salePrice,
                })
        } catch (error) {
            console.log('Failed get to data', error.message);
        }
    }

    handleChangeShowImage = (image) => {
        if (image) {
            this.setState({ showImage: image })
        }
    };


    render() {
        const { match } = this.props;
        const { product, imageList, showImage, salePrice } = this.state;
        // console.log(match);
        return (
            <>
                <div className="container single_product_container">
                    <Breadcrumbs />
                    <SingleProduct
                        product={product}
                        imageList={imageList}
                        showImage={showImage}
                        salePrice={salePrice}
                        onChangeShowImage={this.handleChangeShowImage}
                    />
                </div>

                <div className="tabs_section_container">
                    <div className="container">
                        <TabsDetailMenu
                            match={match}
                        />
                        <div className="row">
                            <div className="col">
                                <Switch>
                                    <Route path="/products/:productId/description" component={null} />
                                    <Route path="/products/:productId/information" component={null} />
                                    <Route path="/products/:productId/review" component={null} />
                                    <Redirect from="/products/:productId" to="/products/:productId/description" />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

DetailPage.propTypes = {

};

export default DetailPage;