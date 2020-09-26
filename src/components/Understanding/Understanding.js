import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Understanding extends Component {

    // Navigate to next page
    onNext = () => {
        console.log('Leaving understanding page');
        this.props.history.push('/support');
    }

    // Add input information to reducer
    onChangeUnderstanding = (event) => {
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <h5>Understanding?</h5>
                <input required
                    type='number'
                    onChange={this.onChangeUnderstanding}
                />
                <button onClick={this.onNext}>Next</button>
            </div>
        );
    }
}

export default connect()(withRouter(Understanding));