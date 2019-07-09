import React from 'react';

import scatData from '../../helpers/data/scatData';


class SingleScat extends React.Component {
  state = {
    scat: {},
  }

  componentDidMount() {
    const scatId = this.props.match.params.id;
    scatData.getSingleScat(scatId)
      .then(scatPromise => this.setState({ scat: scatPromise.data }))
      .catch(err => console.error('unable to get single scat', err));
  }

  deleteScat = () => {
    const scatId = this.props.match.params.id;
    scatData.deleteScat(scatId)
      .then(() => this.props.history.push('/home')) // returns to the home route
      .catch(err => console.error('unable to delete', err));
  }

  render() {
    const { scat } = this.state;
    return (
      <div className="singleScatComponent">
        <h1>{scat.sampleName}</h1>
        <h3>{scat.location}</h3>
        <h3>{scat.animal}</h3>
        <h3>{scat.color}</h3>
        <h3>{scat.weight}</h3>
        <button onClick={this.deleteScat} className="btn btn-danger">Delete</button>
      </div>
    );
  }
}

export default SingleScat;
