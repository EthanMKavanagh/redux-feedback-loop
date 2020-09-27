import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, TextField, Grid, Paper} from '@material-ui/core';
import '../components.css';

class Comments extends Component {

    // Navigate to next page
    onNext = () => {
        console.log('Leaving comments page');
        this.props.history.push('/review');
    }

    onBack = () => {
        console.log('Going back');
        this.props.history.push('/support');
    }

    // Add input information to reducer
    onChangeComments = (event) => {
        if (event.target.value === '') {
            this.setState({
                isComplete: false
            });
        }
        this.props.dispatch({
            type: 'SET_COMMENTS',
            payload: event.target.value
        });
    }

    render() {
        return (
            <Paper elevation={3} className='paper'>
                <div className='paper-text'>
                    <h1>Any comments you want to leave?</h1>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={3}
                    >
                        <Grid item>
                            <TextField
                                id="outlined-multiline-static"
                                label="Comments"
                                multiline
                                rows={3}
                                variant="outlined"
                                type='number'
                                onChange={this.onChangeComments}
                            />
                        </Grid>
                        <Grid item>
                            <Button 
                                variant='contained'
                                color='secondary'
                                onClick={this.onNext}>
                                Next
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

export default connect()(withRouter(Comments));