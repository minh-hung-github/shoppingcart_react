import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './TabsDetailMenu.scss';
import { NavLink } from 'react-router-dom';

class TabsDetailMenu extends PureComponent {
    render() {
        const { match } = this.props;
        // console.log(match);
        return (
            <div className="row">
                <div className="col">
                    <div className="tabs_container">
                        <ul className="tabs d-flex flex-sm-row flex-column align-items-left align-items-md-center justify-content-center">
                            <li className="tab active" data-active-tab="tab_1"><NavLink exact to={`${match.url}/description`}><span>Description</span></NavLink></li>
                            <li className="tab" data-active-tab="tab_2"><NavLink to={`${match.url}/information`}><span>Additional Information</span></NavLink></li>
                            <li className="tab" data-active-tab="tab_3"><NavLink to={`${match.url}/review`}><span>Reviews (2)</span></NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

TabsDetailMenu.propTypes = {
    match: PropTypes.object.isRequired,
};

export default TabsDetailMenu;