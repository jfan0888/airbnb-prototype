import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Loading, Slider, DateInput, Sidebar } from '../../components';

import LeftSidebarContent from './LeftSidebarContent';
import RightSidebarContent from './RightSidebarContent';
import Map from './Map';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      openLeftSidebar: false,
      openRightSidebar: false,
    };
  }

  componentDidMount() {
    //
  }

  componentWillReceiveProps(nextProps) {
    //
  }

  openLeftSidebar = status => {
    this.setState({ openLeftSidebar: status });
  };

  openRightSidebar = status => {
    this.setState({ openRightSidebar: status });
  };

  render() {
    const { loading, openLeftSidebar, openRightSidebar, nodeSize } = this.state;

    return (
      <div className="main-container d-flex flex-column">
        <div>
          <Sidebar
            type="left"
            open={openLeftSidebar}
            toggleHandler={this.openLeftSidebar}
          >
            <LeftSidebarContent
              nodeSize={nodeSize}
              handleChangeNodeSize={this.handleChangeNodeSize}
              closeHandler={() => this.openLeftSidebar(false)}
            />
          </Sidebar>
          <Sidebar
            type="right"
            open={openRightSidebar}
            toggleHandler={this.openRightSidebar}
          >
            <RightSidebarContent
              closeHandler={() => this.openRightSidebar(false)}
            />
          </Sidebar>
        </div>
        <div className="page-content d-flex flex-column align-items-center">
          <Map />
        </div>
        <div className="page-footer">
          <Slider defaultValue={[30, 75]} />
          <div className="date-range-wrapper d-flex">
            <div className="start-date">
              <DateInput />
            </div>
            <div className="end-date">
              <DateInput />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Main);
