import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, Paper} from '@material-ui/core';
import '../components.css';

class Submission extends Component {

    // Navigating back to start of survey, and calling axiosPOST function
    onSubmitSurvey = () => {
        console.log('Submitting survey');
        alert('Survey Submitted Successfully');
        this.props.postFeedback();
        this.props.history.push('/');
    }

    render() {
        return (
            <Paper elevation={3} className='paper'>
                <div className='paper-text'>
                    <h1>Thank You!</h1>
                    <Button 
                        variant='contained'
                        color='secondary'
                        onClick={this.onSubmitSurvey}>
                        Leave New Feedback
                    </Button>
                </div>
            </Paper>
        );
    }
}

export default connect()(withRouter(Submission));