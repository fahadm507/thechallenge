import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';

import ChallengeList from '../components/challenges/ChallengeList';
import CreateChallenge from '../components/challenges/CreateChallenge';
import ShowChallenge from '../components/challenges/ShowChallenge';
import EditChallenge from '../components/challenges/EditChallenge';
import DeleteChallenge from '../components/challenges/DeleteChallenge';
import NavBar from './NavBar';
const { Header, Content, Footer } = Layout;

class App extends React.Component {
    render(){
        return (
        <Layout>
            <Header style={{ padding:0, background: '#fff' }} className="header">
                <NavBar />
            </Header>
            <Content>
              <Layout style={{ background: '#fff' }}>
                <Content style={{ padding: '0 24px', minHeight: '100%' }}>
                    <Switch>
                        <Route exact path="/" component={ChallengeList} />
                        <Route exact path="/new" component={CreateChallenge} />
                        <Route exact path="/challenges" component={ChallengeList} />
                        <Route exact path="/challenges/edit/:id" component={EditChallenge} />
                        <Route exact path="/challenges/:id" component={ShowChallenge} />
                        <Route exact path="/challenges/delete/:id" component={DeleteChallenge} />
                    </Switch>
                </Content>
              </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Challengily ©2018 All rights reserverd.
            </Footer>
        </Layout>
  );
    }
}

export default App;