import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, TextField, Grid} from '@material-ui/core';

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
                </Grid>
            </div>
        );
    }
}

export default connect()(withRouter(Support));