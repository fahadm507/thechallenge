// 640281149926-4cvvl17bc269nb0svbfck5m2k0a8du5e.apps.googleusercontent.com
import React from 'react';
import { Button } from 'antd';

class GoogleAuth extends React.Component {

  state = { isSignedIn: null }

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
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    });
  }

  onAuthChange = () => {
    this.setState({isSignedIn: this.auth.isSignedIn.get()})
  }

  onSignInClick  = () => {
    this.auth.signIn();
  }
  
  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if(this.state.isSignedIn === null){
      return <div> I don't know if we are signed in </div>
    }else if (this.state.isSignedIn){
      return <Button onClick={this.onSignOutClick} type="primary" icon="google"> Sign out </Button>
    }else{
      return  <Button onClick={this.onSignInClick} type="danger" icon="google"> Sign In with Google </Button>
    } 
  }

  render(){ 
    return <div> {this.renderAuthButton()} </div>;
  }
}

export default GoogleAuth;