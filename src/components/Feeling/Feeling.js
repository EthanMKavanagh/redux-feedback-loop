import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, TextField, Grid} from '@material-ui/core';

class Feeling extends Component {

    // Navigate to next page
    onNext = () => {
        console.log('Leaving feelings page');
        this.props.history.push('/understanding');
    }

    // Add input information to reducer
    onChangeFeeling = (event) => {
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
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
                            label="Feeling" 
                            variant="outlined"
                            type='number'
                            placeholder='1-10'
                            onChange={this.onChangeFeeling}
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

export default connect()(withRouter(Feeling));