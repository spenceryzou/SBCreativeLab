import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import ReactFullpage from '@fullpage/react-fullpage';
import { ReactComponent as Logo } from "./logo.svg";
import Div100vh from 'react-div-100vh';
import Parallax from 'parallax-js';
import Menu from './Menu';
import Tilt from 'tilt.js';
import $ from 'jquery'
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
        const tilt = $('.team-member-container').tilt({
            maxTilt: 5
        });
        // the animation to use
//         const tl = gsap.timeline({paused: true});
//         tl.from("h1", {scale: 0.7, autoAlpha: 0});

//         // The start and end positions in terms of the page scroll
//         const startY = innerHeight / 10;
//         const finishDistance = innerHeight / 5;

// // Listen to the scroll event
// document.addEventListener("scroll", function() {
//   // Prevent the update from happening too often (throttle the scroll event)
//   if (!requestId) {
//     requestId = requestAnimationFrame(update);
//   }
// });

// update();

// function update() {
//   // Update our animation
//   tl.progress((scrollY - startY) / finishDistance);
  
//   // Let the scroll event fire again
//   requestId = null;
// }

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
                <div className="about-section-1">    
                    <div style={{color: darkColor}} className="title about-title">
                        Who We Are 
                    </div>
                    <div style={{paddingTop: "10px"}} className="about-subtitle subtitle-med color-black">
                        We’re a group of students dedicated to cultivating a creative space that fosters 
                        opportunity and growth across various design disciplines within UCSB. Through hosting 
                        workshops, curating resources, and promoting design challenges, we hope to provide 
                        accessible opportunities for budding designers to learn and develop their skills in their 
                        creative journeys!
                    </div>
                    <img id="skytram" alt="skytram" src="/images/about-page-top.png"/>
                </div>
                <div className="about-section-2">
                    <div style={{color: darkColor}} className="title about-title-2">
                        Create With Us
                    </div>
                    <div className="icon-container">
                        <div className="icon">
                            <div className="icon-image">
                                <img id="resources" alt="resources lightbulb,pen,gear" src="/images/about-page-resources-scale2x-wide.png"/>
                            </div>
                            <div className="icon-text">
                                <a href="/oops"><div className="icon-title title-small color-black">Resources</div></a>
                                <div className="icon-subtitle longCaption color-black">Curated guides
                                                            and tools for designers to
                                                            hone their skills</div>
                            </div>
                        </div>
                        <div className="icon">
                            <div className="icon-image">
                                <img id="workshops" alt="workshops book" src="/images/about-page-workshops-scale2x-wide.png"/>
                            </div>
                            <div className="icon-text">
                                <a href="/oops"><div className="icon-title title-small color-black">Workshops</div></a>
                                <div className="icon-subtitle longCaption color-black">Design workshops, led by 
                                                                students and industry
                                                                professionals.</div>
                            </div>
                        </div>
                        <div className="icon">
                            <div className="icon-image">
                                <img id="community" alt="community triangle" src="/images/about-page-community-scale2x-wide.png"/>
                            </div>
                            <div className="icon-text">
                                <a href="https://sbcreativelab.slack.com/"><div className="icon-title title-small color-black">Community</div></a>
                                <div className="icon-subtitle longCaption color-black">Participate and collaborate
                                                                in design challenges.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-section-3">
                    <div style={{color: darkColor}} className="title about-title-3">
                        Meet the Team
                    </div>
                    <div className="gallery-container">
                        <div className="spencer team-member">
                            <div className="team-member-container">
                                <img id="box" src="/images/light-green-square.jpg"></img>
                                <img className="team-member-image" src="/images/spencer.png"></img>
                                <div className="team-member-hover">
                                    <div className="blue-circle"></div>
                                    <div className="dark-blue-circle"></div>
                                    {/* <img className="color-smoke" src="/images/colorsmoke.png" x="0" y="0" style={{filter: "url(#noise)"}}/> */}
                                    <svg className="color-smoke" preserveAspectRatio="xMidYMid slice"  viewBox="0 0 100 123">
                                        <filter width="100%" height="100%" x="0%" y="0%" id="noise">
                                        <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
                                            <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
                                        </feTurbulence>
                                        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
                                                                            xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                                        </filter>
                                        <foreignObject width="100%" height="100%">
                                        <img src="/images/cloud2.png" width="100%" height="auto" x="0" y="0" style={{filter: "url(#noise)"}}/>
                                        </foreignObject>
                                    </svg>
                                    <svg className="color-smoke-2" preserveAspectRatio="xMidYMid slice"  viewBox="0 0 100 115">
                                        <filter width="100%" height="100%" x="0%" y="0%" id="noise">
                                        <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
                                            <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
                                        </feTurbulence>
                                        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
                                                                            xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                                        </filter>
                                        <foreignObject width="100%" height="100%">
                                        <img src="/images/cloud7.png" width="100%" height="auto" x="0" y="0" style={{filter: "url(#noise)"}}/>
                                        </foreignObject>
                                    </svg>
                                </div>
                            </div>                                
                            <div style={{marginTop: "24px"}} className="team-member-name title-small">Spencer Zou</div>
                            <div className="team-member-team longCaption">Web Development</div>
                        </div>
                        <div className="alex team-member">
                            <div className="team-member-container">
                                <img id="green" src="/images/light-blue-square.jpg"></img>
                                <img className="team-member-image" src="/images/alex-transparent.png"></img>
                                <div className="team-member-hover">
                                    <div className="blue-circle"></div>
                                    <div className="dark-blue-circle"></div>
                                    {/* <img className="color-smoke" src="/images/colorsmoke.png" x="0" y="0" style={{filter: "url(#noise)"}}/> */}
                                    <svg className="color-smoke" preserveAspectRatio="xMidYMid slice"  viewBox="0 0 100 123">
                                        <filter width="100%" height="100%" x="0%" y="0%" id="noise">
                                        <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
                                            <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
                                        </feTurbulence>
                                        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
                                                                            xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                                        </filter>
                                        <foreignObject width="100%" height="100%">
                                        <img src="/images/cloud2.png" width="100%" height="auto" x="0" y="0" style={{filter: "url(#noise)"}}/>
                                        </foreignObject>
                                    </svg>
                                    <svg className="color-smoke-2" preserveAspectRatio="xMidYMid slice"  viewBox="0 0 100 115">
                                        <filter width="100%" height="100%" x="0%" y="0%" id="noise">
                                        <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
                                            <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
                                        </feTurbulence>
                                        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
                                                                            xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                                        </filter>
                                        <foreignObject width="100%" height="100%">
                                        <img src="/images/cloud7.png" width="100%" height="auto" x="0" y="0" style={{filter: "url(#noise)"}}/>
                                        </foreignObject>
                                    </svg>
                                </div>
                            </div>                               
                            <div style={{marginTop: "24px"}} className="team-member-name title-small">Alex Schwartzberg</div>
                            <div className="team-member-team longCaption">Design</div>
                        </div>
                        <div className="spencer team-member">
                            <div className="team-member-container">
                                <img id="box" src="/images/light-green-square.jpg"></img>
                                <img className="team-member-image" src=""></img>
                                <div className="team-member-hover">
                                    <div className="blue-circle"></div>
                                    <div className="dark-blue-circle"></div>
                                    {/* <img className="color-smoke" src="/images/colorsmoke.png" x="0" y="0" style={{filter: "url(#noise)"}}/> */}
                                    <svg className="color-smoke" preserveAspectRatio="xMidYMid slice"  viewBox="0 0 100 123">
                                        <filter width="100%" height="100%" x="0%" y="0%" id="noise">
                                        <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
                                            <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
                                        </feTurbulence>
                                        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
                                                                            xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                                        </filter>
                                        <foreignObject width="100%" height="100%">
                                        <img src="/images/cloud2.png" width="100%" height="auto" x="0" y="0" style={{filter: "url(#noise)"}}/>
                                        </foreignObject>
                                    </svg>
                                    <svg className="color-smoke-2" preserveAspectRatio="xMidYMid slice"  viewBox="0 0 100 115">
                                        <filter width="100%" height="100%" x="0%" y="0%" id="noise">
                                        <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
                                            <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
                                        </feTurbulence>
                                        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
                                                                            xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                                        </filter>
                                        <foreignObject width="100%" height="100%">
                                        <img src="/images/cloud7.png" width="100%" height="auto" x="0" y="0" style={{filter: "url(#noise)"}}/>
                                        </foreignObject>
                                    </svg>
                                </div>
                            </div>                                
                            <div style={{marginTop: "24px"}} className="team-member-name title-small">Name</div>
                            <div className="team-member-team longCaption">Team</div>
                        </div>
                        <div className="alex team-member">
                            <div className="team-member-container">
                                <img id="box" src="/images/light-green-square.jpg"></img>
                                <img className="team-member-image" src=""></img>
                                <div className="team-member-hover">
                                    <div className="blue-circle"></div>
                                    <div className="dark-blue-circle"></div>
                                    {/* <img className="color-smoke" src="/images/colorsmoke.png" x="0" y="0" style={{filter: "url(#noise)"}}/> */}
                                    <svg className="color-smoke" preserveAspectRatio="xMidYMid slice"  viewBox="0 0 100 123">
                                        <filter width="100%" height="100%" x="0%" y="0%" id="noise">
                                        <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
                                            <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
                                        </feTurbulence>
                                        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
                                                                            xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                                        </filter>
                                        <foreignObject width="100%" height="100%">
                                        <img src="/images/cloud2.png" width="100%" height="auto" x="0" y="0" style={{filter: "url(#noise)"}}/>
                                        </foreignObject>
                                    </svg>
                                    <svg className="color-smoke-2" preserveAspectRatio="xMidYMid slice"  viewBox="0 0 100 115">
                                        <filter width="100%" height="100%" x="0%" y="0%" id="noise">
                                        <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
                                            <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
                                        </feTurbulence>
                                        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
                                                                            xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                                        </filter>
                                        <foreignObject width="100%" height="100%">
                                        <img src="/images/cloud7.png" width="100%" height="auto" x="0" y="0" style={{filter: "url(#noise)"}}/>
                                        </foreignObject>
                                    </svg>
                                </div>
                            </div>                                
                            <div style={{marginTop: "24px"}} className="team-member-name title-small">Name</div>
                            <div className="team-member-team longCaption">Team</div>
                        </div>
                        <div className="spencer team-member">
                            <div className="team-member-container">
                                <img id="box" src="/images/light-green-square.jpg"></img>
                                <img className="team-member-image" src=""></img>
                                <div className="team-member-hover">
                                    <div className="blue-circle"></div>
                                    <div className="dark-blue-circle"></div>
                                    {/* <img className="color-smoke" src="/images/colorsmoke.png" x="0" y="0" style={{filter: "url(#noise)"}}/> */}
                                    <svg className="color-smoke" preserveAspectRatio="xMidYMid slice"  viewBox="0 0 100 123">
                                        <filter width="100%" height="100%" x="0%" y="0%" id="noise">
                                        <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
                                            <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
                                        </feTurbulence>
                                        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
                                                                            xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                                        </filter>
                                        <foreignObject width="100%" height="100%">
                                        <img src="/images/cloud2.png" width="100%" height="auto" x="0" y="0" style={{filter: "url(#noise)"}}/>
                                        </foreignObject>
                                    </svg>
                                    <svg className="color-smoke-2" preserveAspectRatio="xMidYMid slice"  viewBox="0 0 100 115">
                                        <filter width="100%" height="100%" x="0%" y="0%" id="noise">
                                        <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
                                            <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
                                        </feTurbulence>
                                        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
                                                                            xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                                        </filter>
                                        <foreignObject width="100%" height="100%">
                                        <img src="/images/cloud7.png" width="100%" height="auto" x="0" y="0" style={{filter: "url(#noise)"}}/>
                                        </foreignObject>
                                    </svg>
                                </div>
                            </div>                                
                            <div style={{marginTop: "24px"}} className="team-member-name title-small">Name</div>
                            <div className="team-member-team longCaption">Team</div>
                        </div>
                        <div className="spencer team-member">
                            <div className="team-member-container">
                                <img id="box" src="/images/light-green-square.jpg"></img>
                                <img className="team-member-image" src=""></img>
                                <div className="team-member-hover">
                                    <div className="blue-circle"></div>
                                    <div className="dark-blue-circle"></div>
                                    {/* <img className="color-smoke" src="/images/colorsmoke.png" x="0" y="0" style={{filter: "url(#noise)"}}/> */}
                                    <svg className="color-smoke" preserveAspectRatio="xMidYMid slice"  viewBox="0 0 100 123">
                                        <filter width="100%" height="100%" x="0%" y="0%" id="noise">
                                        <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
                                            <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
                                        </feTurbulence>
                                        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
                                                                            xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                                        </filter>
                                        <foreignObject width="100%" height="100%">
                                        <img src="/images/cloud2.png" width="100%" height="auto" x="0" y="0" style={{filter: "url(#noise)"}}/>
                                        </foreignObject>
                                    </svg>
                                    <svg className="color-smoke-2" preserveAspectRatio="xMidYMid slice"  viewBox="0 0 100 115">
                                        <filter width="100%" height="100%" x="0%" y="0%" id="noise">
                                        <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
                                            <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
                                        </feTurbulence>
                                        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
                                                                            xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                                        </filter>
                                        <foreignObject width="100%" height="100%">
                                        <img src="/images/cloud7.png" width="100%" height="auto" x="0" y="0" style={{filter: "url(#noise)"}}/>
                                        </foreignObject>
                                    </svg>
                                </div>
                            </div>                                
                            <div style={{marginTop: "24px"}} className="team-member-name title-small">Name</div>
                            <div className="team-member-team longCaption">Team</div>
                        </div>
                    </div>
                </div>
                {/* <svg>
                    <filter id="turbulence" x="0" y="0" width="100%" height="100%">
                        <feTurbulence type="fractalNoise" id="sea-filter" numOctaves="3" seed="2" baseFrequency="0.02 0.05"></feTurbulence>
                        <feDisplacementMap scale="5" in="SourceGraphic"></feDisplacementMap>
                        <feGaussianBlur id="cloud" in="SourceGraphic" stdDeviation="1"></feGaussianBlur>
                        <animate href="#cloud" attributeName="stdDeviation" values="0;1;2;1;0;" dur="3s" keyTimes="0;0.25;0.5;0.75;1" repeatCount="indefinite"/>
                        <animate href="#sea-filter" attributeName="baseFrequency" dur="60s" keyTimes="0;0.5;1" values="0.02 0.06;0.04 0.08;0.02 0.06" repeatCount="indefinite"></animate>
                    </filter>
                    <filter width="100%" height="100%" x="0%" y="0%" id="noise"><feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
                    <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
                                                        xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                    </filter>
                </svg> */}

            </div>
        )
    }
}
