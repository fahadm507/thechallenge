// 640281149926-4cvvl17bc269nb0svbfck5m2k0a8du5e.apps.googleusercontent.com
import React from 'react';
import { Button } from 'antd';
import  { connect } from 'react-redux';
import { signIn, signOut } from '../store/actions';
 
class GoogleAuth extends React.Component {

  componentDidMount(){
    //load the Google's auth2 library
    window.gapi.load('client:auth2', () => {
      //when it is ready, initialize it with the clientid and scope
      window.gapi.auth2.init({
        clientId: '640281149926-4cvvl17bc269nb0svbfck5m2k0a8du5e.apps.googleusercontent.com',
        scope:'email'
      }).then(() => {
        //When it has been initialized, add an auth2 instance to our component class
        this.auth = window.gapi.auth2.getAuthInstance();
        // update state inside our Redux store
        this.onAuthChange(this.auth.isSignedIn.get())
        // Wait for the authentication status to change in the future.
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    });
  }

  onAuthChange = isSignedIn => {
    if(isSignedIn){
      this.props.signIn(this.auth.currentUser.get().getId());
    }else {
      this.props.signOut();
    }
  }

  onSignInClick  = () => {
    this.auth.signIn();
  }
  
  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if(this.props.isSignedIn === null){
      return <div> I don't know if we are signed in </div>
    }else if (this.props.isSignedIn){
      return <Button onClick={this.onSignOutClick} type="primary" icon="google"> Sign out </Button>
    }else{
      return  <Button onClick={this.onSignInClick} type="danger" icon="google"> Sign In with Google </Button>
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