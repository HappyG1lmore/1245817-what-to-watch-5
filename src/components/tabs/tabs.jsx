import React from "react";
import PropTypes from "prop-types";
import {TabType} from "../../constants";
import {withActiveTabState} from "../../hocs/with-active-tab-state";
import {OverviewTab} from "../overview-tab/overview-tab";
import {DetailsTab} from "../details-tab/details-tab";
import ReviewsTab from "../reviews-tab/reviews-tab";

const Tabs = (props) => {
  const {activeTab, onTabChange, film} = props;

  const renderTab = () => {
    switch (activeTab) {
      case TabType.OVERVIEW:
        return <OverviewTab film={film} />;
      case TabType.DETAILS:
        return <DetailsTab film={film} />;
      case TabType.REVIEWS:
        return <ReviewsTab />;
    }
    return activeTab;
  };

  return (
    <>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {Object.values(TabType).map((tab) => (
              <li
                key={tab}
                className={
                  `movie-nav__item
                   ${tab === props.activeTab && `movie-nav__item--active`}
               `}
              >
                <a href={`#`}
                  className="movie-nav__link"
                  onClick={(evt) => {
                    evt.preventDefault();
                    onTabChange(tab);
                  }}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {renderTab()}
      </div>
    </>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string,
  onTabChange: PropTypes.func,
  film: PropTypes.object
};

export default withActiveTabState(Tabs);
