import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {
    render() {
        return (
            <div>
                {/* <h1>How are you feeling today?</h1>
                <h5>Feeling?</h5>
                <input required 
                    type='number'
                    onChange={(event) => this.handleChangeFor('feeling', event)}
                /> */}
            </div>
        );
    }
}

export default connect()(Feeling);