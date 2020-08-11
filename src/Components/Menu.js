import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';
const hexRgb = require('hex-rgb');
let backgroundColor="#FED269"
let primaryColor="#1BB994"
let darkColor="#356A69"
const facebook = "./images/facebook.svg"
const instagram = "./images/instagram.svg"
const linkedin = "./images/linkedin.svg"
const youtube = "./images/youtube.svg"
const close = "./images/Hamburger Menu Close.svg"
 
export default class Home extends Component {


    // handleScroll(){
    //     var rgbArray = hexRgb(backgroundColor,{format: 'array'});
    //     var targetArray = hexRgb("#E5F8FF",{format: 'array'});
    //     const section1 = document.querySelector('.content')
    //     var scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    //     console.log(scrollPercent)
    //     var r = rgbArray[0] + (targetArray[0]-rgbArray[0])*(scrollPercent);
    //     var g = rgbArray[1] + (targetArray[1]-rgbArray[1])*(scrollPercent);
    //     var b = rgbArray[2] + (targetArray[2]-rgbArray[2])*(scrollPercent);
    //     section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    // }
    // componentDidMount(){
    //     window.addEventListener('scroll', this.handleScroll);
    // }
    render() {
        let closeMenu = this.props.closeMenu;

        return (
              <div className="menu" id="menu">
                <div className="menu-container">
                  <div className="bars">
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                  </div>
                  <div className="menu-text">
                      <div>
                        <a className="menu-link">
                        about
                        </a>
                      </div>
                      <div>
                        <a className="menu-link">
                        resources
                        </a>
                      </div>
                      <div>
                        <a className="menu-link">
                        events
                        </a>
                      </div>
                      <div>
                        <a className="menu-link">
                        suggestions
                        </a>
                      </div>
                  </div>
                  <div className="menu-socials">
                      <img src={facebook} alt="facebook" className="social-icon"/>
                      <img src={instagram} alt="instagram" className="social-icon"/>
                      <img src={linkedin} alt="linkedin" className="social-icon"/>
                      <img src={youtube} alt="youtube" className="social-icon"/>
                  </div>
                </div>
              </div>
        )
    }
}
