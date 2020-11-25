import React, {PureComponent} from "react";

export const withActiveTabState = (Component) => {
  return class ActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: `Overview`,
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
