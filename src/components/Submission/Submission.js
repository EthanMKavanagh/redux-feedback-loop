import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button} from '@material-ui/core';

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
            <div>
                <h1>Thank You!</h1>
                <Button 
                    variant='contained'
                    color='secondary'
                    onClick={this.onSubmitSurvey}>
                    Leave New Feedback
                </Button>
            </div>
        );
    }
}

export default connect()(withRouter(Submission));