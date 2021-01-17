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

import WorkshopItem from './WorkshopItem';
import TutorialItem from './TutorialItem';

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
                columnWidth: '.grid-item',
                itemSelector: '.grid-item',
                percentPosition: true
            });    
            var container2 = document.querySelector('.masonry-grid2');
            var msnry2 = new Masonry( container2, {
                columnWidth: '.grid-item',
                itemSelector: '.grid-item',
                percentPosition: true
            });    
        });
        this.initializeReactGA();
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
        
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
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
                    <div className="flex">
                        <div style={{color: darkColor, marginBottom: "1rem"}} className="title about-title-2">
                            Resources
                        </div>
                        <div className="flexend subtitle-med">
                            <ul class="links">
                                <li class="link"><a href="#tutorials">tutorials</a></li>
                                <li class="link"><a href="#workshops">workshops</a></li>
                            </ul>
                        </div>
                    </div>
                    <a id="tutorials" style={{marginLeft: "10%"}} className="icon-title title-small color-black">Tutorials</a>
                    <div className="resources-section">
                        <div className="masonry-grid">
                            <TutorialItem 
                                link="https://www.instagram.com/tv/CF2onhaFE3L/"
                                caption="Design Tip #2: Navigating the Properties Panel"
                                imgURL="/images/properties.jpg"
                                alt="design tip 2: navigating the properties panel"
                            />
                            <TutorialItem 
                                link="https://docs.google.com/spreadsheets/d/1hbuUwmo8xVdYd2Xw5828HnEx5h9wcrXIdI8Pb6HWy_4/edit?usp=sharing"
                                caption="Equipment and Software Resources"
                                imgURL="/images/equipment-software.png"
                                alt="Equipment and Software Resources"
                            />
                            <TutorialItem 
                                link="https://www.instagram.com/tv/CFfZ5ebjt5L/"
                                caption="Design Tip #1: What are Layers?"
                                imgURL="/images/design-tip-1.jpg"
                                alt="design tip 1: what are layers"
                            />
                        </div>
                    </div>
                    <a id="workshops" style={{marginLeft: "10%"}} className="icon-title title-small color-black">Workshops</a>
                    {/* 
                        * Use noSlides={true} when no slide deck available
                        * Use extra={true} to include extra link, provide extra link and caption with extraLink and extraCaption
                    */}
                    <div className="resources-section">
                        <div className="masonry-grid2">
                            <WorkshopItem 
                                slidesLink="https://drive.google.com/file/d/1MVgRnm670Re_YDDYTeQ98_e2TBgfASwq/view"
                                vidLink="https://youtu.be/7kuJaUN9bm0"
                                imgURL="/images/mable-square.jpg"
                                alt="mable truong event"
                            />
                            <WorkshopItem 
                                slidesLink="https://drive.google.com/file/d/1OK3XjdVq9gHqQrpiwHtbPiCB7DjdUgVI/view?usp=sharing"
                                vidLink="https://youtu.be/ANNhY8aPXYQ"
                                imgURL="/images/kickoff-square.jpg"
                                alt="winter kickoff event"
                            />
                            <WorkshopItem 
                                slidesLink="https://www.figma.com/file/oTxUQaxX93RzZQWIN79ejH/Your-First-Project-%26-Case-Study---Grace-Ling?node-id=0%3A1"
                                vidLink="https://youtu.be/IcZBn_HQG1o"
                                imgURL="/images/grace-square.jpg"
                                alt="grace ling event"
                            />
                            <WorkshopItem 
                                slidesLink="https://www.figma.com/file/YLmxgBJcHOwMABiQqTq3e2/Typography-Workshop?node-id=0%3A1"
                                vidLink="https://youtu.be/RYqOM-KkePM"
                                imgURL="/images/typo-square.jpg"
                                alt="typography event"
                            />
                            <WorkshopItem 
                                slidesLink="https://drive.google.com/file/d/1_bv2BOxudBo2w20UNf6zVTLXBw9G4suL/view"
                                vidLink="https://youtu.be/s0G4R6RM3j0"
                                imgURL="/images/andria-square.jpg"
                                alt="discovering design event"
                            />
                            <WorkshopItem 
                                slidesLink="https://drive.google.com/file/d/16E0SgtKLG015Kn6SA5pR_9-ZwmPiGdWY/view?usp=sharing"
                                vidLink="https://youtu.be/RjgPLg076HY"
                                imgURL="/images/intro-to-illustrator-IG.jpg"
                                alt="illustrator event"
                            />
                            <WorkshopItem 
                                vidLink="https://youtu.be/-flhoIeVNWM"
                                imgURL="/images/uiux-workshop-IG.jpg"
                                noSlides={true}
                                alt="uiux event"
                            />
                            <WorkshopItem 
                                slidesLink="https://docs.google.com/presentation/d/1BacatYMijBKEqA2_N8hCMHmiHghnAUYxuoG9ZUVItJw/edit?usp=sharing"
                                vidLink="https://youtu.be/hzwHKe6pxW4"
                                imgURL="/images/figma_square.jpg"
                                extra={true}
                                extraCaption="Figma"
                                extraLink="https://www.figma.com/file/ILlSr2H18RIAsAckDy2ltW/Figma-WS-Demo?node-id=0%3A1"
                                alt="figma event"
                            />
                            <WorkshopItem 
                                slidesLink="https://docs.google.com/presentation/d/1b1XetobS2fSdW2LuFODslL4H43nvBUglor95bnzwn90/edit?usp=sharing"
                                vidLink="https://youtu.be/lUZQRBh4PM8"
                                imgURL="/images/animation-ig.jpg"
                                alt="animation event"
                            />
                            <WorkshopItem 
                                slidesLink="https://drive.google.com/file/d/1x1TbUBySFy0DI35dfQtXYuSRVxu5GoOY/view"
                                vidLink="https://youtu.be/NH1mqB0TuPw"
                                imgURL="/images/photoshop-basics-IG.jpg"
                                alt="photoshop basics event"
                            />
                            <WorkshopItem 
                                slidesLink="https://drive.google.com/file/d/1UDHpdICCH8nibzdz1QTqMf--AvWNJTkm/view"
                                vidLink="https://youtu.be/L-qy5yiLTak"
                                imgURL="/images/meet-sbcreativelab-IG.jpg"
                                alt="kickoff event"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
