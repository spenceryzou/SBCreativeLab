import React, { Component } from 'react';
import ChallengeItem from './ChallengeItem';
import ReactGA from 'react-ga'
import { ReactComponent as Logo } from "./logo.svg";
// import PictureHover from './PictureHover';
const gsap = window.gsap;

export default class Challenge extends Component {
    constructor(props){
        super(props);
    }
    initializeReactGA() {
        ReactGA.initialize('UA-178117149-1');
        ReactGA.pageview('/challenge');
    }
    componentDidMount(){
        // this.DOM = document.body;
        // this.DOM.menuItems = this.DOM.querySelectorAll('.menu__item');
        // this.animatableProperties = {
        //     // translationX
        //     tx: {previous: 0, current: 0, amt: 0.08},
        //     // translationY
        //     ty: {previous: 0, current: 0, amt: 0.08},
        //     // Rotation angle
        //     rotation: {previous: 0, current: 0, amt: 0.08},
        //     // CSS filter (brightness) value
        //     brightness: {previous: 1, current: 1, amt: 0.08}
        // };
        // this.menuItems = [];
        // // initialize the MenuItems
        // [...this.DOM.menuItems].forEach((item, pos) => this.menuItems.push(new PictureHover(item, pos, this.animatableProperties)));
        // this.showMenuItems();
        const tl = gsap.timeline();
        tl.fromTo('.challengeHeader', .6, {y: '40', opacity: 0}, {y:0, opacity: 1, delay: 0})
        tl.fromTo('.challengeTitle', .6, {y: '40', opacity: 0}, {y:0, opacity: 1, delay: .1})
        tl.fromTo('.date', .6, {y: '40', opacity: 0}, {y:0, opacity: 1, delay: .1});
        tl.fromTo('.challengeSubtitle', .6, { opacity: 0}, {y:0, opacity: 1, delay: 0});
        tl.fromTo('.challengeDetails', .6, {opacity: 0}, {opacity: 1, delay: 0}, '-=.6');
        this.initializeReactGA();
    }
    // showMenuItems() {
    //     gsap.to(this.menuItems.map(item => item.DOM.textInner), {
    //         duration: 1.2,
    //         ease: 'Expo.easeOut',
    //         startAt: {y: '100%'},
    //         y: 0,
    //         delay: pos => pos*0.06
    //     });
    // }
    render() {
        return(
            <div className="container-fluid design-challenge">
                <div className="row d-flex justify-content-center">
                    <div className="col-10 col-sm-6">
                            <div className="b1 challengeHeader">Welcome to SB Creative Lab's...</div>
                            <div className="h1 challengeTitle">Winter Design</div><div className="h1 challengeTitle">Challenge</div>
                            <div className="date">1.7.21 / 2.7.21</div>
                            <div className="b1 col-12 p-0 mt-2 challengeSubtitle">Choose from a playlist cover Graphic Design Challenge or an editorial Illustration Challenge. Or take on both!</div>
                    </div>
                </div>
                <div style={{marginTop: "156px"}} className="row d-flex justify-content-center challengeDetails">
                    <div className="col-10 col-sm-7">
                        <ChallengeItem type="Graphic Design" title="Playlist Cover" imgURL="/images/saxophone.svg" caption="Your challenge is to design an album and tracklist cover that embodies the essence of the curated jazz playlist." />
                        <ChallengeItem type="Illustration" title="Editorial" imgURL="/images/newspaper.svg" caption="Your challenge is to design an illustration for one of three Santa Barbara Independent article that will visually exemplify the article." />
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-11 col-sm-8 d-flex flex-column align-items-center">
                        <div className="h2 text-center">Mentors</div>
                        <div className="b1 col-12 col-sm-6 text-center">Get 1:1 sessions with industry mentors before you submit your work.</div>
                        <div class="menu__item b1 text-center">
                            {/* <span class="menu__item-text"><span class="menu__item-textinner rainbow-text">coming soon!</span></span> */}
                            Details coming soon!
                        </div>
                    </div>
                </div>
                <div style={{marginTop: "132px", paddingBottom: "96px"}} className="row d-flex justify-content-center">
                    <div className="col-10 col-sm-8 d-flex flex-column align-items-center">
                        <div className="b1 col-12 col-sm-6 text-center">Submissions are due before or by Sunday, February 7 @ 11:59 pm PT. </div>
                        <div className="row mt-5 justify-space-between">
                            <a href="https://forms.gle/ABJpGNTXsCvkiMxG9" className="button col-12 col-sm text-center">
                                Submit Graphic Design
                            </a>
                            <div className="col-1 d-none d-sm-block"></div>
                            <a href="https://forms.gle/LGHSRocpxJmmb44R7"className="button col-12 col-sm text-center mt-3 mt-sm-0">
                                Submit Illustration
                            </a>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center pb-5">
                    <a href="/"><Logo height="80px"></Logo></a>
                </div>
            </div>
        )
    }
};

