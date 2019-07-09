import React from 'react';

class ScatCard extends React.Component {
  render() {
    const { scat } = this.props;
    return (
      <div className= "ScatCard col-4">
       <div className="card">
        <div class="card-body">
          <h5 class="card-title">{scat.sampleName}</h5>
          <p class="card-text">{scat.location}</p>
          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
      </div>
    );
  }
}
export default ScatCard;
