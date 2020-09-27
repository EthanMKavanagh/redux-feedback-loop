import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, TextField, Grid} from '@material-ui/core';

class Comments extends Component {

    // Navigate to next page
    onNext = () => {
        console.log('Leaving comments page');
        this.props.history.push('/review');
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
            <div>
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
                            // error
                            // helperText="Incorrect entry."
                            // {
                            //     this.state.isComplete ?
                            //         error
                            //         helperText="Incorrect entry." :
                                    
                            // }
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

export default connect()(withRouter(Comments));