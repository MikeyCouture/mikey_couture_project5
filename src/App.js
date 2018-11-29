import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Qs from "qs";
// import firebase from "./firebase";


// extened Component class to App
class App extends Component {
  constructor(){
    super();
    this.state = {
      text: ""
    }
  }

  // making my Axios API request call using proxy.Hackeryou

  // componentDidMount() {
  //   axios({
  //     method: 'GET',
  //     url: "http://proxy.hackeryou.com",
  //     dataResponse: 'json',
  //     paramsSerializer: function (params) {
  //       return Qs.stringify(params, { arrayFormat: 'brackets' })
  //     },
  //     params: {
  //       reqUrl: "https://api.funtranslations.com/translate/dothraki.json",
  //       params: {
  //         text: this.state.text
  //       },
  //       xmlToJSON: false,
  //       useCache: true
  //     }
  //   }).then(res => {
  //     console.log(res)
  //     this.setState({
  //       text: this.state.text
  //     });
  //   })
  // };

  // creating handleChange function
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // e.target.value = this.state.text
    axios({
      method: 'GET',
      url: "http://proxy.hackeryou.com",
      dataResponse: 'json',
      paramsSerializer: function (params) {
        return Qs.stringify(params, { arrayFormat: 'brackets' })
      },
      params: {
        reqUrl: "https://api.funtranslations.com/translate/dothraki.json",
        params: {
          text: this.state.text
        },
        xmlToJSON: false,
        useCache: true
      }
    }).then(res => {
      console.log(res)
      this.setState({
        text: this.state.text
      });
    })
  };

  render() {
    return (
      <div className="App">
        <h1>Westeros Translation App: Dothraki Edition!</h1>
        <form onSubmit={this.handleSubmit} action="">
          <label htmlFor="text">Enter your phrase here: </label>
          {/* Dear future Mikey - both Inputs will need a value */}
          <input onChange={this.handleChange} value={this.state.text} type="text" id="text" />
          <input type="submit" value="Dothraki Me!"/>
        </form>
        <h2>{}</h2>
      
      </div>
    );
  }
}

export default App;
