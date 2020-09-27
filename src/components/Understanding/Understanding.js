import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, TextField, Grid, Paper} from '@material-ui/core';
import '../components.css';

class Understanding extends Component {

    state = {
        understanding: ''
    }

    // Navigate to next page
    onNext = () => {
        if (this.state.understanding === '') {
            alert('Whoops, form isn\'t answered.')
        }
        else {
            console.log('Leaving understanding page');
            this.props.history.push('/support');
        }
    }

    // Add input information to reducer
    onChangeUnderstanding = (event) => {
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: event.target.value
        });
        this.setState({
            understanding: event.target.value
        });
    }

    render() {
        return (
            <Paper elevation={3} className='paper'>
                <div className='paper-text'>
                    <h1>How well are you understanding the content?</h1>
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
                                label="Understanding" 
                                variant="outlined"
                                type='number'
                                placeholder='1 -10'
                                onChange={this.onChangeUnderstanding}
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
                    </Grid>
                </div>
            </Paper>
        );
    }
}

export default connect()(withRouter(Understanding));