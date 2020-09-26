import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Feeling extends Component {

    onNext = () => {
        this.props.history.push('/understanding');
    }

    onChangeFeeling = (event) => {
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <h5>Feeling?</h5>
                <input required
                    type='number'
                    onChange={this.onChangeFeeling}
                />
                <button onClick={this.onNext}>Next</button>
            </div>
        );
    }
}

export default connect()(withRouter(Feeling));