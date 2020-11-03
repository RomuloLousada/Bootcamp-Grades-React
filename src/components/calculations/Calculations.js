import React, { Component } from 'react'

export default class Calculations extends Component {
  calculations = (grades) => {
    const totalGrade = grades.reduce((acc, cur) => {
      return acc + parseInt(cur.grade);
    }, 0);

    const totalPercentage = totalGrade / 5;

    const lowGrade = grades.find((grade) => {
      return parseInt(grade.grade) < 60
    });

    const averageApproval = typeof lowGrade === "undefined" ? "Yes": "No";

    const totalPercentageApproval = totalPercentage >= 70 ? "Yes" : "No";

    return {
      totalGrade: totalGrade,
      totalPercentage: totalPercentage,
      averageApproval: averageApproval,
      totalPercentageApproval: totalPercentageApproval
    }
  }

  render() {
    const { grades } = this.props;

    const calculations = this.calculations(grades);

    return (
      <div>
        <h4>Calculations</h4>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Total Grade: </strong>
                <span>{calculations.totalGrade}</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Total Percentage: </strong>
                <span>{calculations.totalPercentage}</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Avg. Approval (60%): </strong>
                <span>{calculations.averageApproval}</span>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Total Percentage Approval (70%): </strong>
                <span>{calculations.totalPercentageApproval}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
