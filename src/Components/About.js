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
                    <div className="center-image">
                        <img alt="paper plane" src="/images/left-airplane.png"/>
                    </div>          
                    <div style={{color: darkColor}} className="title">
                        Who We Are 
                    </div>
                    <div className="subtitle">
                        We’re a group of students dedicated to cultivating a creative space that fosters 
                        opportunity and growth across various design disciplines within UCSB. Through hosting 
                        workshops, curating resources, and promoting design challenges, we hope to provide 
                        accessible opportunities for budding designers to learn and develop their skills in their 
                        creative journeys!
                    </div>
                </div>
            </div>
        )
    }
}
