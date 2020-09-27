import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, TextField, Grid, Paper} from '@material-ui/core';
// import TextField_Component from '../TextField/TextField';
import '../components.css';

class Feeling extends Component {

    state = {
        feeling: ''
    }

    // Navigate to next page
    onNext = () => {
        if (this.state.feeling === '') {
            alert('Whoops, form isn\'t answered.');
            //document.getElementsByTagName('TextField').setAttribute('error', 'helperText=\'Incorrect entry\'');
            //TextField.setAttribute('error');
            //TextField.setAttribute('helperText', 'Incorrect entry');
            //document.getElementById('outlined-basic').setAttribute('helperText', 'Incorrect entry');
            //document.getElementById('outlined-basic').setAttribute('error');
            //document.getElementsByTagName("TextInput")[0].setAttribute('error');
            return;
        }
        else {
            console.log('Leaving feelings page');
            this.props.history.push('/understanding');
        }
    }

    // Add input information to reducer
    onChangeFeeling = (event) => {
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: event.target.value
        });
        this.setState({
            feeling: event.target.value
        });
    }



    render() {
        return (
            <Paper elevation={3} className='paper'>
                <div className='paper-text'>
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
                                min='0' 
                                max='10'
                                onChange={this.onChangeFeeling}
                            />
                            {/* <TextField_Component
                                input={this.state.feeling}
                                onChangeFeeling={this.onChangeFeeling}
                            /> */}
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

export default connect()(withRouter(Feeling));