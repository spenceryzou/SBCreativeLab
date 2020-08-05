import React, { Component } from 'react'
import { Link, Route, Switch } from "react-router-dom";
import './App.css'
import Home from './Components/Home'

export class App extends Component {
  
  render() {
    return (
      <div>
        <head>
          <title>SB Creative Lab</title>
          <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;700&family=Karla:wght@400;700&display=swap" rel="stylesheet"/>
        </head>
          <div className="main-body">
              <Route exact path="/" render={(props) => <Home />}/>
              {/* <Route path="/home" render={(props) => <Home {...props} activeTab={this.state.activeTab} functions={functions}/>}/>
              <Route path="/about" render={(props) => <About {...props} activeTab={this.state.activeTab} functions={functions}/>}/>
              <Route path="/works" render={(props) => <Works {...props} activeTab={this.state.activeTab} functions={functions}/>}/>
              <Route path="/photos" render={(props) => <Photos {...props} activeTab={this.state.activeTab} functions={functions}/>}/>
              <Route path="/fun" render={(props) => <Fun {...props} activeTab={this.state.activeTab} functions={functions}/>}/>
              <Route path="/contact" render={(props) => <Contact {...props} activeTab={this.state.activeTab} functions={functions}/>}/>
              <Body activeTab={this.state.activeTab} functions={functions}/> */}
          </div>
      </div>
    )
  }
}
export default App;
