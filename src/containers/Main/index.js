import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Loading, Button } from '../../components';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    //
  }

  componentWillReceiveProps(nextProps) {
    //
  }

  render() {
    const { loading } = this.state;

    return (
      <div className="main-container">
        <div className="page-content d-flex flex-column align-items-center">
          {loading ? <Loading position="center" size="large" /> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
