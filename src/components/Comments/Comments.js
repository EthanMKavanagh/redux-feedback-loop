import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button} from '@material-ui/core';
import '../components.css';

class Comments extends Component {

    // Navigate to next page
    onNext = () => {
        console.log('Leaving comments page');
        this.props.history.push('/review');
    }

    // Add input information to reducer
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
                    className='input'
                    type='text'
                    onChange={this.onChangeComments}
                />
                <Button 
                    variant='contained'
                    color='secondary'
                    onClick={this.onNext}>
                    Next
                </Button>
            </div>
        );
    }
}

export default connect()(withRouter(Comments));