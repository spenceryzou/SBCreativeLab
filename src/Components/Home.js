import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import ReactFullpage from '@fullpage/react-fullpage';
import { ReactComponent as Logo } from "./logo.svg";
// const hexRgb = require('hex-rgb');
let backgroundColor="#F7FDF4"
let primaryColor="#1BB994"
let darkColor="#356A69"
const gsap = window.gsap;

 
export default class Home extends Component {
    
    constructor(props){
      super(props);

      this.state = {
        // handleMenu: this.props.handleMenu,
        wave: "",
        menuOpen: false
      }

      console.log(this.props);
    }
    handleMenu() {
        this.setState(prevState => ({
            menuOpen: !prevState.menuOpen
        }))
    }
    componentDidUpdate(){
        let menu = document.getElementById("menu");
        if(this.state.menuOpen == true){
            console.log('open menu')
            menu.classList.add("drop");
            console.log(menu.classList);
            // window.fullpage_api.setAutoScrolling(false);
            // document.documentElement.style.overflow = 'hidden';
            // document.documentElement.style.height = '100%';
        }else if(this.state.menuOpen == false){
            menu.classList.remove("drop");
            console.log(menu.classList);
            // window.fullpage_api.setAutoScrolling(true);
        }
    }
    // handleScroll(){
    //     var rgbArray = hexRgb(backgroundColor,{format: 'array'});
    //     var targetArray = hexRgb("#356a69",{format: 'array'});
    //     const section1 = document.querySelector('.content')
    //     var scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    //     console.log(scrollPercent)
    //     var r = rgbArray[0] + (targetArray[0]-rgbArray[0])*(scrollPercent);
    //     var g = rgbArray[1] + (targetArray[1]-rgbArray[1])*(scrollPercent);
    //     var b = rgbArray[2] + (targetArray[2]-rgbArray[2])*(scrollPercent);
    //     section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    // }
    componentDidMount(){
        //window.addEventListener('scroll', this.handleScroll);
        var checkbox = document.querySelector("input[name=checkbox]");
        checkbox.addEventListener( 'change',this.handleMenu.bind(this));
    }
    onLeave(origin, destination, direction) {
        console.log("Leaving section " + origin.index);
        const tl = gsap.timeline();
        if(origin.index===0){
            document.getElementById("fullpage").classList.add("ease");
            this.setState({wave: "wave-move-up"});
        }
        if(destination.index===0){
            this.setState({wave: "wave-move-down"});
        }
        if(destination.index===1){
            if(origin.index===0){
                tl.fromTo('.textContainer', .5, {y: '40', opacity: 0}, {y:0, opacity: 1, delay: 1.4})
            }else{
                tl.fromTo('.textContainer', .5, {y: '40', opacity: 0}, {y:0, opacity: 1, delay: .8})
            }
        }
    }
    afterLoad(origin, destination, direction) {
        console.log("After load: " + destination.index);
        if(destination.index===1){
            document.getElementById("fullpage").classList.remove("ease");
        }
    }

    render() {
        return (
            <div style={{backgroundColor: backgroundColor}} className="content">
                <div className="header">
                    <div className="header-left">
                        <div className="logo-wrapper">
                            <a href="/">
                                <Logo width="100%" display="block" height="auto"/>
                            </a>
                        </div>
                    </div>    
                    <div className="header-right">
                        <div className="hamburger-circle">
                            <div class="menu1 cross menu--1">
                                <label>
                                <input name="checkbox" type="checkbox"/>
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 80 80">
                                <circle cx="40" cy="40" r="30"/>
                                <path class="line--1" d="M-10,30h62c13,0,6,28-4,18L25,25"/>
                                <path class="line--1" d="M-10,30h62c13,0,6,28-4,18L25,25"/>
                                <path class="line--2" d="M-10,40h70"/>
                                <path class="line--2" d="M-10,40h70"/>
                                <path class="line--3" d="M-10,50h62c13,0,6-28-4-18L25,55"/>
                                <path class="line--3" d="M-10,50h62c13,0,6-28-4-18L25,55"/>
                                </svg>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <ReactFullpage
                    scrollingSpeed = {1000}
                    // easingcss3 = {"cubic-bezier(0.71,-0.05, 0.47, 1)"}    
                    // scrollBar = {true} 
                    normalScrollElements = '.menu'
                    onLeave={this.onLeave.bind(this)}
                    afterLoad={this.afterLoad.bind(this)}
                    render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                            <div className="waveContainer"><img src="/LongerWave.png" className={`wave ${this.state.wave}`} /></div>   
                                <div className="content-body-text">
                                    <div className="center-container" id="home">            
                                        <div style={{color: darkColor}} className="title">
                                            SB Creative Lab 
                                        </div>
                                        <div className="subtitle">
                                            let's learn&nbsp;<div style={{display: "inline-block", color: primaryColor}}> <Typewriter options={{loop:true, delay: 50, deleteSpeed: 50}}
                                                onInit={(typewriter) => {
                                                    typewriter.typeString('design.')
                                                    .pauseFor(2500)
                                                    .deleteAll()
                                                    typewriter.typeString('illustration.')
                                                    .pauseFor(2500)
                                                    .deleteAll()
                                                    typewriter.typeString('UI/UX.')
                                                    .pauseFor(3000)
                                                    .start();
                                                }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                            <div style={{backgroundColor: "#356a69"}} className="section">
                                <div className="textContainer">
                                    <div style={{color: "white"}} className="title">
                                        Mission
                                    </div>
                                    <div className="longCaption" style={{color: "white"}}>
                                        SB Creative Lab strives to empower and
                                        build an inclusive design community at UC
                                        Santa Barbara by providing opportunities
                                        and resources for student designers.
                                    </div>
                                </div>
                                <div className="imageContainer">
                                    <img id="leftCloud" src="/leftCloud.png"/>
                                    <img id="rightCloud" src="/rightCloud.png"/>
                                    <img id="mainAirplane" src="/mainAirplane.png"/>
                                    <img id="topAirplane" src="/topAirplane.png"/>
                                    <img id="rightAirplane" src="/rightAirplane.png"/>
                                    <img id="leftAirplane" src="/leftAirplane.png"/>
                                </div>
                            </div>
                            <div className="section">
                                <div className="content-body-text">
                                    <div className="center-container" id="home">            
                                        <div style={{color: darkColor}} className="title">
                                            let's keep in touch!
                                        </div>
                                        <div className="subtitle2">
                                            <ul class="links">
                                                <li class="link"><a href="https://www.facebook.com/sbcreativelab/">facebook</a></li>
                                                <li class="link"><a href="https://www.instagram.com/sbcreativelab/">instagram</a></li>
                                                <li class="link"><a href="https://www.linkedin.com/company/sbcreativelab/">linkedin</a></li>
                                                <li class="link"><a href="/oops">slack</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}/>
            </div>
        )
    }
}
