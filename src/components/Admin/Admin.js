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

                </tr>
            </table>
        );
    }
}
const mapStateToProps = (reduxState) => ({
    response: reduxState
});
export default connect(mapStateToProps)(Admin);