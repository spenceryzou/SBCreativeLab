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


    handleScroll(){
        var rgbArray = hexRgb(backgroundColor,{format: 'array'});
        var targetArray = hexRgb("#E5F8FF",{format: 'array'});
        const section1 = document.querySelector('.content')
        var scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        console.log(scrollPercent)
        var r = rgbArray[0] + (targetArray[0]-rgbArray[0])*(scrollPercent);
        var g = rgbArray[1] + (targetArray[1]-rgbArray[1])*(scrollPercent);
        var b = rgbArray[2] + (targetArray[2]-rgbArray[2])*(scrollPercent);
        section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    render() {
        let closeMenu = this.props.closeMenu;

        return (
            <div style={{backgroundColor: backgroundColor}} className="content">
              <div className="menu hidden" id="menu">
                <img src={close} alt={'hamburger menu'} className="hamburger-icon" onClick={() => {closeMenu()}} />  
                <div className="menu-container">
                  <div className="menu-text">
                    <div style={{color: 'white'}} className="title">
                    about
                    </div>
                    <div style={{color: 'white'}} className="title">
                    resources
                    </div>
                    <div style={{color: 'white'}} className="title">
                    events
                    </div>
                    <div style={{color: 'white'}} className="title">
                    suggestions
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
            </div>
        )
    }
}
