import React, { Component } from 'react';
import axios from 'axios';
import {Route, HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';
import Submission from '../Submission/Submission';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Header from '../Header/Header';
import './App.css';

class App extends Component {

  // POST route
  postFeedback = () => {
    axios({
      method: 'POST',
      url: '/feedback',
      data: this.props.feedbackResults
    }).then(response => {
      console.log('/feedback POST response is:', response);
    }).catch(err => {
      console.error('/feedback POST error is:', err);
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          
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
            <Submission
              postFeedback={this.postFeedback}
            />
          </Route>

        </div>
      </Router>
    );
  }
}

// Pushing the object of feedback into axios POST
const mapStateToProps = (reduxState) => ({
  feedbackResults: reduxState.feedbackCategory
});
export default connect(mapStateToProps)(App);