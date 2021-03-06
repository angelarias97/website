import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import FileUpload from './fileUpload';

class App extends Component {

  constructor(){
    super();
    this.state={
      user: null
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.renderLoginButton = this.renderLoginButton.bind(this);

  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      this.setState ({user });
    })
  }

  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout (){
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha salido`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  renderLoginButton(){
    if(this.state.user){
      return (
        <div>
          <img width= "100" src = {this.state.user.photoURL} alt = {this.state.user.displayName}/>
          <p>Hola {this.state.user.displayName}!</p>
          <button onClick = {this.handleLogout}>Salir</button>
          <FileUpload />
        </div>
      );
    }else{
      return(
        <button onClick={this.handleAuth}>login con Google</button>
      );
      
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>WebSite</h2>
        </div>
        <p className="App-intro">
          {this.renderLoginButton()}
        </p>
      </div>
    );
  }
}

export default App;
