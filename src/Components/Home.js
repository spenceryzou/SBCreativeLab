import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';
const hexRgb = require('hex-rgb');
let backgroundColor="#F7FDF4"
let primaryColor="#1BB994"
let darkColor="#356A69"
const menu = './images/Hamburger Menu.svg'
 
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
        var targetArray = hexRgb("#E5F8FF",{format: 'array'});
        const section1 = document.querySelector('.content')
        var scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        console.log(scrollPercent)
        var r = rgbArray[0] + (targetArray[0]-rgbArray[0])*(scrollPercent);
        var g = rgbArray[1] + (targetArray[1]-rgbArray[1])*(scrollPercent);
        var b = rgbArray[2] + (targetArray[2]-rgbArray[2])*(scrollPercent);
        section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
        // var hamburger = document.querySelector(".menu1");
        var checkbox = document.querySelector("input[name=checkbox]");
        checkbox.addEventListener( 'change',this.props.handleMenu);
        // hamburger.addEventListener("click", function() {
        //     hamburger.classList.toggle("open");
        //     console.log(hamburger.classList)
        // });
        // hamburger.addEventListener("click", this.props.openMenu);
    }
    render() {
        let handleMenu = this.props.handleMenu;
        console.log(handleMenu);

        return (
            <div style={{backgroundColor: backgroundColor}} className="content">
                <div style={{height: "100vh"}} className="content-body">
                    <div className="header">
                        <div className="header-left"></div>
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

                                    {/* <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="30"></circle>
                                    <path class="line--1 line--debug" d="M0 40h62c13 0 6 28-4 18L35 35"></path><path class="line--1" d="M0 40h62c13 0 6 28-4 18L35 35"></path>
                                    <path class="line--2 line--debug" d="M0 50h70"></path><path class="line--2" d="M0 50h70"></path>
                                    <path class="line--3 line--debug" d="M0 60h62c13 0 6-28-4-18L35 65"></path><path class="line--3" d="M0 60h62c13 0 6-28-4-18L35 65"></path>
                                    </svg> */}
                                    </label>
                                </div>
                            </div>
                            {/* <img src={menu} alt={'hamburger menu'} className="hamburger-icon" id="hamburger-icon" onClick={() => openMenu()} /> */}
                        </div>
                    </div>  
                    <div className="content-body-text">
                        <div className="center-container" id="home">            
                            <div style={{color: darkColor}} className="title">
                            SB Creative Lab 
                            </div>
                            <div className="subtitle">
                            let's learn&nbsp;
                                <div style={{display: "inline-block", color: primaryColor}}>
                                    <Typewriter options={{loop:true,
                                    delay: 50,
                                    deleteSpeed: 50}}
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
                <div style={{height: "100vh"}} className="content-body">
                    <object>
                        <embed src="penucsb.svg"></embed>
                    </object>
                </div>
            </div>
        )
    }
}
