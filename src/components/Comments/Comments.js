import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Comments extends Component {

    onNext = () => {
        this.props.history.push('/review');
    }

    onChangeComments = (event) => {
        this.props.dispatch({
            type: 'SET_COMMENTS',
            payload: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <h5>Comments?</h5>
                <input
                    type='text'
                    onChange={this.onChangeComments}
                />
                <button onClick={this.onNext}>Next</button>
            </div>
        );
    }
}

export default connect()(withRouter(Comments));