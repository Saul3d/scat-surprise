import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import scatData from '../../helpers/data/scatData';
import ScatCard from '../ScatCard/ScatCard';


class Home extends React.Component {
  state = {
    scats: [],
  }

  getScats = () => {
    const { uid } = firebase.auth().currentUser;
    scatData.getScatData(uid)
      .then(scats => this.setState({ scats }))
      .catch(err => console.error('Could not get scats', err));
  }

  componentDidMount() {
    this.getScats();
  }

  deleteScat = (scatId) => {
    scatData.deleteScat(scatId)
      .then(() => this.getScats())
      .catch(err => console.error('unable to delete', err));
  }

  render() {
    const makeScatsCards = this.state.scats.map(scat => (
      <ScatCard
      key={scat.id}
      scat={scat}
      deleteScat={this.deleteScat}
     />
    ));
    return (
      <div className="homeComponent col">
        <h1>Home</h1>
        <div className="d-flex">
          {makeScatsCards}
        </div>
      </div>
    );
  }
}

export default Home;
