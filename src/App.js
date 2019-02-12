import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSub: "india",
      subs: ["CrackWatch", "AMA", "india"],
      subData: ""
    };
  }

  changeSub = e => {
    this.setState({
      currentSub: e.target.value
    });
    this.componentDidMount();
  };


  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get(`https://www.reddit.com/r/${this.state.currentSub}.json`)
      .then(res => {
        this.setState({
          subData: res.data.data.children
        })
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log(this.state.currentSub)

    return (
      <div className="App" style={{background:"rgb(48, 48, 48)", height:"100%"}}>
        <Header changeSub={this.changeSub} subs={this.state.subs} />
        <Content data={this.state.subData} />
      </div>
    );
  }
}

export default App;
