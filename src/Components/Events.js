import React, { Component } from 'react';
import { ReactComponent as Logo } from "./logo.svg";
import Menu from './Menu';
import imagesLoaded from 'imagesloaded';
import Masonry from 'masonry-layout';
import ReactGA from 'react-ga';

import EventItem from './EventItem';

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
        ReactGA.pageview('/events');
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
            columnWidth: 100,
            itemSelector: '.grid-item'
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
                <div style={{paddingBottom: "3%"}} className="events">
                    <div style={{color: darkColor, marginBottom: "1rem"}} className="title about-title-2">
                        Events
                    </div>
                        <div className="about-title-2" style={{marginBottom: "2rem"}}>
                        <a style={{textDecoration: "underline"}} className="event-subtitle subtitle-med color-black" target="_blank" href="https://www.notion.so/ac3d2b88433246fbb78cc784d179bfb4?v=ff68387555d54320b13c2efb74fd541c">
                            See our Fall quarter calendar here!
                        </a><span> 📅</span>
                    </div> 
                    <EventItem 
                        link="https://www.facebook.com/events/158098106007652/"
                        imgURL="/images/uiux-grace.jpg"
                        title="UI/UX: Your First Project"
                        date="12 - 3 - 2020"
                        alt="grace ling uiux event"
                    />
                    <EventItem 
                        link="https://www.facebook.com/events/652255985463088/"
                        imgURL="/images/typography.png"
                        title="Intro to Typography"
                        date="11 - 19 - 2020"
                        alt="typography event"
                        alignRight={true}
                    />
                    <EventItem 
                        link="https://www.facebook.com/events/351765925899185/"
                        imgURL="/images/andria-ip.jpg"
                        title="Discovering Design"
                        date="11 - 12 - 2020"
                        alt="discovering design event"
                    />
                    <EventItem 
                        link="https://www.facebook.com/events/363042741482791/"
                        imgURL="/images/intro-to-illustrator-LI.jpg"
                        title="Intro to Illustrator"
                        date="11 - 5 - 2020"
                        alt="illustrator event"
                        alignRight={true}
                    />
                    <EventItem 
                        link="https://www.facebook.com/events/653269168665320/"
                        imgURL="/images/UIUX-Workshop-FB.jpg"
                        title="What is UI/UX?"
                        date="10 - 27 - 2020"
                        alt="uiux event"
                    />
                    <EventItem 
                        link="https://www.facebook.com/events/2796961817287634/"
                        imgURL="/images/figma-workshop.png"
                        title="How to Use Figma"
                        date="10 - 22 - 2020"
                        alt="figma event"
                        alignRight={true}
                    />
                    <EventItem 
                        link="https://www.facebook.com/events/776111302960667/"
                        imgURL="/images/animation-design.jpg"
                        title="Design for Animation"
                        date="10 - 13 - 2020"
                        alt="animation event"
                    />
                    <EventItem 
                        link="https://www.facebook.com/events/1486106804909928/"
                        imgURL="/images/photoshop-workshop.jpg"
                        title="Adobe Photoshop Basics"
                        date="10 - 08 - 2020"
                        alt="photoshop event"
                        alignRight={true}
                    />
                    <EventItem 
                        link="https://www.facebook.com/events/730522954163235/"
                        imgURL="/images/meet-sbcreativelab.jpg"
                        title="Kick Off!"
                        date="09 - 29 - 2020"
                        alt="kickoff event"
                    />
                </div>
            </div>
        )
    }
}
