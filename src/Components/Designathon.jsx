import React, { useEffect, useState } from 'react';
import ChallengeItem from './ChallengeItem';
import ReactGA from 'react-ga'
import { ReactComponent as Logo } from "./logo.svg";
import useWindowDimensions from '../utils/useWindowDimensions';
import {HashLink} from 'react-router-hash-link';

import TabList from './TabList';
// import PictureHover from './PictureHover';
const scrollTrigger = window.ScrollTrigger
const gsap = window.gsap;

gsap.registerPlugin(scrollTrigger)

const Designathon = () => {
    // initializeReactGA() {
    //     ReactGA.initialize('UA-178117149-1');
    //     ReactGA.pageview('/challenge');
    // }
    const { width } = useWindowDimensions();
    const SMALL_SCREEN_BREAKPOINT = 992;
    const EXTRA_SMALL_SCREEN_BREAKPOINT = 767;
    const isSmallScreen = width <= SMALL_SCREEN_BREAKPOINT;
    const isExtraSmallScreen = width <= EXTRA_SMALL_SCREEN_BREAKPOINT;
    useEffect(() => {
        document.body.classList.add("no-xscroll");
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
        gsap.to(".tablist", {
            scrollTrigger: {
                trigger: ".section-2",
                start: "top +275",
                toggleActions: "play none none reverse",
                toggleClass: { targets: ".tablist", className: "pointer" }
            },
            ease: "power1.inOut",
            duration: .4,
            opacity: 0,
            y: -12,
        });
        const tl = gsap.timeline();
        tl.fromTo('.dthonTitle', .6, { y: '40', opacity: 0 }, { y: 0, opacity: 1, delay: 1 })
        tl.fromTo('.date', .6, { y: '40', opacity: 0 }, { y: 0, opacity: 1, delay: .1 });
        // this.initializeReactGA();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
      {
        id: 1,
        title: 'About'
      },
      {
        id: 2,
        title: 'Schedule'
      },
      {
        id: 3,
        title: 'FAQ'
      }
    ]

    return (
        <div>
            <div className="designathon">
                <div className="header">
                    <div className="header-left">
                        <div className="logo-wrapper">
                            <a className="logo-link" href="/">
                                <Logo id="logo" className="logo" width="100%" display="block" height="auto" />
                            </a>
                        </div>
                    </div>
                    <div className="header-right tablist">
                        <a href='https://forms.gle/4MEmZ93JV1qGJHxe8' target="_blank" className ='tab'>Apply</a>
                        <TabList tabs={tabs} activeTab={activeTab} changeTab={(id) => {setActiveTab(id)}} />
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="section-1">
                        <div className="row d-flex justify-content-center">
                            <div className="col-10 col-sm-10">
                                <div className="b1 dthonHeader semibold" style={{ color: "#7D2A00", marginBottom: "12px" }}>SB Creative Lab presents</div>
                                {isExtraSmallScreen ? <div style={{ position: "relative" }} className="textbox-small-container w-100 d-flex flex-column justify-content-center">
                                    <div className={`${isExtraSmallScreen ? 'h3' : 'h1'} dthonTitle px-5 pt-4`}>2021: Spring into Designathon</div>
                                    <div className={`${isExtraSmallScreen ? 'h5' : 'h4'} date px-5 pb-4`}>April 9 - 11</div>
                                    <div style={{ top: "0", left: "0", transform: "translate(-50%,-50%)" }} className="square"></div>
                                    <div style={{ top: "0", right: "0", transform: "translate(50%,-50%)" }} className="square"></div>
                                    <div style={{ bottom: "0", left: "0", transform: "translate(-50%, 50%)" }} className="square"></div>
                                    <div style={{ bottom: "0", right: "0", transform: "translate(50%, 50%)" }} className="square"></div>
                                </div>
                                    :
                                    <div style={{ position: "relative" }} className="textbox-container w-100 d-flex flex-column justify-content-center">
                                        <div className={`${isSmallScreen ? 'h1' : 'h1'} dthonTitle px-5 pt-4`}>2021: Spring into Designathon</div>
                                        <div className={`${isSmallScreen ? 'h1' : 'h4'} date px-5 pb-4`}>April 9 - 11</div>
                                        <div style={{ top: "0", left: "0", transform: "translate(-50%,-50%)" }} className="square"></div>
                                        <div style={{ top: "0", right: "0", transform: "translate(50%,-50%)" }} className="square"></div>
                                        <div style={{ bottom: "0", left: "0", transform: "translate(-50%, 50%)" }} className="square"></div>
                                        <div style={{ bottom: "0", right: "0", transform: "translate(50%, 50%)" }} className="square"></div>
                                    </div>}
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center mt-4 pt-3">
                            <div className="col-10 col-sm-10">
                                <div style={{ overflow: 'hidden' }} >
                                    <div className="animate-slideup py-3">
                                        <a target="_blank" href="https://forms.gle/4MEmZ93JV1qGJHxe8" className="button text-center">
                                            Apply
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isExtraSmallScreen ? <div /> : <div>
                        <div className="bigGear" style={{ position: 'absolute' }}>
                            <img alt="bigGear" id="bigGear" src="/images/bigGear.png" />
                        </div>
                        <div className="smallGear" style={{ position: 'absolute' }}>
                            <img alt="smallGear" id="smallGear" src="/images/smallGear.png" />
                        </div>
                    </div>}
                    <div className="row d-flex justify-content-center dthonAbout section-2" id="About">
                        <div className="col-10">
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
                    <div className="row d-flex justify-content-center dthonDetails section-3" id="About">
                        <div className="col-10 col-md-5">
                            <div className="row">
                                <div className="col">
                                    <div className="h2 mb-5">Judges</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="judge">
                                        <img src="./images/designathon/mackenzie.png" alt="judge" className={isSmallScreen ? "judgeImgSmall" : "judgeImg"} />
                                        <div className="judgeCaption" style={{ textAlign: 'center' }}>
                                            <div className="b3 bold">Mackenzie Derival</div>
                                            <div>Head of Design at Node, Former Designer at Google</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="judge">
                                        <img src="./images/designathon/femke.png" alt="judge" className={isSmallScreen ? "judgeImgSmall" : "judgeImg"} />
                                        <div className="judgeCaption" style={{ textAlign: 'center' }}>
                                            <div className="b3 bold">Femke van Schoonhoven</div>
                                            <div>Product Designer at Uber Eats</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-6">
                                    <div className="judge">
                                        <img src="./images/designathon/matt.png" alt="judge" className={isSmallScreen ? "judgeImgSmall" : "judgeImg"} />
                                        <div className="judgeCaption" style={{ textAlign: 'center' }}>
                                            <div className="b3 bold">Matthew Lim</div>
                                            <div>UX Designer at Appfolio</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="judge">
                                        <img src="./images/designathon/nathan.png" alt="judge" className={isSmallScreen ? "judgeImgSmall" : "judgeImg"} />
                                        <div className="judgeCaption" style={{ textAlign: 'center' }}>
                                            <div className="b3 bold">Nathan Bilbao</div>
                                            <div>Senior User Experience Designer at Oracle</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 offset-md-1 col-md-4">
                            <div className="row mb-5">
                                <div className="h2 mb-3">Prizes</div>
                                <div className="b2" style={{ fontWeight: '300', marginBottom: '16px', color: 'black' }}>
                                    Members of the winning team will receive:
                                    <ul style={{ lineHeight: '36px' }} className="mt-2">
                                        <li>1-year Adobe Creative Cloud License</li>
                                        <li>1:1 meeting with an industry professional for portfolio review, networking, or career advice</li>
                                    </ul>
                                    In addition, we'll be raffling to participants:
                                    <ul className="mt-2">
                                        <li>1-year Adobe Creative Cloud License</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row d-flex flex-column">
                                <div className="h2 mb-3">Partnered with</div>
                                <img style={{ height: "auto", width: "250px" }} src="./images/designathon/adobe-xd.png" alt="adobe xd" />
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center dthonDetails section-4" id="Schedule">
                        <div className="col-10">
                            <div className="h2">Schedule</div>
                            <div>
                                <div className="b1 bold mt-5" style={{ color: '#FCA71F' }}>Friday, April 9th</div>
                                <hr />
                                <div className="b2 row">
                                    <div className="bold col-md-3">
                                        6:00pm
                                  </div>
                                    <div className="bold col-md-4">
                                        Opening Ceremony
                                  </div>
                                    <div className="offset-md-1 col-md-4" style={{ color: '#356A69' }}>
                                        Prompt announcement + Keynote presentation from Aladrian Goods (UCSB alum!)
                                  </div>
                                </div>
                                <hr />
                                <div className="b2 row">
                                    <div className="bold col-md-3">
                                        6:30pm
                                  </div>
                                    <div className="bold col-md-4">
                                        Workshop: Getting Started with Figma + Workflow Tips
                                  </div>
                                    <div className="offset-md-1 col-md-4" style={{ color: '#356A69' }}>
                                        Figma tutorial hosted by SBCL's very own design team!
                                  </div>
                                </div>
                                <hr />
                                <div className="b2 row">
                                    <div className="bold col-md-3">
                                        7:30pm
                                  </div>
                                    <div className="bold col-md-4">
                                        Adobe XD Workshop
                                  </div>
                                    <div className="offset-md-1 col-md-4" style={{ color: '#356A69' }}>
                                        Beginner workshop by an Adobe XD representative
                                  </div>
                                </div>
                                <hr />
                                <div className="b2 row">
                                    <div className="bold col-md-3">
                                        9:00pm
                                  </div>
                                    <div className="bold col-md-4">
                                        Video: Tackle Ambiguous Problems and Make Effective Design Decisions
                                  </div>
                                    <div className="offset-md-1 col-md-4" style={{ color: '#984822' }}>
                                        Workshop Video Replays
                                  </div>
                                </div>
                                <hr />
                                <div className="b2 row">
                                    <div className="bold col-md-3">
                                        10:00pm
                                  </div>
                                    <div className="bold col-md-4">
                                        Video: Create Design Systems
                                  </div>
                                    <div className="offset-md-1 col-md-4" style={{ color: '#984822' }}>
                                        Workshop Video Replays
                                  </div>
                                </div>
                                <hr />
                                <div className="b2 row">
                                    <div className="bold col-md-3">
                                        11:00pm
                                  </div>
                                    <div className="bold col-md-4">
                                        Video: Wireframe Effectively
                                  </div>
                                    <div className="offset-md-1 col-md-4" style={{ color: '#984822' }}>
                                        Workshop Video Replays
                                  </div>
                                </div>
                            </div>
                            <div>
                                <div className="b1 bold mt-5" style={{ color: '#FCA71F' }}>Saturday, April 10th</div>
                                <hr />
                                <div className="b2 row">
                                    <div className="bold col-md-3">
                                        All Day
                                  </div>
                                    <div className="bold col-md-4">
                                        Work Time
                                  </div>
                                    <div className="offset-md-1 col-md-4" style={{ color: '#356A69' }}>
                                        Continue to work on projects!
                                  </div>
                                </div>
                            </div>
                            <div>
                                <div className="b1 bold mt-5" style={{ color: '#FCA71F' }}>Sunday, April 11th</div>
                                <hr />
                                <div className="row b2">
                                    <div className="bold col-md-3">
                                        11:59am
                                  </div>
                                    <div className="bold col-md-4">
                                        Submissions Due
                                  </div>
                                    <div className="offset-md-1 col-md-4" style={{ color: '#356A69' }}>
                                        Submit your project <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdt2aeUF5QtdRGNGPeSN811-bN7IVKWY44yKgOr5vpa_PZ2aQ/viewform">here</a>
                                  </div>
                                </div>
                                <hr />
                                <div className="row b2">
                                    <div className="bold col-md-3">
                                        12:00pm
                                  </div>
                                    <div className="bold col-md-4">
                                        Judging
                                  </div>
                                    <div className="offset-md-1 col-md-4" style={{ color: '#356A69' }}>
                                        Casual Social Hangouts
                                  </div>
                                </div>
                                <hr />
                                <div className="b2 row">
                                    <div className="bold col-md-3">
                                        2:30pm
                                  </div>
                                    <div className="bold col-md-4">
                                        Closing Ceremony
                                  </div>
                                    <div className="offset-md-1 col-md-4" style={{ color: '#356A69' }}>
                                        Event wrap-up + Winners announcement
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isExtraSmallScreen ? <div /> :
                        <div>
                            <div className="bigGear-2" style={{ position: 'absolute' }}>
                                <img alt="bigGear2" id="bigGear-2" src="/images/bigGear-2.png" />
                            </div>
                            <div className="smallGear-2" style={{ position: 'absolute' }}>
                                <img alt="smallGear2" id="smallGear-2" src="/images/smallGear-2.png" />
                            </div>
                        </div>
                    }
                    <div className="row d-flex justify-content-center dthonDetails section-5" id="FAQ">
                        <div className="col-10">
                            <div className="h2 mb-5">FAQ</div>
                            <div className="row">
                                <div className="col-md-6 b1">
                                    <div className="question mb-5">
                                        <div className="bold">What is a designathon?</div>
                                        <div className="qText">
                                            A designathon is a 24 to 72 hour-long event where teams of designers
                                             are tasked with designing a solution to a given prompt.
                                             It's also a fun way to practice your skills, meet new people +
                                             win awesome prizes!
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 b1">
                                    <div className="question mb-5">
                                        <div className="bold">Where is the event taking place?</div>
                                        <div className="qText">
                                            The event will be completely virtual this year. We are using Discord and Zoom to host the designathon.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 b1">
                                    <div className="question mb-5">
                                        <div className="bold">Who can participate?</div>
                                        <div className="qText">
                                            Any college student may participate in the designathon. We welcome designers from all levels and backgrounds!
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 b1">
                                    <div className="question mb-5">
                                        <div className="bold">Can I participate with a team?</div>
                                        <div className="qText">
                                            Absolutely! We are requiring students to compete in teams of 2-3 designers.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 b1">
                                    <div className="question mb-5">
                                        <div className="bold">What if I don’t have a team?</div>
                                        <div className="qText">
                                            No worries! A team formation event will be hosted closer to the event date to help connect you with other designers.
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-6 b1">
                                    <div className="question mb-5">
                                        <div className="bold">How much does it cost to attend the event?</div>
                                        <div className="qText">
                                            SB Creative Lab events are all free of charge! You do not have to pay to participate in the event. Register on our <a className="link" target="_blank" href="https://forms.gle/4MEmZ93JV1qGJHxe8">registration form.</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="container-fluid">
                <div style={{ backgroundColor: "#C1F0E5" }} className="row d-flex justify-content-center pb-5">
                    <a href="/"><Logo height="80px"></Logo></a>
                </div>
            </div>
        </div >
    )
};

export default Designathon;

