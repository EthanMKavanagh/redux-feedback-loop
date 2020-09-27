import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {
    render() {
        return (
            <table>
                <tr>
                    <th>Feeling</th>
                    <th>Comprehension</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Flag</th>
                    <th>Delete</th>
                </tr>
                <tr>
                    <td>{this.props.feeling}</td>
                    <td>{this.props.understanding}</td>
                    <td>{this.props.support}</td>
                    <td>{this.props.comments}</td>
                    <td></td>
                    {/* <td>{this.props.flagged}</td> */}
                    <td><button>Delete</button></td>
                </tr>
            </table>
        );
    }
}
const mapStateToProps = (reduxState) => ({
    feeling: reduxState.feedbackCategory.feeling,
    understanding: reduxState.feedbackCategory.understanding,
    support: reduxState.feedbackCategory.support,
    comments: reduxState.feedbackCategory.comments
});
export default connect(mapStateToProps)(Admin);