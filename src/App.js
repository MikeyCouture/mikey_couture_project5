// All the imports needed to run the App component
import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import firebase from "./firebase";
import Qs from "qs";
import DisplayTranslate from "./component/DisplayTranslate"
import DisplayFirebase from "./component/DisplayFirebase"

// setting a variable for the firebsase database to be used in the snapshot
const dbRef = firebase.database().ref();


// App class component 
class App extends Component {
  constructor(){
    super();
    this.state = {
      text: "",
      submitedText: "",
      translated: "",
      phrase: {},
      showFirebase: false
      // pass this down as a prop
    }
  }

  // firing off the firebase snapshot when component mounts 
  componentDidMount() {
    console.log("I mounted yo!");
    dbRef.on("value", (snapshot) => {
      this.setState({
        phrase: snapshot.val()
      });
    });
  }

  // creating handleChange function to change the state of text
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  // handleSubmit is firing off the axios API request.
  // saving the info as variables after "then"
  // setting a new variable called newPhrase and pushing the content to firebase

  handleSubmit = (e) => {
    e.preventDefault();
    // API call
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
        },
        xmlToJSON: false,
        useCache: true
      }
    }).then(res => {
      // saving the returns of API call in variables 
      const translateInfo = res.data.contents;
      const dothrakiTranslation = translateInfo.translated;
      console.log(translateInfo)
      console.log(dothrakiTranslation);

      // setting a new variable to push to firebase
      const newPhrase = {
        text: this.state.text,
        translated: dothrakiTranslation,
      };

      // pushing both text and translation to firebase
      dbRef.push(newPhrase);


      // on handleSubmit, changing the translated state to saved variable
      // also changing submitted text to what ever the text is in state
      this.setState({
        translated: dothrakiTranslation,
        submitedText: this.state.text
      });
    })
  };

  showPhrases = (e) => {
  // toggle showFirebase true or false
    this.setState({
      showFirebase: true
    })
  }


  render() {
    return (
      <div className="App">
        <h1 className="westerosBanner">Westeros Translation App: Dothraki Edition!</h1>
        <div className="container">
          <form onSubmit={this.handleSubmit} action="">
            <label htmlFor="text">Enter your phrase here: </label>
            <input onChange={this.handleChange} value={this.state.text} type="text" id="text" />
            <input type="submit" value="Dothraki Me!" id="translated"/>
          </form>
          <DisplayTranslate submitedText={this.state.submitedText} translated={this.state.translated} />
          {this.state.showFirebase ? <DisplayFirebase id="showFirebase" phrase={this.state.phrase} showFirebase={this.state.showFirebase} /> : null} 
        </div>
        <button id="phrase" onClick={this.showPhrases}>Saved Dothraki Phrases</button>
      </div>
    );
  }
}

export default App;