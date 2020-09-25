import React, { Component } from 'react';
import axios from 'axios';
import {Route, HashRouter as Router} from 'react-router-dom';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';
import Submission from '../Submission/Submission';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import './App.css';

class App extends Component {

  componentDidMount = () => {
    this.getFeedback();
  }

  getFeedback = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    }).then(response => {
      console.log('/feedback GET response is:', response);
    }).catch(err => {
      console.error('/feedback GET error is:', err);
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
          
          <Route path='/' exact>
            <Feeling />
          </Route>

          <Route path='/understanding' exact>
            <Understanding />
          </Route>

          <Route path='/support' exact>
            <Support />
          </Route>

          <Route path='/comments' exact>
            <Comments />
          </Route>

          <Route path='/review' exact>
            <Review />
          </Route>

          <Route path='/submission' exact>
            <Submission />
          </Route>

        </div>
      </Router>
    );
  }
}

export default App;
