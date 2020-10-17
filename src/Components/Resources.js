import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import ReactFullpage from '@fullpage/react-fullpage';
import { ReactComponent as Logo } from "./logo.svg";
import Div100vh from 'react-div-100vh';
import Parallax from 'parallax-js';
import Menu from './Menu';
import Tilt from 'tilt.js';
import ReactGA from 'react-ga';
import imagesLoaded from 'imagesloaded';
import Masonry from 'masonry-layout';
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
    initializeReactGA() {
        ReactGA.initialize('UA-178117149-1');
        ReactGA.pageview('/resources');
    }
    
    componentDidUpdate(){
        let menu = document.getElementById("menu");
        if(this.state.menuOpen === true){
            menu.classList.add("drop");
            document.body.classList.add("no-scroll");
            document.body.addEventListener('touchmove', function(e){e.preventDefault()});
        }else if(this.state.menuOpen === false){
            menu.classList.remove("drop");
            console.log(menu.classList);
            document.body.classList.remove("no-scroll");
            document.body.removeEventListener('touchmove', function(e){e.preventDefault()});
        }
    }


    componentDidMount(){
        var checkbox = document.querySelector("input[name=checkbox]");
        checkbox.addEventListener( 'change',this.handleMenu.bind(this));
        imagesLoaded( document.querySelector('.resources'), function( instance ) {
            // images have loaded        
            var container = document.querySelector('.masonry-grid');
            var msnry = new Masonry( container, {
                columnWidth: 300,
                gutter: 20
            });    
            var container2 = document.querySelector('.masonry-grid2');
            var msnry2 = new Masonry( container2, {
                columnWidth: 300,
                gutter: 20
            });    
        });
        this.initializeReactGA();
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
                <div style={{paddingBottom: "3%"}} className="resources">
                    <div style={{color: darkColor, marginBottom: "1rem"}} className="title about-title-2">
                        Resources
                    </div>
                    <div className="resources-section">
                        <div className="icon-title title-small color-black">Tutorials</div>
                        <div className="masonry-grid">
                            <div class="grid-item">
                                <div class="grid-item-container">
                                    <a target="_blank" href="https://www.instagram.com/tv/CFfZ5ebjt5L/">
                                        <img class="grid-item-img" alt="design tip 1: what are layers" src="/images/design-tip-1.jpg"/>
                                    </a>
                                    <a target="_blank" class="grid-caption" href="https://www.instagram.com/tv/CFfZ5ebjt5L/">
                                        Design Tip #1: What are Layers?
                                    </a>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div class="grid-item-container">
                                    <a target="_blank" href="https://www.instagram.com/tv/CF2onhaFE3L/">
                                        <img class="grid-item-img" alt="design tip 2: navigating the properties panel" src="/images/properties.jpg"/>
                                    </a>
                                    <a target="_blank" class="grid-caption" href="https://www.instagram.com/tv/CF2onhaFE3L/">
                                        Design Tip #2: Navigating the Properties Panel
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resources-section">
                        <div className="icon-title title-small color-black">Workshops</div>
                        <div className="masonry-grid2">
                            {/* <div class="grid-item">
                                <img alt="design tip 1: what are layers" src="/images/design-tip-1.png"/>
                                <div class="grid-caption">Design Tip #1: What are Layers?</div>
                            </div> */}
                            <div class="grid-item">
                                <div class="grid-item-container">
                                    <a target="_blank" href="https://docs.google.com/presentation/d/1b1XetobS2fSdW2LuFODslL4H43nvBUglor95bnzwn90/edit?usp=sharing">
                                        <img class="grid-item-img" alt="animation event" src="/images/animation-ig.jpg"/>
                                    </a>
                                    <a target="_blank" href="https://docs.google.com/presentation/d/1b1XetobS2fSdW2LuFODslL4H43nvBUglor95bnzwn90/edit?usp=sharing" target="_blank" class="grid-caption">Slide Deck</a>
                                    <a target="_blank" href="https://youtu.be/lUZQRBh4PM8" class="grid-caption">Event Recording</a>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div class="grid-item-container">
                                    <a target="_blank" href="https://drive.google.com/file/d/1x1TbUBySFy0DI35dfQtXYuSRVxu5GoOY/view">
                                        <img class="grid-item-img" alt="photoshop basics event" src="/images/photoshop-basics-IG.jpg"/>
                                    </a>
                                    <a target="_blank" href="https://drive.google.com/file/d/1x1TbUBySFy0DI35dfQtXYuSRVxu5GoOY/view" target="_blank" class="grid-caption">Slide Deck</a>
                                    <a target="_blank" href="https://youtu.be/NH1mqB0TuPw" class="grid-caption">Event Recording</a>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div class="grid-item-container">
                                    <a target="_blank" href="https://drive.google.com/file/d/1UDHpdICCH8nibzdz1QTqMf--AvWNJTkm/view">
                                        <img class="grid-item-img" alt="kickoff event" src="/images/meet-sbcreativelab-IG.jpg"/>
                                    </a>
                                    <a target="_blank" href="https://drive.google.com/file/d/1UDHpdICCH8nibzdz1QTqMf--AvWNJTkm/view" target="_blank" class="grid-caption">Slide Deck</a>
                                    <a target="_blank" href="https://youtu.be/L-qy5yiLTak" class="grid-caption">Event Recording</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
