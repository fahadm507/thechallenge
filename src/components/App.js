import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import ChallengeList from '../components/challenges/ChallengeList';
import CreateChallenge from '../components/challenges/CreateChallenge';
import ShowChallenge from '../components/challenges/ShowChallenge';
import EditChallenge from '../components/challenges/EditChallenge';
import DeleteChallenge from '../components/challenges/DeleteChallenge';

import NavBar from './NavBar';

class App extends Component {
  render(){
    return(
      <Layout className="layout">
        <NavBar />
          <Switch>
            <Route exact path="/new" component={CreateChallenge} />
            <Route exact path="/challenges" component={ChallengeList} />
            <Route exact path="/challenges/edit/:id" component={EditChallenge} />
            <Route exact path="/challenges/:id" component={ShowChallenge} />
            <Route exact path="/challenges/delete/:id" component={DeleteChallenge} />
          </Switch>
      </Layout>
    );
  }
}

export default App;