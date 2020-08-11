import React, { Component } from 'react'
import { Link, Route, Switch } from "react-router-dom";
import './App.css'
import Home from './Components/Home'
import Menu from './Components/Menu'

export class App extends Component {
  constructor(props){
    super(props);

    this.state = {
    display: [<Route exact path="/" render={(props) => <Home {...props} handleMenu={this.handleMenu} />}/>],
    }

    this.handleMenu = this.handleMenu.bind(this);
    // this.closeMenu = this.closeMenu.bind(this);
  }

  handleMenu() {
    console.log('open menu');
    let menu = document.getElementById("menu");
    if(menu.classList.contains("drop")){
      menu.classList.remove("drop");
      console.log(menu.classList);
      // document.documentElement.style.overflow = 'scroll';
      // document.body.scroll = "yes";
    }
    else{
      menu.classList.add("drop");
      console.log(menu.classList);
      // document.documentElement.style.overflow = 'hidden';
      // document.body.scroll = "no";
    }
    //menu.classList.remove("rise");

    // let home = document.getElementById("home");
    // home.style.animation = "rise";
    // // home.style.marginTop = "100vh";
    // let hamIcon = document.getElementById("hamburger-icon");
    // hamIcon.style.marginTop = "100vh";
  }

  // closeMenu() {
  //   let menu = document.getElementById("menu");

  //   menu.classList.remove("drop");
  //   menu.classList.add("rise");
  //   menu.classList.add("hidden");
  // }

  // async closeMenu() {
  //   console.log('close menu');

  //   await this.hideMenu();

  //   // this.hideMenu().then(() => {
  //   //   let home = document.getElementById("home");
  //   //   home.style.marginTop = "unset";
  //   //   let hamIcon = document.getElementById("hamburger-icon");
  //   //   hamIcon.style.marginTop = "unset";
  //   // })
  // }

  // closeMenu() {
  //   // let promise = new Promise((resolve, reject) => {
  //     let menu = document.getElementById("menu");

  //     menu.classList.remove("drop");
  //     menu.classList.add("rise");
  //     menu.classList.add("hidden");

  //     // resolve("menu hidden");
  //   // })

  //   // return promise;
  // }

  
  render() {

    return (
      <div>
        <head>
          <title>SB Creative Lab</title>
          <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;700&family=Karla:wght@400;700&display=swap" rel="stylesheet"/>
        </head>
          <div className="main-body">
              {/* {this.state.display} */}
              <Route exact path="/" render={(props) => <Menu {...props} handleMenu={this.handleMenu} />}/>
              <Route exact path="/" render={(props) => <Home {...props} handleMenu={this.handleMenu} />}/>

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
