import React from 'react';

import { ThemeButton } from '../../components';

class Themes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="filter-settings themes">
        <div className="theme-category">
          <h3 className="label">Positive</h3>
          <ThemeButton active caption="Theme Name 52%" />
          <ThemeButton caption="Theme Name 37%" />
          <ThemeButton caption="Theme Name 12%" />
          <ThemeButton caption="Theme Name 8%" />
          <ThemeButton caption="Theme Name 2%" />
        </div>
        <div className="theme-category">
          <h3 className="label">Negative</h3>
          <ThemeButton caption="Theme Name 45%" />
          <ThemeButton caption="Theme Name 23%" />
          <ThemeButton caption="Theme Name 6%" />
          <ThemeButton caption="Theme Name 3%" />
          <ThemeButton caption="Theme Name 2%" />
        </div>
      </div>
    );
  }
}

export default Themes;
