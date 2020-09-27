import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, TextField, Grid} from '@material-ui/core';

class Understanding extends Component {

    // Navigate to next page
    onNext = () => {
        console.log('Leaving understanding page');
        this.props.history.push('/support');
    }

    // Add input information to reducer
    onChangeUnderstanding = (event) => {
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: event.target.value
        });
    }

    render() {
        return (
            <div>
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
                            placeholder='1-10'
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
        );
    }
}

export default connect()(withRouter(Understanding));