import React, { Component } from 'react'
import Grade from '../grade/Grade';

export default class Grades extends Component {
  getNewValue = (id, newValue) => {
    this.props.onChangeInputs(id, newValue);
  }

  render() {
    const { grades } = this.props;

    return (
      <div>
        <h4>Grades</h4>
        {
          grades.map(({id, description, grade}) => {
            return (
              <div key={id}>
                <Grade id={id} description={description} grade={grade} onChangeInput={this.getNewValue}/>
              </div>
            ) 
          })
        }
      </div>
    )
  }
}
