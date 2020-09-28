import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.feeling}</td>
                <td>{this.props.understanding}</td>
                <td>{this.props.support}</td>
                <td>{this.props.comments}</td>
                <td>Flagged?</td>
                <td>Delete</td>
            </tr>
        );
    }
}

export default connect()(AdminItem);