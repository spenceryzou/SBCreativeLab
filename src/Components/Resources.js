import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import ReactFullpage from '@fullpage/react-fullpage';
import { ReactComponent as Logo } from "./logo.svg";
import Div100vh from 'react-div-100vh';
import Parallax from 'parallax-js';
import Menu from './Menu';
import Tilt from 'tilt.js';
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
                <div className="resources">
                    <div style={{color: darkColor}} className="title about-title-2">
                        Resources
                    </div>
                    <div className="resources-section">
                        <div className="icon-title title-small color-black">Tutorials</div>
                        <div className="masonry-grid">
                            <div class="grid-item">
                                <a style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}href="https://www.instagram.com/sbcreativelab/channel">
                                    <img style={{maxWidth: "175px"}}alt="design tip 1: what are layers" src="/images/design-tip-1.jpg"/>
                                    <div class="grid-caption">Design Tip #1: What are Layers?</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="resources-section">
                        <div className="icon-title title-small color-black">Workshops</div>
                        <div className="masonry-grid">
                            {/* <div class="grid-item">
                                <img alt="design tip 1: what are layers" src="/images/design-tip-1.png"/>
                                <div class="grid-caption">Design Tip #1: What are Layers?</div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
