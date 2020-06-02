import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Description.scss';
import DetailPageContext from '../../../../contexts/DetailPageContext';
// import { Webview } from 'react-native';


class Descriptional extends PureComponent {
    render() {
        // console.log(this.context.product.images);
        return (
            <div id="tab_1" className="tab_container active">
                <div className="row">
                    <div className="col-lg-5 desc_col">
                        <div className="tab_title">
                            <h4>Description</h4>
                        </div>
                        <div className="tab_text_block">
                            {/* <h2>{this.context.name}</h2> */}
                            {/* <Webview
                                // originWhitelist={['*']}
                                source={{ html: '<h1>Hello world</h1>' }}
                            /> */}
                            <p dangerouslySetInnerHTML={{ __html: this.context.product.description }}></p>
                        </div>
                        <div className="tab_image">
                            {/* <img src={this.context.product.images[0]} alt="" /> */}
                        </div>
                        {/* <div className="tab_text_block">
                            <h2>Pocket cotton sweatshirt</h2>
                            <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
                        </div> */}
                    </div>
                    <div className="col-lg-5 offset-lg-2 desc_col">
                        <div className="tab_image">
                            {/* <img src={this.context.imageList[1]} alt="" /> */}
                        </div>
                        {/* <div className="tab_text_block">
                            <h2>Pocket cotton sweatshirt</h2>
                            <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
                        </div> */}
                        {/* <div className="tab_image desc_last">
                            <img src={this.context.imageList[2]} alt="" />
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

Descriptional.contextType = DetailPageContext;

Descriptional.propTypes = {

};

export default Descriptional;