import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  state = {
    value: 1,
    message: "increase or decrease",
    showMessage: true
  }



  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1,
      showMessage: false
    })
  }

  decrement = () => {
    if (this.state.value <= 0){
      this.setState({
        message: "Value can't be lesser than 0",
        showMessage: true
      })
    }else{
      this.setState({
        value: this.state.value - 1
      })
    }
  }

  reset = () => {
    this.setState({
      value: this.state.value = 0,
      message:"increase or decrease",
      showMessage:true
    })
  }

  render(){
  return (
    <div className = "App">
      <h1>Hello World</h1>
      <h1>{this.state.value}</h1>
      <button onClick = {()=> this.handleIncrement()}>Increment</button>
      <button onClick = {()=> this.reset()}>Reset</button>
      <button onClick = {()=> this.decrement()}>Decrement</button>
      {this.state.showMessage === true &&
      <p style={{color: 'red'}}>{this.state.message}</p> 
      }
    </div>
  );
  }
}

export default App;