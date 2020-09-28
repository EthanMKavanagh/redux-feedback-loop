import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, Paper, Grid} from '@material-ui/core';
import '../components.css';

class Review extends Component {

    // Navigating to next page
    onNext = () => {
        console.log('Leaving review page');
        console.log('Submitting survey');
        alert('Survey Submitted Successfully');
        this.props.postFeedback();
        this.props.history.push('/submission');
    }

    onBack = () => {
        console.log('Going back');
        this.props.history.push('/comments');
    }

    render() {
        return (
            <Paper elevation={3} className='paper'>
                <div className='paper-text'>
                    <h1>Review Your Feedback</h1>
                    <p>Feeling: {this.props.feeling}</p>
                    <p>Understanding: {this.props.understanding}</p>
                    <p>Support: {this.props.support}</p>
                    <p>Comments: {this.props.comments}</p>
                    <Grid 
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={3}
                    >
                        <Grid item>
                            <Button
                                variant='contained'
                                color='secondary'
                                onClick={this.onNext}>
                                Submit
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant='contained'
                                color='secondary'
                                onClick={this.onBack}>
                                Back
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
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