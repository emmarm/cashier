import React, { Component } from 'react';

import { firebase } from '../firebase/firebase';
import LoginPage from './LoginPage';
import CashierContainer from './CashierContainer';

class CashierApp extends Component {
  state = { authUser: null }

  handleLogIn = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
      const { uid } = user;

      this.setState(() => ({ authUser: uid }));
    });
  }
  handleLogOut = () => {
    firebase.auth().signOut();
    this.setState(() => ({ authUser: null }));
  }
  render() {
    const { authUser } = this.state;
    return (
      <div>
        {authUser ?
          <CashierContainer
            authUser={authUser}
            handleLogOut={this.handleLogOut}
          /> :
          <LoginPage handleLogIn={this.handleLogIn} />
        }
      </div>
    );
  }
}

export default CashierApp;
