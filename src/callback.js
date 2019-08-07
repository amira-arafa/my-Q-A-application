import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import auth0Client from './Auth';
//this component is rendered when the user sign in to the app 
class Callback extends Component {
//check if user authenticated or not then go to home page if authenticated and get error if not
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.history.replace('/');
  }
  render() {
    return (
      <p>Loading profile.....</p>
    );
  }
}

export default withRouter(Callback);