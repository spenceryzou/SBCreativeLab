import React, { Component } from 'react';
import ChallengeItem from './ChallengeItem';
import ReactGA from 'react-ga'
import { ReactComponent as Logo } from "./logo.svg";
// import PictureHover from './PictureHover';
const scrollTrigger = window.ScrollTrigger
const gsap = window.gsap;
gsap.registerPlugin(scrollTrigger)

export default class Challenge extends Component {
    constructor(props) {
        super(props);
    }
    initializeReactGA() {
        ReactGA.initialize('UA-178117149-1');
        ReactGA.pageview('/challenge');
    }
    componentDidMount() {
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
        gsap.to(".logo", {
            scrollTrigger: {
                trigger: ".section-2",
                start: "top +275",
                toggleActions: "play none none reverse",
                toggleClass: { targets: ".logo-link", className: "pointer" }
            },
            ease: "power1.inOut",
            duration: .4,
            opacity: 0,
            y: -12,
        });
        const tl = gsap.timeline();
        tl.fromTo('.challengeHeader', .6, { y: '40', opacity: 0 }, { y: 0, opacity: 1, delay: 0 })
        tl.fromTo('.challengeTitle', .6, { y: '40', opacity: 0 }, { y: 0, opacity: 1, delay: .1 })
        tl.fromTo('.date', .6, { y: '40', opacity: 0 }, { y: 0, opacity: 1, delay: .1 });
        tl.fromTo('.challengeSubtitle', .6, { opacity: 0 }, { y: 0, opacity: 1, delay: 0 });
        tl.fromTo('.challengeDetails', .6, { opacity: 0 }, { opacity: 1, delay: 0 }, '-=.6');
        this.initializeReactGA();
        console.log("saxophone.svg and newspaper.svg by Twitter, Inc and other contributors is licensed under CC BY 4.0")
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
        return (
            <div className="design-challenge">
                <div className="header">
                    <div className="header-left">
                        <div className="logo-wrapper">
                            <a className="logo-link" href="/">
                                <Logo id="logo" className="logo" width="100%" display="block" height="auto" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container-fluid ">
                    <div className="row d-flex justify-content-center section-1">
                        <div className="col-10 col-sm-6">
                            <div className="b1 challengeHeader">Welcome to SB Creative Lab's...</div>
                            <div className="h1 challengeTitle">Winter Design</div><div className="h1 challengeTitle">Challenge</div>
                            <div className="date">1.7.21 - 2.7.21</div>
                            <div className="b1 col-12 p-0 mt-2 challengeSubtitle">Choose from a playlist cover Graphic Design Challenge or an editorial Illustration Challenge. Or take on both!</div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center challengeDetails section-2">
                        <div className="col-10 col-sm-7">
                            <ChallengeItem type="Graphic Design" title="Playlist Cover" imgURL="/images/saxophone.svg" caption="Your challenge is to design an album and tracklist cover that embodies the essence of the curated jazz playlist." />
                            <ChallengeItem type="Illustration" title="Editorial" imgURL="/images/newspaper.svg" caption="Your challenge is to design an illustration for one of three Santa Barbara Independent articles that will visually exemplify the article." />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-5 mb-0 mb-lg-5">
                        <div className="col-11 col-sm-8 d-flex flex-column align-items-center">
                            <div className="h2 text-center">Mentors</div>
                            <div className="b1 col-12 col-sm-6 text-center">Get 1:1 sessions with industry mentors before you submit your work.<br></br>Learn more about our mentors: </div>
                        </div>
                    </div>
                    <div className="row pt-0 pt-sm-3">
                        <div className="col-12 mt-3 d-flex justify-content-center">
                            <div className="mentor-category-container d-flex flex-column flex-lg-row">
                                <div className="mentor-container">
                                    <a target="_blank" href="https://www.notion.so/Playlist-Cover-Design-Challenge-e7504148e300435684e1c1dfc3fa264d#2661444bc4bf44848ba6a2e0856f3082">
                                        <img className="mentor" src="./images/alli-chang-crop.png"></img>
                                    </a>
                                    <div className="mentor-text">
                                        <div className="b1 poppins text-center mt-2">Alli Chang</div>
                                        <div className="b2 poppins text-center mt-2">Graphic Design Intern at Webtoon and Freelancer at Huda Beauty</div>
                                    </div>
                                </div>
                                <div className="mentor-container">
                                    <a target="_blank" href="https://www.notion.so/Playlist-Cover-Design-Challenge-e7504148e300435684e1c1dfc3fa264d#4adaa1f7214c4f41bfa26636e4072b43">
                                        <img className="mentor" src="./images/phoebe-jin-crop.png"></img>
                                    </a>
                                    <div className="mentor-text">
                                        <div className="b1 poppins text-center mt-2">Phoebe Jin</div>
                                        <div className="b2 poppins text-center mt-2">Presentation Design Intern at Karl Storz</div>
                                    </div>
                                </div>
                                <div className="mentor-container">
                                    <a target="_blank" href="https://www.notion.so/Editorial-Illustration-Challenge-204f2e627b7c4178a3ea0d75cddb83ee#8912ffe521c0448db5e0ccaea15936cd">
                                        <img className="mentor" src="./images/sarah-ransohoff.png"></img>
                                    </a>
                                    <div className="mentor-text">
                                        <div className="b1 poppins text-center mt-2">Sarah Ransohoff</div>
                                        <div className="b2 poppins text-center mt-2">Engineering Manager at Grailed and Artist</div>
                                    </div>
                                </div>
                                <div className="mentor-container">
                                    <a target="_blank" href="https://www.notion.so/Editorial-Illustration-Challenge-204f2e627b7c4178a3ea0d75cddb83ee#2ed883c12aa24ea48ea30612ed0a24d2">
                                        <img className="mentor" src="./images/chelsea-chung-crop.png"></img>
                                    </a>
                                    <div className="mentor-text">
                                        <div className="b1 poppins text-center mt-2">Chelsea Chung</div>
                                        <div className="b2 poppins text-center mt-2">Freelance Game Artist and Illustrator</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="b1 col-12 text-center mt-4 mt-lg-3">
                            <a target="_blank" href="https://bit.ly/mentor-signups" className="button-small">Sign up for a slot here!</a>
                        </div>
                    </div>
                    <div style={{ marginTop: "64px" }} className="row d-flex justify-content-center">
                        <div className="col-10 col-sm-8 d-flex flex-column align-items-center">
                            <div className="b1 col-12 col-sm-6 text-center">Submissions are due before or by Sunday, February 7 @ 11:59 pm PT. </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-4 mb-5">
                        <div className="col-10 col-md-7">
                            <div className="row">
                                <a href="https://forms.gle/ABJpGNTXsCvkiMxG9" className="button col-12 col-sm text-center">
                                    Submit Graphic Design
                                </a>
                                <div className="col-1 p-0 d-none d-sm-block"></div>
                                <a href="https://forms.gle/LGHSRocpxJmmb44R7" className="button col-12 col-sm text-center mt-3 mt-sm-0">
                                    Submit Illustration
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center pb-5">
                        <a href="/"><Logo height="80px"></Logo></a>
                    </div>
                </div>
            </div >
        )
    }
};

