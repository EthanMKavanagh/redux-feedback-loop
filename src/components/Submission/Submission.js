import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

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
                <button onClick={this.onSubmitSurvey}>Leave New Feedback</button>
            </div>
        );
    }
}

export default connect()(withRouter(Submission));