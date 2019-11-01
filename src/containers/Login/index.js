import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

import { Loading, Button } from '../../components';

const Logo = require('../../assets/icons/logo.svg');

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    //
  }

  componentWillReceiveProps(nextProps) {
    //
  }

  responseGoogle = res => {
    if (!res.details) {
      this.setState({ loading: true });
      setTimeout(() => this.props.history.push('/main'), 3000);
    }
  };

  render() {
    const { loading } = this.state;

    return (
      <div className="login-container">
        <div className="page-content d-flex flex-column align-items-center">
          <img className="app-logo" src={Logo} />
          <p className="title">
            Experience Research
            <br />
            Visualization Suite
          </p>
          {!loading ? (
            <GoogleLogin
              clientId="708661734955-k7p04rqdobaa8e6hlol6pj0i60s90j9d.apps.googleusercontent.com"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              render={props => (
                <Button
                  type="outline"
                  title="login using your @email.com account"
                  clickHanlder={props.onClick}
                />
              )}
            />
          ) : (
            <>
              <Loading />
              <span className="comment-text">May take a few minutes...</span>
            </>
          )}
        </div>
        <div className="footer">
          <p className="text-align-center">Need Help?</p>
          <a className="text-link">support@gauge.io</a>
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
  )(Login)
);
