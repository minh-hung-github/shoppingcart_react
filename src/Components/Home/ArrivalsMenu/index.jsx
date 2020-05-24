import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ArrivalsMenu.scss';

class ArrivalsMenu extends PureComponent {

    handleClickItemMenu = (itemMenuArrivals) => {
        const { onActiveItemMenu } = this.props;
        if (onActiveItemMenu) {
            onActiveItemMenu(itemMenuArrivals);
        }
    }

    render() {
        const { activeItemMenu, arrivalsMenuList } = this.props;
        return (
            <>
                <div className="row">
                    <div className="col text-center">
                        <div className="section_title new_arrivals_title">
                            <h2>New Arrivals</h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col text-center">
                        <div className="new_arrivals_sorting">
                            <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                                {arrivalsMenuList.map(itemMenuArrivals => {
                                    const isActive = activeItemMenu === itemMenuArrivals.id;
                                    return (
                                        <li
                                            key={itemMenuArrivals.id}
                                            className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked" data-filter="*"
                                            onClick={() => this.handleClickItemMenu(itemMenuArrivals)}
                                            style={{ color: isActive ? '#ffffff' : 'black', background: isActive ? '#fe4c50' : '#ffffff' }}
                                        >
                                            {itemMenuArrivals.name}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

ArrivalsMenu.propTypes = {
    arrivalsMenuList: PropTypes.array,
    onActiveItemMenu: PropTypes.func,
    activeItemMenu: PropTypes.string,
};

ArrivalsMenu.defaultProps = {
    arrivalsMenuList: [],
    onActiveItemMenu: null,
    activeItemMenu: '',
}

export default ArrivalsMenu;