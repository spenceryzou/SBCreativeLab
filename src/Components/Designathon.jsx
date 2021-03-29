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
    // initializeReactGA() {
    //     ReactGA.initialize('UA-178117149-1');
    //     ReactGA.pageview('/challenge');
    // }
    componentDidMount() {
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
        // this.initializeReactGA();
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
            <div className="designathon">
                <div className="header">
                    <div className="header-left">
                        <div className="logo-wrapper">
                            <a className="logo-link" href="/">
                                <Logo id="logo" className="logo" width="100%" display="block" height="auto" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="d-flex justify-content-center section-1">
                        <div className="col-10 col-sm-10">
                            <div className="b1 dthonHeader" style={{ color: "#7D2A00", marginBottom: "12px" }}>SB Creative Lab presents</div>
                            <div className="h1 dthonTitle">2021: Spring into Designathon</div>
                            <div className="date">April 9 - 11</div>
                            <a href="https://forms.gle/ABJpGNTXsCvkiMxG9" className="button col-12 col-sm text-center">
                                Apply
                            </a>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center dthonAbout section-2">
                        <div className="col-sm-10">
                            <div className="h2" style={{ color: '#D0EBC1', marginBottom: '36px' }}>About</div>
                            <div className="dthonAboutText" style={{ color: 'white' }}>
                                <div className="b2" style={{ marginBottom: '16px' }}>SB Creative Lab presents its 2021 Spring Designathon! Get hands-on design experience,
                                work with your friends to win cool prizes, and learn from industry professionals.
                              </div>
                                <div className="b2" style={{ marginBottom: '16px' }}>
                                    We're kicking off the event with an Opening Ceremony on Friday, April 9 @6:00pm PT.
                                    During this time, we'll present the design brief with challenge details and you get
                                    to hear from a guest speaker! Design submissions will be due on Sunday, April 11 @11:59am PT.
                                    Winners will be announced on Sunday, April 11 @2:30pm PT.
                              </div>
                                <div className="b2" style={{ marginBottom: '16px' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua....
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center dthonDetails section-3">
                        <div className="col-sm-10 section-3-box">
                            <div className="col">
                                <div className="h2 mb-5">Judges</div>
                                <div className="grid">
                                    <div className="judge">
                                        <img src="./images/designathon/mackenzie.png" alt="judge" className="judgeImg" />
                                        <div className="judgeCaption" style={{ textAlign: 'center' }}>
                                            <div className="b3">Mackenzie Derival</div>
                                            <div>Head of Design at Node, Former Designer at Google Suite</div>
                                        </div>
                                    </div>
                                    <div className="judge">
                                        <img src="./images/designathon/femke.png" alt="judge" className="judgeImg" />
                                        <div className="judgeCaption" style={{ textAlign: 'center' }}>
                                            <div className="b3">Femke van Schoonhoven</div>
                                            <div>Product Designer at Uber Eats</div>
                                        </div>
                                    </div>
                                    <div className="judge">
                                        <img src="./images/designathon/matt.png" alt="judge" className="judgeImg" />
                                        <div className="judgeCaption" style={{ textAlign: 'center' }}>
                                            <div className="b3">Matthew Lim</div>
                                            <div>UX Designer at Appfolio</div>
                                        </div>
                                    </div>
                                    <div className="judge">
                                        <img src="./images/designathon/nathan.png" alt="judge" className="judgeImg" />
                                        <div className="judgeCaption" style={{ textAlign: 'center' }}>
                                            <div className="b3">Nathan Bilbao</div>
                                            <div>Senior User Experience Designer at Oracle</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row mb-5">
                                    <div className="h2 mb-3">Prizes</div>
                                    <div className="b2" style={{ marginBottom: '16px', color: 'black' }}>
                                        We're kicking off the event with an Opening Ceremony on Friday, April 9 @6:00pm PT.
                                        During this time, we'll present the design brief with challenge details and you get
                                        to hear from a guest speaker! Design submissions will be due on Sunday, April 11 @11:59am PT.
                                        Winners will be announced on Sunday, April 11 @2:30pm PT.
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="h2 mb-3">Partnered with</div>
                                    <img src="./images/designathon/adobe-xd.png" alt="adobe xd" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center dthonDetails section-4">
                        <div className="col-sm-10">
                            <div className="h2">Schedule</div>
                            <div>
                                <div className="b3 mt-5" style={{ color: '#FCA71F' }}>Friday, April 9th</div>
                                <hr />
                                <div className="row">
                                    <div className="b3 col-3">
                                        6:00pm
                                  </div>
                                    <div className="b3 col-4">
                                        Opening Ceremony
                                  </div>
                                    <div className="offset-1 col-4" style={{ color: '#356A69' }}>
                                        Brief Description
                                  </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="b3 col-3">
                                        6:30pm
                                  </div>
                                    <div className="b3 col-4">
                                        Workshop: Getting Started with Figma + Workflow Tips
                                  </div>
                                    <div className="offset-1 col-4" style={{ color: '#356A69' }}>
                                        Brief Description
                                  </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="b3 col-3">
                                        7:30pm
                                  </div>
                                    <div className="b3 col-4">
                                        Adobe XD Workshop
                                  </div>
                                    <div className="offset-1 col-4" style={{ color: '#356A69' }}>
                                        Brief Description
                                  </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="b3 col-3">
                                        9:00pm
                                  </div>
                                    <div className="b3 col-4">
                                        Video: Tackle Ambiguous Problems and Make Effective Design Decisions
                                  </div>
                                    <div className="offset-1 col-4" style={{ color: '#356A69' }}>
                                        Workshop Video Replays
                                  </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="b3 col-3">
                                        10:30pm
                                  </div>
                                    <div className="b3 col-4">
                                        Video: Create Design Systems
                                  </div>
                                    <div className="offset-1 col-4" style={{ color: '#356A69' }}>
                                        Workshop Video Replays
                                  </div>
                                </div>
                            </div>
                            <div>
                                <div className="b3 mt-5" style={{ color: '#FCA71F' }}>Saturday, April 10th</div>
                                <hr />
                                <div className="row">
                                    <div className="b3 col-3">
                                        12:00am
                                  </div>
                                    <div className="b3 col-4">
                                        Video: Wireframe Effectively
                                  </div>
                                    <div className="offset-1 col-4" style={{ color: '#356A69' }}>
                                        Workshop Video Replays
                                  </div>
                                </div>
                            </div>
                            <div>
                                <div className="b3 mt-5" style={{ color: '#FCA71F' }}>Sunday, April 11th</div>
                                <hr />
                                <div className="row">
                                    <div className="b3 col-3">
                                        12:00pm
                                  </div>
                                    <div className="b3 col-4">
                                        Submissions Due
                                  </div>
                                    <div className="offset-1 col-4" style={{ color: '#356A69' }}>
                                        Brief Description
                                  </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="b3 col-3">
                                        12:00pm
                                  </div>
                                    <div className="b3 col-4">
                                        Judging
                                  </div>
                                    <div className="offset-1 col-4" style={{ color: '#356A69' }}>
                                        Casual Social Hangouts
                                  </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="b3 col-3">
                                        2:30pm
                                  </div>
                                    <div className="b3 col-4">
                                        Closing Ceremony
                                  </div>
                                    <div className="offset-1 col-4" style={{ color: '#356A69' }}>
                                        Brief Description
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center dthonDetails section-5">
                        <div className="col-sm-10">
                            <div className="h2 mb-5">FAQ</div>
                            <div className="row">
                                <div className="col">
                                    <div className="question mb-5">
                                        <div className="b3">Question 1</div>
                                        <div className="qText">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                    </div>
                                    <div className="question mb-5">
                                        <div className="b3">Question 2</div>
                                        <div className="qText">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                    </div>
                                    <div className="question mb-5">
                                        <div className="b3">Question 3</div>
                                        <div className="qText">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                    </div>
                                    <div className="question mb-5">
                                        <div className="b3">Question 4</div>
                                        <div className="qText">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="question mb-5">
                                        <div className="b3">Question 5</div>
                                        <div className="qText">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                    </div>
                                    <div className="question mb-5">
                                        <div className="b3">Question 6</div>
                                        <div className="qText">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                    </div>
                                    <div className="question mb-5">
                                        <div className="b3">Question 7</div>
                                        <div className="qText">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                    </div>
                                    <div className="question mb-5">
                                        <div className="b3">Question 8</div>
                                        <div className="qText">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                    </div>
                                </div>
                            </div>
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

