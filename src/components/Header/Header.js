import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App/App.css';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                <h1 className="App-title">Feedback!</h1>
                <h4><i>Prime Academy</i></h4>
                </header>
                <br/>
            </div>
        );
    }
}

export default connect()(Header);