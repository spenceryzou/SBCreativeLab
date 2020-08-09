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
        openMenu: this.props.openMenu,
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
    }
    render() {
        let openMenu = this.props.openMenu;
        console.log(openMenu);

        return (
            <div style={{backgroundColor: backgroundColor}} className="content">
                <div style={{height: "100vh"}} className="content-body">  
                    <img src={menu} alt={'hamburger menu'} className="hamburger-icon" id="hamburger-icon" onClick={() => openMenu()} />     
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
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                        })
                                        .pauseFor(2500)
                                        .deleteAll()
                                        typewriter.typeString('illustration.')
                                        .callFunction(() => {
                                            console.log('All strings were deleted');
                                        })
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
