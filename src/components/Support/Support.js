import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Support extends Component {

    // Navigate to next page
    onNext = () => {
        console.log('Leaving support page');
        this.props.history.push('/comments');
    }

    // Add input information to reducer
    onChangeSupport = (event) => {
        this.props.dispatch({
            type: 'SET_SUPPORT',
            payload: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>How well are you being supported?</h1>
                <h5>Support?</h5>
                <input required
                    type='number'
                    onChange={this.onChangeSupport}
                />
                <button onClick={this.onNext}>Next</button>
            </div>
        );
    }
}

export default connect()(withRouter(Support));