import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga'
import { ReactComponent as Logo } from "./logo.svg";
import useWindowDimensions from '../utils/useWindowDimensions';
import { HashLink } from 'react-router-hash-link';

const scrollTrigger = window.ScrollTrigger
const gsap = window.gsap;

gsap.registerPlugin(scrollTrigger)

const Projects = () => {
    ReactGA.initialize('UA-178117149-1');
    ReactGA.pageview('projects');
    const [gears, setGears] = useState(false);
    const { width } = useWindowDimensions();
    const MED_SCREEN_BREAKPOINT = 1200;
    const SMALL_SCREEN_BREAKPOINT = 992;
    const EXTRA_SMALL_SCREEN_BREAKPOINT = 767;
    const isSmallScreen = width <= SMALL_SCREEN_BREAKPOINT;
    const isExtraSmallScreen = width <= EXTRA_SMALL_SCREEN_BREAKPOINT;
    const isMedScreen = width <= MED_SCREEN_BREAKPOINT;
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
        tl.fromTo('.arrow', .6, { y: '-40', opacity: 0 }, { y: 0, opacity: 1, delay: .22 });
        // this.initializeReactGA();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <div className="projects">
                <div className="header">
                    <div className="header-left">
                        <div className="logo-wrapper">
                            <a className="logo-link" href="https://www.sbcreativelab.com">
                                <Logo id="logo" className="logo" width="100%" display="block" height="auto" />
                            </a>
                        </div>
                    </div>
                    <div className={`${isExtraSmallScreen ? 'tablist-small' : 'tablist'} header-right`}>
                        <a href='https://forms.gle/4MEmZ93JV1qGJHxe8' target="_blank" className='tab'>Apply</a>
                        <HashLink smooth to={`#about`} className='tab'>About</HashLink>
                        <HashLink smooth to={`#schedule`} className='tab'>Schedule</HashLink>
                        <HashLink smooth to={`#faq`} className='tab'>FAQ</HashLink>
                        {!isExtraSmallScreen ? <span onClick={() => setGears(!gears)} className={`${gears ? 'active' : ''} toggle-switch`}>
                            <span class="toggle-knob"></span>
                        </span> : null}
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="section-1">
                        <div className="row d-flex justify-content-center">
                            <div className="col-10 col-sm-10">
                                <div className="b1 italic dthonHeader" style={{ fontSize: "35px", marginBottom: "12px" }}>SB Creative Lab presents</div>
                                {/* {isExtraSmallScreen ? <div style={{ position: "relative" }} className="textbox-small-container w-100 d-flex flex-column justify-content-center">
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
                                    </div>} */}
                                <div className="w-100 d-flex flex-column justify-content-center">
                                    <div className={`${isExtraSmallScreen ? 'h3' : 'h1'} dthonTitle mb-5`}>Projects Teams</div>
                                    <div className={`${isExtraSmallScreen ? 'h5' : 'h4'} date pb-4 italic`}>Apply for our Fall 2021 teams now!</div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-10 col-sm-10">
                                <div style={{ overflow: 'hidden' }} >
                                    <div className="animate-slideup py-3">
                                        <a target="_blank" href="https://forms.gle/4MEmZ93JV1qGJHxe8" className="button text-center">
                                            Apply
                                        </a>
                                    </div>
                                </div>
                                <div className={`arrow ${isExtraSmallScreen ? 'hidden' : ''} fadeInOut`} style={{ top: "-8px", left: "250px", position: "absolute" }}>
                                    <img src="/images/projects/arrow.png" />
                                </div>
                            </div>
                        </div>
                        <div className="imageContainer" style={{ position: "absolute" }}>
                            <img style={{ position: "absolute", bottom: "-5%", left: "50%", transform: "translate(-50%,-50%)" }} src="/images/projects/arrow-down.png"></img>
                        </div>
                    </div>
                    {isExtraSmallScreen ? <div /> : <div>
                        <div className='prototypeGraphic' style={{ position: 'absolute' }}>
                            <img id="prototypeGraphic" src="/images/projects/prototype.png" />
                        </div>
                    </div>}
                    <div className="row d-flex justify-content-center projectsAbout section-2" id="about">
                        <div className="col-10">
                            <div className="h2" style={{ marginBottom: '36px' }}>What are projects teams?</div>
                            <div className="dthonAboutText" style={{ width: '75%' }}>
                                <div className="b2" style={{ marginBottom: '16px' }}>Interested in UX design, but don’t know where to start?
                                </div>
                                <div className="b2" style={{ marginBottom: '16px' }}>
                                    SB Creative Lab presents our <b>Projects Teams</b>— an 8 week program where you can exercise your UX design skills and put together a case study in a team setting. We want to give beginner UX designers the building blocks to enter the UX space, and come out with tangible oppurtunities for portfolios and interviews.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center dthonDetails section-3" id="faq">
                        <div className="col-10">
                            {/* <div className="h2 mb-5">FAQ</div> */}
                            <div className="row">
                                <div className="col-md-6 b1">
                                    <div className="question mb-5">
                                        <div className="h2">When?</div>
                                        <div className="b2">
                                            We rotate between Fall, Winter, and Summer quarters. Each cycle will last 8 weeks (weeks 2-9).
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 b1">
                                    <div className="question mb-5">
                                        <div className="h2">Who?</div>
                                        <div className="b2">
                                            All SBCL members can apply. All experience levels are welcome (individuals with no experience as well)!
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 b1">
                                    <div className="question">
                                        <div className="h2">What can I get out of this?</div>
                                        <div className="b2">
                                            At the end of the 8 week program, projects team participants will have developed a tangible case study for portfolios and first-hand UX experience for UX design interviews.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex flex-column align-items-center section-4">
                    <div className="h2" style={{ marginBottom: '36px' }}>How can I get involved?</div>
                    <div className="b2" >
                        Applications for our Fall 2021 Projects Teams are open now!
                    </div>
                    <div className="b2" style={{ marginBottom: '36px' }}>
                        Keep an eye on our Instagram to know when the next cycle starts.
                    </div>
                    <a href="https://www.sbcreativelab.com"><Logo height="80px"></Logo></a>
                </div>
            </div >
        </div >
    )
};

export default Projects;

