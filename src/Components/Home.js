import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import ReactFullpage from '@fullpage/react-fullpage';
import { ReactComponent as Logo } from "./logo.svg";
const hexRgb = require('hex-rgb');
let backgroundColor="#F7FDF4"
let primaryColor="#1BB994"
let darkColor="#356A69"
const menu = './images/Hamburger Menu.svg'
const gsap = window.gsap;

 
export default class Home extends Component {
    
    constructor(props){
      super(props);

      this.state = {
        handleMenu: this.props.handleMenu,
      }

      console.log(this.props);
    }

    handleScroll(){
        var rgbArray = hexRgb(backgroundColor,{format: 'array'});
        var targetArray = hexRgb("#356a69",{format: 'array'});
        const section1 = document.querySelector('.content')
        var scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        console.log(scrollPercent)
        var r = rgbArray[0] + (targetArray[0]-rgbArray[0])*(scrollPercent);
        var g = rgbArray[1] + (targetArray[1]-rgbArray[1])*(scrollPercent);
        var b = rgbArray[2] + (targetArray[2]-rgbArray[2])*(scrollPercent);
        section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
    componentDidMount(){
        //window.addEventListener('scroll', this.handleScroll);
        // var hamburger = document.querySelector(".menu1");
        var checkbox = document.querySelector("input[name=checkbox]");
        checkbox.addEventListener( 'change',this.props.handleMenu);
        // hamburger.addEventListener("click", function() {
        //     hamburger.classList.toggle("open");
        //     console.log(hamburger.classList)
        // });
        // hamburger.addEventListener("click", this.props.openMenu);
    }
    onLeave(origin, destination, direction) {
        console.log("Leaving section " + origin.index);
        const tl = gsap.timeline();
        if(origin.index===0){
            // const wave = document.getElementById('.wave');
            tl.fromTo("#wave", 1.24, {y: '0%'}, {y:'-130%'})
        }
        if(destination.index===0){
            // const wave = document.getElementById('.wave');
            tl.fromTo("#wave", 1.1, {y: '-130%'}, {y:'0%'})
        }
        if(destination.index===1){
            tl.fromTo('.textContainer', .5, {y: '40', opacity: 0}, {y:0, opacity: 1, delay: -.4})
        }
    }
    afterLoad(origin, destination, direction) {
        console.log("After load: " + destination.index);
        // const tl = gsap.timeline();
        // if(destination.index===1){
        //     tl.fromTo('.textContainer', .5, {y: '50', opacity: 0}, {y:0, opacity: 1})
        // }
    }

    render() {
        let handleMenu = this.props.handleMenu;
        console.log(handleMenu);

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
                        {/* <div class="menu1 cross menu--1">
                            <input type="checkbox"></input>
                            <label>
                            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="30" />
                                <path class="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
                                <path class="line--2" d="M0 50h70" />
                                <path class="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
                            </svg>
                            </label>
                        </div> */}
                        {/* <div className="hamburger-circle">
                            <div style={{fontSize: "7px"}} class="burger burger-slip">
                                <div class="burger-lines"></div>
                            </div>
                        </div> */}
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
                <div className="waveContainer"><img id="wave" src="/wave2.png"/></div>   
                <ReactFullpage
                    scrollingSpeed = {1000}     
                    // scrollBar = {true} 
                    onLeave={this.onLeave.bind(this)}
                    afterLoad={this.afterLoad.bind(this)}
                    render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
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
                                            join our slack channel for updates.
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}/>
            </div>
            //     {/* <div style={{height: "100vh"}} className="content-body">
            //         {/* <ReactFullpage
            //             scrollingSpeed = {1000}      
            //             render={({ state, fullpageApi }) => {
            //             return (
            //                 <ReactFullpage.Wrapper>
            //                 <div className="section">
            //                     <p>Section 1 (welcome to fullpage.js)</p>
            //                     <button onClick={() => fullpageApi.moveSectionDown()}>
            //                     Click me to move down
            //                     </button>
            //                 </div>
            //                 <div className="section">
            //                     <p>Section 2</p>
            //                 </div>
            //                 </ReactFullpage.Wrapper>
            //             );
            //         }}/>   
            //         <div className="content-body-text">
            //             <div className="center-container" id="home">            
            //                 <div style={{color: darkColor}} className="title">
            //                 SB Creative Lab 
            //                 </div>
            //                 <div className="subtitle">
            //                 let's learn&nbsp;
            //                     <div style={{display: "inline-block", color: primaryColor}}>
            //                         <Typewriter options={{loop:true,
            //                         delay: 50,
            //                         deleteSpeed: 50}}
            //                         onInit={(typewriter) => {
            //                             typewriter.typeString('design.')
            //                             .pauseFor(2500)
            //                             .deleteAll()
            //                             typewriter.typeString('illustration.')
            //                             .pauseFor(2500)
            //                             .deleteAll()
            //                             typewriter.typeString('UI/UX.')
            //                             .pauseFor(3000)
            //                             .start();
            //                         }}
            //                         />
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>        
            //     </div> */}
            //     {/* <div style={{height: "100vh"}} className="content-body">
            //         <object>
            //             <embed src="penucsb.svg"></embed>
            //         </object>
            // </div>*/}
            
        )
    }
}
