import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button} from '@material-ui/core';
import '../components.css';

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
                    className='input'
                    type='number'
                    onChange={this.onChangeSupport}
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

export default connect()(withRouter(Support));