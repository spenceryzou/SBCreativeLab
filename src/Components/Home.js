import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import ReactFullpage from '@fullpage/react-fullpage';
import { ReactComponent as Logo } from "./logo.svg";
import Div100vh from 'react-div-100vh';
import Parallax from 'parallax-js';
import Menu from './Menu';
// const hexRgb = require('hex-rgb');
let backgroundColor="#F7FDF4"
let primaryColor="#1BB994"
let darkColor="#356A69"
const gsap = window.gsap;
 
export default class Home extends Component {
    
    constructor(props){
        super(props);

        this.state = {
        wave: "",
        menuOpen: false,
        }

        // this.resetScroll = () =>{
        //     document.documentElement.scrollTop = -1;
        //     this.resize();
        // }
        // this.resize = () => {
        //     var height = window.innerHeight;
        //     if(window.innerHeight !== height) {
        //         height = window.innerHeight;
        //         document.getElementsByClassName('.section').css('height', height + 'px');
        //     }
        // }
    }
    handleMenu() {
        this.setState(prevState => ({
            menuOpen: !prevState.menuOpen
        }))
    }
    
    componentDidUpdate(){
        let menu = document.getElementById("menu");
        if(this.state.menuOpen === true){
            console.log('open menu')
            menu.classList.add("drop");
            console.log(menu.classList);
        }else if(this.state.menuOpen === false){
            menu.classList.remove("drop");
            console.log(menu.classList);
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
        var checkbox = document.querySelector("input[name=checkbox]");
        checkbox.addEventListener( 'change',this.handleMenu.bind(this));
        var waveParallax = document.getElementById('waveParallax');
        var parallaxInstance = new Parallax(waveParallax, {
        relativeInput: true,
        frictionX: .075,
        frictionY: .075
        });
        var scene = document.getElementById('scene');
        var parallaxInstance1 = new Parallax(scene, {
        relativeInput: true,
        frictionX: .075,
        frictionY: .075
        });
        var mainPlane = document.getElementById('mainPlane');
        var parallaxInstance2 = new Parallax(mainPlane, {
            relativeInput: true,
            frictionX: .075,
            frictionY: .075
            });
        // window.addEventListener('resize', this.resize());
        // this.resetScroll();
        // this.interval = setInterval(this.resetScroll(), 500); // Don't lower more than 500ms, otherwise there will be animation-problems with the  Safari toolbar
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
                tl.fromTo('.textContainer', .5, {y: '40', opacity: 0}, {y:0, opacity: 1, delay: .6})
            }else{
                tl.fromTo('.textContainer', .5, {y: '40', opacity: 0}, {y:0, opacity: 1, delay: .6})
            }
        }
    }
    afterLoad(origin, destination, direction) {
        console.log("After load: " + destination.index);
        const tl = gsap.timeline();
        if(destination.index===1){
            document.getElementById("fullpage").classList.remove("ease");
            if(origin.index===2){
                tl.fromTo('#scroll-cue', .4, { y: '-10', opacity: 0}, { y:'0', opacity: 1, delay: .1})
            }
        }
        if(destination.index===2){
            tl.fromTo('#scroll-cue', .4, {y: '0', opacity: 1}, { y:'-20', opacity: 0})
        }
    }

    render() {
        return (
            <div style={{backgroundColor: backgroundColor}} className="content">
                <Menu/>
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
                            <div className="menu1 cross menu--1">
                                <label>
                                <input name="checkbox" type="checkbox"/>
                                <svg className="menuSVG" xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 80 80">
                                    <circle cx="40" cy="40" r="30"/>
                                    <path className="line--1" d="M-10,30h62c13,0,6,28-4,18L25,25"/>
                                    <path className="line--1" d="M-10,30h62c13,0,6,28-4,18L25,25"/>
                                    <path className="line--2" d="M-10,40h70"/>
                                    <path className="line--2" d="M-10,40h70"/>
                                    <path className="line--3" d="M-10,50h62c13,0,6-28-4-18L25,55"/>
                                    <path className="line--3" d="M-10,50h62c13,0,6-28-4-18L25,55"/>
                                </svg>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="scroll-cue"><span id="scroll-cue"></span></span>
                <ReactFullpage
                    scrollingSpeed = {1000}
                    normalScrollElements = '.menu'
                    onLeave={this.onLeave.bind(this)}
                    afterLoad={this.afterLoad.bind(this)}
                    render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <div id="waveParallax" className="waveContainer">
                                    <div id="absolute">
                                    <picture>
                                        <source srcSet="/images/ucsb-creative-lab-wave.avif" type="image/avif"/>
                                        <img alt="wave" src="/images/ucsb-creative-lab-wave.png" className={`wave ${this.state.wave}`} />
                                    </picture>
                                    </div>
                                </div> 
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
                                <div id="scene" className="imageContainer">
                                    <div data-depth=".02" id="absolute"><img alt="cloud" id="leftCloud" src="/images/left-cloud.png"/></div>
                                    <div data-depth=".02" id="absolute"><img alt="cloud" id="rightCloud" src="/images/right-cloud.png"/></div>
                                    <div data-invert-x="false" data-invert-y="false" id="mainPlane" className="imageContainer">
                                    <div data-depth=".04" id="absolute"><img alt="paper plane" id="mainAirplane" src="/images/main-airplane.png"/></div></div>
                                    <div data-depth=".16" id="absolute"><img alt="paper plane" id="topAirplane" src="/images/top-airplane.png"/></div>
                                    <div data-depth=".1"id="absolute"><img alt="paper plane" id="rightAirplane" src="/images/right-airplane.png"/></div>
                                    <div data-depth=".12"id="absolute"><img alt="paper plane" id="leftAirplane" src="/images/left-airplane.png"/></div>
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
