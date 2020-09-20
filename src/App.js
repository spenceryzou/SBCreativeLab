import React, { Component } from 'react'
import {Route} from "react-router-dom";
import './App.css'
import Home from './Components/Home'
import Menu from './Components/Menu'
import Oops from './Components/Oops'
import About from './Components/About'
import ReactGA from 'react-ga'

export class App extends Component {
  constructor(props){
    super(props);

    this.state = {
    }

  }
  initializeReactGA() {
    ReactGA.initialize('UA-178117149-1');
    ReactGA.pageview('/app');
  }
  componentDidMount(){
    this.initializeReactGA();
  }
  
  render() {

    return (
      <div>
        <head>
          <title>SB Creative Lab</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </head>
          <div className="main-body">
              {/* {this.state.display} */}
              <Route exact path="/" render={(props) => <Menu {...props}/>}/>
              <Route exact path="/" render={(props) => <Home {...props}/>}/>
              <Route exact path="/oops" render={(props) => <Oops {...props}/>}/>
              <Route exact path="/about" render={(props) => <About {...props}/>}/>
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
