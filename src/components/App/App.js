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
import Admin from '../Admin/Admin';
import './App.css';

class App extends Component {

  state = {
    feedback: []
  }

  // axios POST
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

  componentDidMount = () => {
    this.getFeedback();
  }

  //axios GET
  getFeedback = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    }).then(response => {
      console.log('/feedback GET response is:', response);
      this.setState({
        feedback: response.data
      });
    }).catch(err => {
      console.error('/feedback GET error is:', err);
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
            <Review 
              postFeedback={this.postFeedback}
            />
          </Route>

          <Route path='/submission' exact>
            <Submission />
          </Route>

          <Route path='/admin' exact>
            <Admin
              feedback={this.state.feedback}
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