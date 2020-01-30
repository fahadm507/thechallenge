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
      if(user){
        this.props.signIn(user.uid);
      }else {
        this.props.signOut();
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  onSignInClick  = () => {
    signInWithGoogle()
  }
  
  onSignOutClick = async () => {
     await this.auth.signOut();
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