import React from 'react';

import scatData from '../../helpers/data/scatData';

import './EditScat.scss';

const defaultScat = {
  location: '',
  weight: '',
  color: '',
  sampleName: 'monkeyButt',
  animal: '',
  uid: '',
};

class EditScat extends React.Component {
  state = {
    newScat: defaultScat,
  }

  componentDidMount() {
    const scatId = this.props.match.params.id;
    scatData.getSingleScat(scatId)
      .then(scatPromise => this.setState({ newScat: scatPromise.data }))
      .catch(err => console.error('could not find single scat', err));
  }

  formFieldStringState = (name, e) => {
    const tempScat = { ...this.state.newScat };
    tempScat[name] = e.target.value;
    this.setState({ newScat: tempScat });
  }

  sampleNameChange = e => this.formFieldStringState('sampleName', e);

  colorChange = e => this.formFieldStringState('color', e);

  locationChange = e => this.formFieldStringState('location', e);

  weightChange = e => this.formFieldStringState('weight', e);

  animalChange = e => this.formFieldStringState('animal', e);

  formSubmit = (e) => {
    e.preventDefault();
    const saveMe = { ...this.state.newScat };
    const scatId = this.props.match.params.id;
    console.error('things to save ', saveMe);
    scatData.putScat(saveMe, scatId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to save', err));
  }

  render() {
    const { newScat } = this.state;
    return (
      <div className="EditScat">
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="sampleName">Sample Name</label>
            <input
            type="text"
            className="form-control"
            id="sampleName"
            placeholder="Sample 12"
            value={newScat.sampleName}
            onChange={this.sampleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input
            type="text"
            className="form-control"
            id="color"
            placeholder="brown"
            value={newScat.color}
            onChange={this.colorChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight</label>
            <input
            type="text"
            className="form-control"
            id="weight"
            placeholder="12g"
            value={newScat.weight}
            onChange={this.weightChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">location</label>
            <input
            type="text"
            className="form-control"
            id="location"
            placeholder="forest"
            value={newScat.location}
            onChange={this.locationChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Animal</label>
            <input
            type="text"
            className="form-control"
            id="animal"
            placeholder="bear"
            value={newScat.animal}
            onChange={this.animalChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Update Scat</button>
        </form>
      </div>
    );
  }
}

export default EditScat;
