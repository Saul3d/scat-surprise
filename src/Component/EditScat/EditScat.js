import React from 'react';


class EditScat extends React.Component {
  render() {
    const editId = this.props.match.params.id;

    return (
      <div className="editScatComponent">
       <h1>Edit Scat</h1>
       <h2>The editId is {editId} </h2>
      </div>
    );
  }
}

export default EditScat;
