import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Qs from "qs";
import DisplayTranslate from "./component/DisplayTranslate"
// import firebase from "./firebase";

// const dbRef = firebase.database().ref();


// extened Component class to App
class App extends Component {
  constructor(){
    super();
    this.state = {
      text: "",
      submitedText: "",
      translated: ""
    }
  }

  componentDidMount() {
    console.log("I mounted yo!");
    // dbRef.on("value", (snapshot) => {
    //   this.setState({
    //     text: snapshot.val()
    //   });
    // });
  }

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
          text: this.state.text,
          // translated: this.state.translated
        },
        xmlToJSON: false,
        useCache: true
      }
    }).then(res => {
      const translateInfo = res.data.contents;
      const dothrakiTranslation = translateInfo.translated;
      console.log(translateInfo)
      console.log(dothrakiTranslation);

      this.setState({
        // text: "",
        translated: dothrakiTranslation,
        submitedText: this.state.text
      });
    })
  };

  render() {
    return (
      <div className="App">
        <h1>Westeros Translation App: Dothraki Edition!</h1>
        <form onSubmit={this.handleSubmit} action="">
          <label htmlFor="text">Enter your phrase here: </label>
          <input onChange={this.handleChange} value={this.state.text} type="text" id="text" />
          <input type="submit" value="Dothraki Me!" id="translated"/>
          {/* <input onClick={this.handleClick} type="submit" value={this.state.translated} id="translated" /> */}
        </form>
        <DisplayTranslate submitedText={this.state.submitedText} translated={this.state.translated} />
      </div>
    );
  }
}

export default App;



 // const newPhrase = {
      //   text: this.state.text,
      //   translated: dothrakiTranslation
      // };

      // console.log(newPhrase);

      // dbRef.push(newPhrase);