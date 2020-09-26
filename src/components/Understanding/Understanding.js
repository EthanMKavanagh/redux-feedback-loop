import React, { Component } from 'react';
import {connect} from 'react-redux';

class Understanding extends Component {

    onNext = () => {
        this.props.history.push('/support');
    }

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

export default connect()(Understanding);