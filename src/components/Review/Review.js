import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button} from '@material-ui/core';

class Review extends Component {

    // Navigating to next page
    onNext = () => {
        console.log('Leaving review page');
        this.props.history.push('/submission');
    }

    render() {
        return (
            <div>
                <h1>Review Your Feedback</h1>
                <p>Feeling: {this.props.feeling}</p>
                <p>Understanding: {this.props.understanding}</p>
                <p>Support: {this.props.support}</p>
                <p>Comments: {this.props.comments}</p>
                <Button 
                    variant='contained'
                    color='secondary'
                    onClick={this.onNext}>
                    Submit
                </Button>
            </div>
        );
    }
}

// Pulling in all the results from survey
const mapStateToProps = (reduxState) => ({
    feeling: reduxState.feedbackCategory.feeling,
    understanding: reduxState.feedbackCategory.understanding,
    support: reduxState.feedbackCategory.support,
    comments: reduxState.feedbackCategory.comments
});
export default connect(mapStateToProps)(withRouter(Review));