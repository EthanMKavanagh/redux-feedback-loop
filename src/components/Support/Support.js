import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, TextField, Grid, Paper} from '@material-ui/core';
import '../components.css';

class Support extends Component {

    state = {
        support: ''
    }

    // Navigate to next page
    onNext = () => {
        if (this.state.support === '') {
            alert('Whoops, form isn\'t answered.');
        }
        else {
            console.log('Leaving support page');
            this.props.history.push('/comments');
        }
    }

    onBack = () => {
        console.log('Going back');
        this.props.history.push('/understanding');
    }

    // Add input information to reducer
    onChangeSupport = (event) => {
        this.props.dispatch({
            type: 'SET_SUPPORT',
            payload: event.target.value
        });
        this.setState({
            support: event.target.value
        });
    }

    render() {
        return (
            <Paper elevation={3} className='paper'>
                <div className='paper-text'>
                    <h1>How well are you being supported?</h1>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={3}
                    >
                        <Grid item>
                            <TextField
                                id="outlined-basic"
                                label="Support" 
                                variant="outlined"
                                type='number'
                                placeholder='1-10'
                                min='0'
                                max='10'
                                onChange={this.onChangeSupport}
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

export default connect()(withRouter(Support));