
import React, { Component } from 'react';
import Div100vh from 'react-div-100vh';
let backgroundColor="#F7FDF4"
let primaryColor="#1BB994"
let darkColor="#356A69"
export default class Home extends Component {
    render() {
        return(
        <div>
            <div className="about-section-3">
                <div style={{color: darkColor}} className="title about-title-3">
                    Meet the Team
                </div>
                <div className="gallery-container">
                    <div className="alex team-member">
                        <div className="team-member-container">
                            <img id="box" src="/images/lightest-yellow-square.jpg"></img>
                            <img className="team-member-image" src="/images/alex-transparent.png"></img>
                            <div className="team-member-hover">
                                <div className="sm-orange-circle circle-skew"></div>
                                <div className="md-orange-circle circle-scale-delay"></div>
                                <div className="lg-orange-circle circle-scale"></div>
                            </div>
                        </div>                               
                        <div style={{marginTop: "24px"}} className="team-member-name title-small">Alex Schwartzberg</div>
                        <div className="team-member-team longCaption">Design</div>
                    </div>
                    <div className="spencer team-member">
                        <div className="team-member-container">
                            <img id="box" src="/images/lightest-blue-square.jpg"></img>
                            <img className="team-member-image" src="/images/spencer.png"></img>
                            <div className="team-member-hover">
                                <div className="blue-circle"></div>
                                <div className="dark-blue-circle"></div>
                                <img className="rose" src="/images/rose_1_WP2.png"/>
                                <img className="rose2" src="/images/rose-2-WP-saturated.png"/>
                            </div>
                        </div>                                
                        <div style={{marginTop: "24px"}} className="team-member-name title-small">Name</div>
                        <div className="team-member-team longCaption">Team</div>
                    </div>
                    <div className="alex team-member">
                        <div className="team-member-container">
                            <img id="box" src="/images/light-green-square.jpg"></img>
                            <img className="team-member-image" src=""></img>
                            <div className="team-member-hover">
                                <div className="blue-circle"></div>
                                <div className="dark-blue-circle"></div>
                                {/* <img className="color-smoke" src="/images/colorsmoke.png" x="0" y="0" style={{filter: "url(#noise)"}}/> */}
                                <svg className="color-smoke" preserveAspectRatio="xMidYMid slice"  viewBox="0 0 100 123">
                                    <filter width="100%" height="100%" x="0%" y="0%" id="noise">
                                    <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
                                        <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
                                    </feTurbulence>
                                    <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
                                                                        xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                                    </filter>
                                    <foreignObject width="100%" height="100%">
                                    <img src="/images/cloud2.png" width="100%" height="auto" x="0" y="0" style={{filter: "url(#noise)"}}/>
                                    </foreignObject>
                                </svg>
                                <svg className="color-smoke-2" preserveAspectRatio="xMidYMid slice"  viewBox="0 0 100 115">
                                    <filter width="100%" height="100%" x="0%" y="0%" id="noise">
                                    <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
                                        <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
                                    </feTurbulence>
                                    <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
                                                                        xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                                    </filter>
                                    <foreignObject width="100%" height="100%">
                                    <img src="/images/cloud7.png" width="100%" height="auto" x="0" y="0" style={{filter: "url(#noise)"}}/>
                                    </foreignObject>
                                </svg>
                            </div>
                        </div>                                
                        <div style={{marginTop: "24px"}} className="team-member-name title-small">Name</div>
                        <div className="team-member-team longCaption">Team</div>
                    </div>
                    <div className="spencer team-member">
                        <div className="team-member-container">
                            <img id="box" src="/images/light-green-square.jpg"></img>
                            <img className="team-member-image" src="/images/spencer.png"></img>
                            <div className="team-member-hover">
                                <div className="blue-circle"></div>
                                <div className="dark-blue-circle"></div>
                                <img className="cool-shape" src="/images/coolshape1.png"/>
                                <img className="cool-shape-2" src="/images/coolshape1.png"/>
                                {/* <svg className="color-smoke" preserveAspectRatio="xMidYMid slice"  viewBox="0 0 100 123">
                                    <filter width="100%" height="100%" x="0%" y="0%" id="noise">
                                    <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
                                        <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
                                    </feTurbulence>
                                    <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
                                                                        xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                                    </filter>
                                    <foreignObject width="100%" height="100%">
                                    <img src="/images/cloud2.png" width="100%" height="auto" x="0" y="0" style={{filter: "url(#noise)"}}/>
                                    </foreignObject>
                                </svg>
                                <svg className="color-smoke-2" preserveAspectRatio="xMidYMid slice"  viewBox="0 0 100 115">
                                    <filter width="100%" height="100%" x="0%" y="0%" id="noise">
                                    <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
                                        <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
                                    </feTurbulence>
                                    <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
                                                                        xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                                    </filter>
                                    <foreignObject width="100%" height="100%">
                                    <img src="/images/cloud7.png" width="100%" height="auto" x="0" y="0" style={{filter: "url(#noise)"}}/>
                                    </foreignObject>
                                </svg> */}
                            </div>
                        </div>                                
                        <div style={{marginTop: "24px"}} className="team-member-name title-small">Name</div>
                        <div className="team-member-team longCaption">Team</div>
                    </div>
                    <div className="spencer team-member">
                        <div className="team-member-container">
                            <img id="box" src="/images/light-green-square.jpg"></img>
                            <img className="team-member-image" src=""></img>
                            <div className="team-member-hover">
                                <div className="blue-circle"></div>
                                <div className="dark-blue-circle"></div>
                                {/* <img className="color-smoke" src="/images/colorsmoke.png" x="0" y="0" style={{filter: "url(#noise)"}}/> */}
                                <svg className="color-smoke" preserveAspectRatio="xMidYMid slice"  viewBox="0 0 100 123">
                                    <filter width="100%" height="100%" x="0%" y="0%" id="noise">
                                    <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
                                        <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
                                    </feTurbulence>
                                    <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
                                                                        xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                                    </filter>
                                    <foreignObject width="100%" height="100%">
                                    <img src="/images/cloud2.png" width="100%" height="auto" x="0" y="0" style={{filter: "url(#noise)"}}/>
                                    </foreignObject>
                                </svg>
                                <svg className="color-smoke-2" preserveAspectRatio="xMidYMid slice"  viewBox="0 0 100 115">
                                    <filter width="100%" height="100%" x="0%" y="0%" id="noise">
                                    <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
                                        <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
                                    </feTurbulence>
                                    <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
                                                                        xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                                    </filter>
                                    <foreignObject width="100%" height="100%">
                                    <img src="/images/cloud7.png" width="100%" height="auto" x="0" y="0" style={{filter: "url(#noise)"}}/>
                                    </foreignObject>
                                </svg>
                            </div>
                        </div>                                
                        <div style={{marginTop: "24px"}} className="team-member-name title-small">Name</div>
                        <div className="team-member-team longCaption">Team</div>
                    </div>
                </div>
            </div>
            {/* unused */}
            {/* <div className="spencer team-member">
                <div className="team-member-container">
                    <img id="box" src="/images/light-green-square.jpg"></img>
                    <img className="team-member-image" src="/images/spencer.png"></img>
                    <div className="team-member-hover">
                        <div className="blue-circle"></div>
                        <div className="dark-blue-circle"></div>
                        <svg className="color-smoke" preserveAspectRatio="xMidYMid slice"  viewBox="0 0 100 123">
                            <filter width="100%" height="100%" x="0%" y="0%" id="noise">
                            <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
                                <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
                            </feTurbulence>
                            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
                                                                xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                            </filter>
                            <foreignObject width="100%" height="100%">
                            <img src="/images/cloud2.png" width="100%" height="auto" x="0" y="0" style={{filter: "url(#noise)"}}/>
                            </foreignObject>
                        </svg>
                        <svg className="color-smoke-2" preserveAspectRatio="xMidYMid slice"  viewBox="0 0 100 115">
                            <filter width="100%" height="100%" x="0%" y="0%" id="noise">
                            <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
                                <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
                            </feTurbulence>
                            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
                                                                xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
                            </filter>
                            <foreignObject width="100%" height="100%">
                            <img src="/images/cloud7.png" width="100%" height="auto" x="0" y="0" style={{filter: "url(#noise)"}}/>
                            </foreignObject>
                        </svg>
                    </div>
                </div>                                
                <div style={{marginTop: "24px"}} className="team-member-name title-small">Spencer Zou</div>
                <div className="team-member-team longCaption">Web Development</div>
            </div> */}
            <svg>
                <filter id="filter" x="0" y="0" width="100%" height="100%">
                    <feTurbulence id="sea-filter" numOctaves="3" seed="5" baseFrequency="0.02 0.05"></feTurbulence>
                    <feDisplacementMap scale="5" in="SourceGraphic"></feDisplacementMap>
                    <animate href="#sea-filter" attributeName="baseFrequency" dur="60s" keyTimes="0;0.5;1" values="0.02 0.06;0.04 0.08;0.02 0.06" repeatCount="indefinite"></animate>
                </filter>
                
            </svg>
            <svg class="filter" xlmns="http://www.w3.org/2000/svg" version="1.1">
                <filter id="filter2" filterUnits="objectBoundingBox" x="0" y="0" width="100%" height="100%">
                    <feTurbulence id="feturbulence" type="turbulence" numOctaves="3" seed="5"></feTurbulence>
                    <feDisplacementMap xChannelSelector="G" yChannelSelector="B" scale="6" in="SourceGraphic"></feDisplacementMap>
                </filter>
            </svg>
        </div>
        )
    }
}