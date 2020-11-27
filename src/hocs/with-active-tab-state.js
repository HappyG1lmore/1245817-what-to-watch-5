import React, {PureComponent} from "react";
import {TabType} from "../constants";

export const withActiveTabState = (Component) => {
  return class ActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: TabType.OVERVIEW,
      };

      this.onTabChange = this.onTabChange.bind(this);
    }

    onTabChange(tab) {
      this.setState({activeTab: tab});
    }

    render() {
      return (
        <Component
          {...this.props}
          activeTab={this.state.activeTab}
          onTabChange={this.onTabChange}
        />
      );
    }
  };
};
