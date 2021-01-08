import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import ReactFullpage from '@fullpage/react-fullpage';
import { ReactComponent as Logo } from "./logo.svg";
import Div100vh from 'react-div-100vh';
import Parallax from 'parallax-js';
import ReactGA from 'react-ga';
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
        prevAltLogo: [],
        prevDefaultPlane: 1,
        prevDefaultSwoosh: 1,
        prevDefaultBase: 1
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
    initializeReactGA() {
        ReactGA.initialize('UA-178117149-1');
        ReactGA.pageview('/');
    }
    // getSnapshotBeforeUpdate(){
    //     var prevAltLogo;
    //     var prevDefaultPlane;
    //     var prevDefaultSwoosh;
    //     var prevDefaultBase;
    //     var altLogo = document.getElementsByClassName("st4");
    //     for (var i = 0; i < altLogo.length; i++) {
    //         prevAltLogo = [...altLogo[i].style.opacity]
    //     }
    //     var defaultPlane = document.getElementById("plane");
    //     var defaultSwoosh = document.getElementById("swoosh_desaturated");
    //     var defaultBase = document.getElementById("base_blue");
    //     prevDefaultPlane = defaultPlane.style.opacity;
    //     prevDefaultSwoosh = defaultSwoosh.style.opacity;
    //     prevDefaultBase = defaultBase.style.opacity;
    //     return{
    //         prevAltLogo: prevAltLogo,
    //         prevDefaultPlane: prevDefaultPlane,
    //         prevDefaultSwoosh: prevDefaultSwoosh,
    //         prevDefaultBase: prevDefaultBase
    //     }
    // }

    componentDidUpdate(prevState){
        if(prevState.menuOpen !== this.state.menuOpen){
            let menu = document.getElementById("menu");
            if(this.state.menuOpen === true){
                // console.log('open menu');
                menu.classList.add("drop");
                var logo = document.getElementById("logo");
                logo.classList.add("from-menu");
                var altLogo = document.getElementsByClassName("st4");
                var defaultPlane = document.getElementById("plane");
                var defaultSwoosh = document.getElementById("swoosh_desaturated");
                var defaultBase = document.getElementById("base_blue");
                for (var i = 0; i < altLogo.length; i++) {
                    altLogo[i].style.opacity = 0;
                }
                defaultPlane.style.opacity = 1;
                defaultSwoosh.style.opacity = 1;
                defaultBase.style.opacity = 1;
            }else if(this.state.menuOpen === false){
                menu.classList.remove("drop");
                var logo = document.getElementById("logo");
                logo.classList.remove("from-menu");
                if(window.fullpage_api.getActiveSection().index === 2 || window.fullpage_api.getActiveSection().index === 3 || window.fullpage_api.getActiveSection().index === 4){
                    var defaultPlane = document.getElementById("plane");
                    var defaultSwoosh = document.getElementById("swoosh_desaturated");
                    var defaultBase = document.getElementById("base_blue");
                    defaultPlane.style.opacity = 0;
                    defaultSwoosh.style.opacity = 0;
                    defaultBase.style.opacity = 0;
                    var altLogo = document.getElementsByClassName("st4");
                    for (var i = 0; i < altLogo.length; i++) {
                        altLogo[i].style.opacity = 1;
                    }
                }
            }
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

        var graphScene = document.getElementById('graphScene');
        var parallaxInstance7 = new Parallax(graphScene, {
            relativeInput: true,
            frictionX: .075,
            frictionY: .15
        });
        var uiuxScene = document.getElementById('uiuxScene');
        var parallaxInstance3 = new Parallax(uiuxScene, {
            relativeInput: true,
            frictionX: .075,
            frictionY: .15
        });
        var phoneScene = document.getElementById('phoneScene');
        var parallaxInstance4 = new Parallax(phoneScene, {
            relativeInput: true,
            frictionX: .075,
            frictionY: .15
        });

        var illusScene = document.getElementById('illusScene');
        var parallaxInstance5 = new Parallax(illusScene, {
            relativeInput: true,
            frictionX: .075,
            frictionY: .15
        });       
        var bookScene = document.getElementById('bookScene');
        var parallaxInstance6 = new Parallax(bookScene, {
            relativeInput: true,
            frictionX: .075,
            frictionY: .15
        });

        this.initializeReactGA();
        // window.addEventListener('resize', this.resize());
        // this.resetScroll();
        // this.interval = setInterval(this.resetScroll(), 500); // Don't lower more than 500ms, otherwise there will be animation-problems with the  Safari toolbar
    }

    onLeave(origin, destination, direction) {
        const tl = gsap.timeline();
        if(origin.index===0){
            document.getElementById("fullpage").classList.add("ease");
            this.setState({wave: "wave-move-up"});
        }
        if(destination.index===0){
            this.setState({wave: "wave-move-down"});
        }
        if(destination.index===1){
            tl.fromTo('.textContainer', .5, {y: '40', opacity: 0}, {y:0, opacity: 1, delay: .6})
            if(origin.index===2){
                var logo = document.getElementById("logo");
                logo.classList.add("from-bottom");
                var altLogo = document.getElementsByClassName("st4");
                for (var i = 0; i < altLogo.length; i++) {
                    altLogo[i].style.opacity = 0;
                }
                var defaultPlane = document.getElementById("plane");
                var defaultSwoosh = document.getElementById("swoosh_desaturated");
                var defaultBase = document.getElementById("base_blue");
                defaultPlane.style.opacity = 1;
                defaultSwoosh.style.opacity = 1;
                defaultBase.style.opacity = 1;
            }
        }
        if(destination.index===2){
            tl.fromTo('.leftTextContainer', .5, {y: '40', opacity: 0}, {y:0, opacity: 1, delay: .6})
            // var defaultLogo = document.getElementsByClassName("st5");
            var defaultPlane = document.getElementById("plane");
            var defaultSwoosh = document.getElementById("swoosh_desaturated");
            var defaultBase = document.getElementById("base_blue");
            defaultPlane.style.opacity = 0;
            defaultSwoosh.style.opacity = 0;
            defaultBase.style.opacity = 0;
            var altLogo = document.getElementsByClassName("st4");
            for (var i = 0; i < altLogo.length; i++) {
                altLogo[i].style.opacity = 1;
            }
        }
        if(destination.index===3){
            tl.fromTo('.rightTextContainer', .5, {y: '40', opacity: 0}, {y:0, opacity: 1, delay: .6})
        }
        if(destination.index===4){
            tl.fromTo('.leftTextContainer', .5, {y: '40', opacity: 0}, {y:0, opacity: 1, delay: .6})
            if(origin.index===5){
                var logo = document.getElementById("logo");
                logo.classList.add("from-bottom");
                var defaultPlane = document.getElementById("plane");
                var defaultSwoosh = document.getElementById("swoosh_desaturated");
                var defaultBase = document.getElementById("base_blue");
                defaultPlane.style.opacity = 0;
                defaultSwoosh.style.opacity = 0;
                defaultBase.style.opacity = 0;
                var altLogo = document.getElementsByClassName("st4");
                for (var i = 0; i < altLogo.length; i++) {
                    altLogo[i].style.opacity = 1;
                }
            }
        }
        if(destination.index===5){
            var altLogo = document.getElementsByClassName("st4");
            for (var i = 0; i < altLogo.length; i++) {
                altLogo[i].style.opacity = 0;
            }
            var defaultPlane = document.getElementById("plane");
            var defaultSwoosh = document.getElementById("swoosh_desaturated");
            var defaultBase = document.getElementById("base_blue");
            defaultPlane.style.opacity = 1;
            defaultSwoosh.style.opacity = 1;
            defaultBase.style.opacity = 1;
        }
    }
    afterLoad(origin, destination, direction) {
        var logo = document.getElementById("logo");
        logo.classList.remove("from-bottom");
        const tl = gsap.timeline();
        if(destination.index===4){
            document.getElementById("fullpage").classList.remove("ease");
            if(origin.index===5){
                tl.fromTo('#scroll-cue', .4, { y: '-10', opacity: 0}, { y:'0', opacity: 1, delay: .1})
            }
        }
        if(destination.index===5){
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
                                <Logo id="logo" className="logo" width="100%" display="block" height="auto"/>
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
                                        <div data-depth=".04" id="absolute"><img alt="paper plane" id="mainAirplane" src="/images/main-airplane.png"/></div>
                                    </div>
                                    <div data-depth=".16" id="absolute"><img alt="paper plane" id="topAirplane" src="/images/top-airplane.png"/></div>
                                    <div data-depth=".1"id="absolute"><img alt="paper plane" id="rightAirplane" src="/images/right-airplane.png"/></div>
                                    <div data-depth=".12"id="absolute"><img alt="paper plane" id="leftAirplane" src="/images/left-airplane.png"/></div>
                                </div>
                            </div>
                            <div style={{backgroundColor: "#354563"}} className="section">
                                <div className="graphTextContainer">
                                    <div style={{color: "white"}} className="title">
                                        Graphic Design
                                    </div>
                                    <div className="shortCaption" style={{color: "white"}}>
                                        Communicate your visual identity.
                                    </div>
                                    <div>
                                        <a class="btn btn-danger" href="#">
                                        <i class="fas fa-palette fa-lg"></i> Go to Design Challenge</a>
                                    </div>
                                </div>
                                <div id="graphScene" className="imageContainer">
                                    <div data-invert-x="true" data-depth=".03" id="absolute"><img alt="plane" id="graphPlane" src="/images/graphic/plane.png"/></div>
                                    <div data-depth=".05" id="absolute"><img alt="bottom left shapes" id="graphBotLeft" src="/images/graphic/bottom-left.png"/></div>
                                    <div data-depth=".05" id="absolute"><img alt="bottom right shapes" id="graphBotRight" src="/images/graphic/bottom-right.png"/></div>
                                    <div data-depth=".05" id="absolute"><img alt="top right shapes" id="graphTopRight" src="/images/graphic/top-right.png"/></div>
                                    <div data-depth=".1" id="absolute"><img alt="small shapes" id="graphShapes" src="/images/graphic/shapes.png"/></div>
                                    {/* <div data-depth=".08" id="absolute"><img alt="circle" id="graphCircle" src="/images/graphic/circle.png"/></div>
                                    <div data-depth=".05" id="absolute"><img alt="blue shape" id="graphBlue" src="/images/graphic/blue1.png"/></div>
                                    <div data-depth=".08" id="absolute"><img alt="circle" id="graphTopBlue" src="/images/graphic/top-blue1.png"/></div>
                                    <div data-depth=".05" id="absolute"><img alt="blue shape" id="graphPink" src="/images/graphic/pink1.png"/></div>
                                    <div data-depth=".08" id="absolute"><img alt="circle" id="graphTopPink" src="/images/graphic/top-pink1.png"/></div>
                                    <div data-depth=".08" id="absolute"><img alt="circle" id="graphBotPink" src="/images/graphic/bot-pink1.png"/></div>
                                    <div data-depth=".05" id="absolute"><img alt="blue shape" id="graphGreen" src="/images/graphic/green1.png"/></div>
                                    <div data-depth=".05" id="absolute"><img alt="blue shape" id="graphTopGreen" src="/images/graphic/top-green1.png"/></div>
                                    <div data-depth=".05" id="absolute"><img alt="blue shape" id="graphYellow" src="/images/graphic/yellow1.png"/></div>
                                    <div data-depth=".05" id="absolute"><img alt="blue shape" id="graphOrange" src="/images/graphic/orange1.png"/></div>
                                    <div data-depth=".05" id="absolute"><img alt="blue shape" id="graphCorner" src="/images/graphic/corner1.png"/></div>
                                    <div data-depth=".05" id="absolute"><img alt="blue shape" id="graphShapes" src="/images/graphic/shapes.png"/></div> */}
                                </div>
                            </div>
                            <div style={{backgroundColor: "#354563"}} className="section">
                                <div className="rightTextContainer">
                                    <div style={{color: "white"}} className="title">
                                        UI/UX
                                    </div>
                                    <div className="shortCaption" style={{color: "white"}}>
                                        Build exciting user experiences.
                                    </div>
                                </div>
                                <div data-invert-x="false" data-invert-y="false" id="uiuxScene" className="imageContainer">
                                    <div id="phoneScene" className="imageContainer">
                                        <div data-depth=".04" id="absolute"><img alt="phone" id="phone" src="/images/phone.png"/></div>
                                        <div data-depth=".17" id="absolute"><img alt="pop up window" id="popupTop" src="/images/popup-top.png"/></div>
                                        <div data-depth=".19" id="absolute"><img alt="plane" id="phonePlane" src="/images/phone-plane.png"/></div>
                                    </div>
                                    <div data-depth=".04" id="absolute"><img alt="pop up window" id="popupBottom" src="/images/popup-bottom.png"/></div>
                                </div>
                            </div>
                            <div style={{backgroundColor: "#354563"}} className="section">
                                <div className="leftTextContainer">
                                    <div style={{color: "white"}} className="title">
                                        Illustration
                                    </div>
                                    <div className="shortCaption" style={{color: "white"}}>
                                        Bring concepts and stories to life.
                                    </div>
                                    <div>
                                        <a class="btn btn-danger" href="#">
                                        <i class="fas fa-palette fa-lg"></i> Go to Design Challenge</a>
                                    </div>
                                </div>
                                <div id="illusScene" className="imageContainer">
                                    <div data-invert-x="false" data-invert-y="false" id="bookScene" className="imageContainer">
                                        <div data-depth=".03" id="absolute"><img alt="book" id="book" src="/images/book.png"/></div>
                                        <div data-depth=".07" id="absolute"><img alt="cloud" id="bookCloud" src="/images/middle-cloud.png"/></div>
                                    </div>
                                    <div data-depth=".08" id="absolute"><img alt="planes" id="bookPlanes" src="/images/book-planes.png"/></div>
                                </div>
                            </div>
                            <div className="section">
                                <div className="content-body-text">
                                    <div className="center-container" id="home">            
                                        <div style={{color: darkColor}} className="title">
                                            let's keep in touch!
                                        </div>
                                        <div className="subtitle-med inline-block-center">
                                            <ul class="links">
                                                <li class="link"><a target="_blank" href="https://www.facebook.com/sbcreativelab/">facebook</a></li>
                                                <li class="link"><a target="_blank" href="https://www.instagram.com/sbcreativelab/">instagram</a></li>
                                                <li class="link"><a target="_blank" href="https://www.linkedin.com/company/sbcreativelab/">linkedin</a></li>
                                                <li class="link"><a target="_blank" href="https://rebrand.ly/r7vam">slack</a></li>
                                                <li class="link"><a target="_blank" href="https://discord.gg/fc8Rrn7VdV">discord</a></li>
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
