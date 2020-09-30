import React, { Component } from 'react'
import { Link } from "react-router-dom";
import PictureHover from './PictureHover';
import { map, lerp, clamp, getMousePos } from './utils';
import ReactGA from 'react-ga'

const gsap = window.gsap;
let backgroundColor="#F7FDF4";
let darkColor="#356A69";

export default class Oops extends Component {
    constructor(props){
        super(props);

    }
    initializeReactGA() {
        ReactGA.initialize('UA-178117149-1');
        ReactGA.pageview('/oops');
    }
    componentDidMount(){
        this.DOM = document.body;
        this.DOM.menuItems = this.DOM.querySelectorAll('.menu__item');
        this.animatableProperties = {
            // translationX
            tx: {previous: 0, current: 0, amt: 0.08},
            // translationY
            ty: {previous: 0, current: 0, amt: 0.08},
            // Rotation angle
            rotation: {previous: 0, current: 0, amt: 0.08},
            // CSS filter (brightness) value
            brightness: {previous: 1, current: 1, amt: 0.08}
        };
        this.menuItems = [];
        // initialize the MenuItems
        [...this.DOM.menuItems].forEach((item, pos) => this.menuItems.push(new PictureHover(item, pos, this.animatableProperties)));
        this.showMenuItems();
        this.initializeReactGA();
    }
    showMenuItems() {
        gsap.to(this.menuItems.map(item => item.DOM.textInner), {
            duration: 1.2,
            ease: 'Expo.easeOut',
            startAt: {y: '100%'},
            y: 0,
            delay: pos => pos*0.06
        });
    }
    render() {
        return (
            <div className="section">
                <div style={{left: '0px', top: '0px', backgroundColor: backgroundColor, width: '100%', height: '100%'}} className="content-body-text">
                    <div className="center-container" id="home">            
                        <div style={{color: darkColor}} className="title">
                            oops!
                        </div>
                        <div className="subtitle2">
                            sorry about that, this page is coming soon.
                            <br />
                            <Link class="menu__item" to="/">
                                <span class="menu__item-text"><span class="menu__item-textinner">(take me home pls)</span></span>
                            </Link>
                        </div>
                    </div>
                </div>    
            </div>
            
        )
    }
}
