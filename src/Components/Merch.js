import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import ReactFullpage from '@fullpage/react-fullpage';
import { ReactComponent as Logo } from "./logo.svg";
import Div100vh from 'react-div-100vh';
import Parallax from 'parallax-js';
import Menu from './Menu';
import MerchItem from './MerchItem';
import ReactGA from 'react-ga'
import imagesLoaded from 'imagesloaded';
import Masonry from 'masonry-layout';

// const hexRgb = require('hex-rgb');
let backgroundColor="#F7FDF4"
let primaryColor="#1BB994"
let darkColor="#356A69"
const gsap = window.gsap;

let merchOrderFormURL = "https://forms.gle/8YDHSKFaKVBdqZJa7"

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
        ReactGA.pageview('/about');
    }

    componentDidUpdate(){
        let menu = document.getElementById("menu");
        var hideImg = document.getElementsByClassName('team-member-image');
        var isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
        if(this.state.menuOpen === true){
            menu.classList.add("drop");
            document.body.classList.add("no-scroll");
            document.body.addEventListener('touchmove', function(e){e.preventDefault()});
            for (var i = 0; i < hideImg.length; i++) {
                hideImg[i].classList.remove('opacity-transition-delay');
                hideImg[i].classList.add('opacity-transition');
                hideImg[i].style.opacity = 0;
            }
        }else if(this.state.menuOpen === false){
            menu.classList.remove("drop");
            console.log(menu.classList);
            document.body.classList.remove("no-scroll");
            document.body.removeEventListener('touchmove', function(e){e.preventDefault()});
            for (var i = 0; i < hideImg.length; i++) {
                hideImg[i].classList.remove('opacity-transition');
                hideImg[i].classList.add('opacity-transition-delay');
                hideImg[i].style.opacity = 1;
            }
        }
    }


    componentDidMount(){
        var checkbox = document.querySelector("input[name=checkbox]");
        checkbox.addEventListener( 'change',this.handleMenu.bind(this));

        imagesLoaded(document.querySelector('.merch'), function (instance) {
            // images have loaded
            var container = document.querySelector('.masonry-grid');
            var msnry = new Masonry(container, {
                columnWidth: '.grid-item',
                itemSelector: '.grid-item',
                percentPosition: true
            });
        });

        this.initializeReactGA();
    }

    render() {
        return (
            <div style={{backgroundColor: backgroundColor, height: "100vh", overflowX: "hidden"}} className="content">
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
                <div style={{ paddingBottom: "3%", marginLeft: "10%" }} className="merch">
                    <div style={{ color: darkColor, marginBottom: "3rem" }} className="title">
                        Merch
                    </div>
                    <div className="icon-title title-small color-black">Fall 2022 Merch</div>
                    {/*
                        * Use noSlides={true} when no slide deck available
                        * Use extra={true} to include extra link, provide extra link and caption with extraLink and extraCaption
                    */}
                    <div className="merch-section" style={{ marginBottom: "1%" }}>
                        <div className="masonry-grid">
                            <MerchItem
                                imgURL="/images/Tshirt_racoon.png"
                                caption="Raccoon Sticker"
                                link={merchOrderFormURL}
                                alt="Sweatshirt Raccoon Sticker merch item"
                            />
                            <MerchItem
                                imgURL="/images/SBCL_pin.png"
                                caption="SBCL Logo Pin"
                                link={merchOrderFormURL}
                                alt="SBCL Logo pin merch item"
                            />
                        </div>
                    </div>
                    <div>
                        <a target="_blank" href={merchOrderFormURL} className="merch-button text-center">
                            Order Here
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
