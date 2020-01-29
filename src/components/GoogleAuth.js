import React from 'react';
import { Button } from 'antd';
import  { connect } from 'react-redux';

import { signIn, signOut } from '../store/actions';
import { signInWithGoogle, auth } from '../firebase/firebase.utils';
 
class GoogleAuth extends React.Component {
  constructor(props){
    super(props);
    this.auth = auth;
    this.state = { currentUser: null }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = this.auth.onAuthStateChanged(user => {
      this.setState({
           isSignedIn: true, 
           currentUser: user
      }, () => this.onAuthChange(user));
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  onAuthChange = currentUser => {
    if(currentUser){
      this.props.signIn(this.state.currentUser.uid);
    }else {
      this.props.signOut();
    }
  }

  onSignInClick  = () => {
    signInWithGoogle()
  }
  
  onSignOutClick = async () => {
     await this.auth.signOut();
     this.setState({ isSignedIn: false })
  }

  renderAuthButton() {
    if (this.props.isSignedIn){
      return <Button onClick={this.onSignOutClick} type="primary" icon="google"> Sign out </Button>
    }else{
      return <Button onClick={this.onSignInClick} type="danger" icon="google"> Sign In with Google </Button>
    } 
  }

  render(){ 
    return <div> {this.renderAuthButton()} </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { signIn, signOut }) (GoogleAuth);