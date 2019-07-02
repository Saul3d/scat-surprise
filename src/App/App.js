import React from 'react';
import firebase from 'firebase/app';
import Navbar from '../Component/Navbar/Navbar';
import Home from '../Component/Home/Home';
import Auth from '../Component/Auth/Auth';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import fbConnection from '../helpers/data/connections';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    const loadComponent = () => {
      if (authed) {
        return <Home />;
      }
      return <Auth />;
    };

    return (
      <div className="App">
        <Navbar authed={ authed } />
        {loadComponent()}
      </div>
    );
  }
}

export default App;
