import React, { Component } from 'react';
import Calculations from './components/calculations/Calculations';
import Grades from './components/grades/Grades';
import AppCSS from './App.module.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      grades: [
        {
          id: "1",
          description: "Módulo 1 - Fundamentos",
          grade: 0
        },
        {
          id: "2",
          description: "Módulo 2 - Angular",
          grade: 0
        },
        {
          id: "3",
          description: "Módulo 3 - React",
          grade: 0
        },
        {
          id: "4",
          description: "Módulo 4 - Vue",
          grade: 0
        },
        {
          id: "5",
          description: "Módulo 5 - Desafio Final",
          grade: 0
        }
      ]
    }
  }

  checkNewValue = (id, newGrade) => {
    if (newGrade < 0) {
      newGrade = 0;
    }

    if (newGrade > 100) {
      newGrade = 100;
    }

    const { grades } = this.state

    const newGrades = grades.map((grade) => {
      if (grade.id === id) {
        grade.grade = newGrade;
      }

      return grade;
    });

    this.setState({
      grades: newGrades
    });
  }
  
  render() {
    const { grades } = this.state;

    return (
      <div className="container">
        <div className={AppCSS.flexContainer}>
          <div className={AppCSS.flexGrades}>
            <Grades grades={grades} onChangeInputs={this.checkNewValue}/>
          </div>
          <div className={AppCSS.flexCalculations}>
            <Calculations grades={grades}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
