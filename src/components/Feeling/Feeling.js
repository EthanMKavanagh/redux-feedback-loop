import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button} from '@material-ui/core';
import '../components.css';

class Feeling extends Component {

    // Navigate to next page
    onNext = () => {
        console.log('Leaving feelings page');
        this.props.history.push('/understanding');
    }

    // Add input information to reducer
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
                    className='input'
                    type='number'
                    onChange={this.onChangeFeeling}
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

export default connect()(withRouter(Feeling));