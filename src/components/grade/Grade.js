import React, { Component } from 'react'

export default class Grade extends Component {
  getNewValue = (event) => {
    const target = event.target;
    this.props.onChangeInput(target.id, target.value);
  }

  render() {
    const { id, description, grade } = this.props;

    return (
      <div>
        <div>
          {description} (0 - 100)
        </div>
        <div>
          <input type="number" id={id} min="0" max="100" value={grade} onChange={this.getNewValue}/>
        </div>
      </div>
    )
  }
}
