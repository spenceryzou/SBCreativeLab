
import React, { Component } from 'react';
import Div100vh from 'react-div-100vh';
let backgroundColor="#F7FDF4"
let primaryColor="#1BB994"
let darkColor="#356A69"

function Background(props){
    if(props.color === "yellow"){
        return (
          <img id="box" src="/images/lightest-yellow-square.jpg"></img>
        );
    } else if(props.color === "blue"){
        return (
          <img id="box" src="/images/lightest-blue-square.jpg"></img>
        );
    } else if(props.color === "pink"){
        return (
            <img id="box" src="/images/lightest-pink-square.jpg"></img>
        );
    } else if(props.color === "green"){
        return (
            <img id="box" src="/images/lightest-green-square.jpg"></img>
        );
    }
}

function Graphics(props) {
    if(props.color === "yellow"){
        return (
          <div className="team-member-hover">
              <div className="sm-orange-circle circle-scale-quick"></div>
              <div className="md-orange-circle circle-scale-delay"></div>
              <div className="lg-orange-circle circle-scale"></div>
              <img className="golgi" src="images/golgi-apparatus.png"></img>
              <img className="sm-golgi" src="images/golgi-apparatus.png"></img>
          </div>
        );
    } else if(props.color === "blue"){
        return (
            <div className="team-member-hover">
                <div className="blue-circle circle-scale"></div>
                <div className="dark-blue-circle circle-scale-delay "></div>
                <img className="donut" src="/images/cake-donut.png"/>
                <img className="sm-donut" src="/images/cake-donut.png"/>
            </div>
        );
    } else if(props.color === "pink"){
      return (
          <div className="team-member-hover">
              <div className="lg-red-circle circle-scale"></div>
              <div className="md-red-circle circle-scale-delay"></div>
              <img className="cool-shape" src="/images/ruffles.png"/>
              <img className="cool-shape-2" src="/images/coolshape1.png"/>
          </div>
      );
    } else if(props.color === "green"){
      return (
          <div className="team-member-hover connie">
              <div className="blue-circle circle-scale"></div>
              <div className="dark-blue-circle circle-scale-delay"></div>
              <img className="rose" src="/images/rose_1_WP2.png"/>
              <img className="rose2" src="/images/rose-2-WP-saturated.png"/>
          </div>
      );
    }
}

export default function Team() {
    return (
        <div>
            <div className="about-section-3">
                <div style={{color: darkColor}} className="title about-title-3">
                    Meet the Team
                </div>
                <div id="gallery-container" className="gallery-container">
                    <div className="alex team-member">
                        <div className="team-member-container">
                            <Background color="yellow"/>
                            <img className="team-member-image" src="/images/alex-transparent.png"></img>
                            <Graphics color="yellow"/>
                        </div>                               
                        <div style={{marginTop: "24px"}} className="team-member-name title-small">Alex Schwartzberg</div>
                        <div className="team-member-team longCaption">Design</div>
                    </div>
                    <div className="ashley team-member">
                        <div className="team-member-container">
                            <Background color="blue"/>
                            <img className="team-member-image" src="/images/ashley-transparent.png"></img>
                            <Graphics color="blue"/>
                        </div>                                
                        <div style={{marginTop: "24px"}} className="team-member-name title-small">Ashley Jiang</div>
                        <div className="team-member-team longCaption">Marketing {'\u2022'} Design</div>
                    </div>
                    <div className="bianca team-member">
                        <div className="team-member-container">
                            <Background color="pink"/>
                            <img className="team-member-image" src="/images/bianca.png"></img>
                            <Graphics color="pink"/>
                        </div>                                
                        <div style={{marginTop: "24px"}} className="team-member-name title-small">Bianca Wu</div>
                        <div className="team-member-team longCaption">Logistics</div>
                    </div>
                    <div className="celine team-member">
                        <div className="team-member-container">
                            <Background color="green"/>
                            <img className="team-member-image" src="/images/celine.png"></img>
                            <Graphics color="green"/>
                            {/* <div style={{transform: "translateZ(21px)"}} className="cover team-member-hover">
                                <img className="cool-shape-2" src="/images/coolshape1.png"/>
                            </div> */}
                        </div>                                
                        <div style={{marginTop: "24px"}} className="team-member-name title-small">Celine Liu</div>
                        <div className="team-member-team longCaption">Design</div>
                    </div>
                    <div className="chloe team-member">
                        <div className="team-member-container">
                            <Background color="yellow"/>
                            <img className="team-member-image" src="/images/chloe.png"></img>
                            <Graphics color="yellow"/>
                            {/* <div style={{transform: "translateZ(21px)"}} className="cover team-member-hover">
                                <img className="cool-shape-2" src="/images/coolshape1.png"/>
                            </div> */}
                        </div>                                
                        <div style={{marginTop: "24px"}} className="team-member-name title-small">Chloe Chow</div>
                        <div className="team-member-team longCaption">Design</div>
                    </div>
                    <div className="christina team-member">
                        <div className="team-member-container">
                            <Background color="blue"/>
                            <img className="team-member-image" src="/images/christina.png"></img>
                            <Graphics color="blue"/>
                            {/* <div style={{transform: "translateZ(21px)"}} className="cover team-member-hover">
                                <img className="cool-shape-2" src="/images/coolshape1.png"/>
                            </div> */}
                        </div>                                
                        <div style={{marginTop: "24px"}} className="team-member-name title-small">Christina Cui</div>
                        <div className="team-member-team longCaption">Logistics</div>
                    </div>
                    <div className="connie team-member">
                        <div className="team-member-container">
                            <Background color="pink"/>
                            <img className="team-member-image" src="/images/connie.png"></img>
                            <Graphics color="pink"/>
                        </div>                                
                        <div style={{marginTop: "24px"}} className="team-member-name title-small">Connie Yoon</div>
                        <div className="team-member-team longCaption">Marketing</div>
                    </div>
                    <div className="emily team-member">
                        <div className="team-member-container">
                            <Background color="green"/>
                            <img className="team-member-image" src="/images/emily.png"></img>
                            <Graphics color="green"/>
                        </div>                                
                        <div style={{marginTop: "24px"}} className="team-member-name title-small">Emily Nguyen</div>
                        <div className="team-member-team longCaption">Design</div>
                    </div>
                    <div className="esther team-member">
                        <div className="team-member-container">
                            <Background color="yellow"/>
                            <img className="team-member-image" src="/images/esther.png"></img>
                            <Graphics color="yellow"/>
                        </div>                                
                        <div style={{marginTop: "24px"}} className="team-member-name title-small">Esther Liu</div>
                        <div className="team-member-team longCaption">Logistics {'\u2022'} Design</div>
                    </div>
                    <div className="evelyn team-member">
                        <div className="team-member-container">
                            <Background color="blue"/>
                            <img className="team-member-image" src="/images/evelyn.png"></img>
                            <Graphics color="blue"/>
                        </div>                                
                        <div style={{marginTop: "24px"}} className="team-member-name title-small">Evelyn Yang</div>
                        <div className="team-member-team longCaption">Web Dev {'\u2022'} Marketing</div>
                    </div>
                    <div className="joyce team-member">
                        <div className="team-member-container">
                            <Background color="pink"/>
                            <img className="team-member-image" src="/images/joyce.png"></img>
                            <Graphics color="pink"/>
                        </div>                                
                        <div style={{marginTop: "24px"}} className="team-member-name title-small">Joyce Tsui</div>
                        <div className="team-member-team longCaption">Design</div>
                    </div>
                    <div className="spencer team-member">
                        <div className="team-member-container">
                            <Background color="green"/>
                            <img className="team-member-image" src="/images/spencer.png"></img>
                            <Graphics color="green"/>
                        </div>                                
                        <div style={{marginTop: "24px"}} className="team-member-name title-small">Spencer Zou</div>
                        <div className="team-member-team longCaption">Web Dev {'\u2022'} Logistics</div>
                    </div>
                    <div className="van team-member">
                        <div className="team-member-container">
                            <Background color="yellow"/>
                            <img className="team-member-image" src="/images/van.png"></img>
                            <Graphics color="yellow"/>
                        </div>                                
                        <div style={{marginTop: "24px"}} className="team-member-name title-small">Van Vo</div>
                        <div className="team-member-team longCaption">Design</div>
                    </div>
                    <div className="fox team-member">
                        <div className="team-member-container">
                            <Background color="blue"/>
                            <img className="team-member-image" src="/images/Fox-Headshot.png"></img>
                            <Graphics color="blue"/>
                        </div>                                
                        <div style={{marginTop: "24px"}} className="team-member-name title-small">Finn the Fox</div>
                        <div className="team-member-team longCaption">Team Captain</div>
                    </div>
                </div>
            </div>
            <svg>
                <filter id="filter" x="0" y="0" width="100%" height="100%">
                    <feTurbulence id="sea-filter" numOctaves="3" seed="5" baseFrequency="0.02 0.05"></feTurbulence>
                    <feDisplacementMap scale="4" in="SourceGraphic"></feDisplacementMap>
                    <animate href="#sea-filter" attributeName="baseFrequency" dur="60s" keyTimes="0;0.5;1" values="0.02 0.06;0.04 0.08;0.02 0.06" repeatCount="indefinite"></animate>
                </filter>
                
            </svg>
            <svg style={{transform: "translateZ(21px)"}} class="filter" xlmns="http://www.w3.org/2000/svg" version="1.1">
                <filter style={{transform: "translateZ(-21px)"}} id="filter2" filterUnits="objectBoundingBox" x="0" y="0" width="100%" height="100%">
                    <feTurbulence style={{transform: "translateZ(21px)"}} id="z-filter" numOctaves="5" seed="5" baseFrequency="0.02 0.02"></feTurbulence>
                    <feDisplacementMap style={{transform: "translateZ(21px)"}} scale="2" in="SourceGraphic"></feDisplacementMap>
                    <animate href="#z-filter" attributeName="baseFrequency" dur="120s" keyTimes="0;0.5;1" values="0.02 0.02;0.04 0.04;0.02 0.02" repeatCount="indefinite"></animate>
                </filter>
            </svg>
        </div>
    );
}

// export default class Home extends Component {
//     render() {
//         return(
//         <div>
//             <div className="about-section-3">
//                 <div style={{color: darkColor}} className="title about-title-3">
//                     Meet the Team
//                 </div>
//                 <div id="gallery-container" className="gallery-container">
//                     <div className="alex team-member">
//                         <div className="team-member-container">
//                             <img id="box" src="/images/lightest-yellow-square.jpg"></img>
//                             <img className="team-member-image" src="/images/alex-transparent.png"></img>
//                             <div className="team-member-hover">
//                                 <div className="sm-orange-circle circle-scale-quick"></div>
//                                 <div className="md-orange-circle circle-scale-delay"></div>
//                                 <div className="lg-orange-circle circle-scale"></div>
//                                 <img className="golgi" src="images/golgi-apparatus.png"></img>
//                                 <img className="sm-golgi" src="images/golgi-apparatus.png"></img>
//                             </div>
//                         </div>                               
//                         <div style={{marginTop: "24px"}} className="team-member-name title-small">Alex Schwartzberg</div>
//                         <div className="team-member-team longCaption">Design</div>
//                     </div>
//                     <div className="ashley team-member">
//                         <div className="team-member-container">
//                             <img id="box" src="/images/lightest-blue-square.jpg"></img>
//                             <img className="team-member-image" src="/images/ashley-transparent.png"></img>
//                             <div className="team-member-hover">
//                                 <div className="blue-circle circle-scale"></div>
//                                 <div className="dark-blue-circle circle-scale-delay "></div>
//                                 <img className="donut" src="/images/cake-donut.png"/>
//                                 <img className="sm-donut" src="/images/cake-donut.png"/>
//                             </div>
//                         </div>                                
//                         <div style={{marginTop: "24px"}} className="team-member-name title-small">Ashley Jiang</div>
//                         <div className="team-member-team longCaption">Marketing {'\u2022'} Design</div>
//                     </div>
//                     <div className="bianca team-member">
//                         <div className="team-member-container">
//                             <img id="box" src="/images/lightest-yellow-square.jpg"></img>
//                             <img className="team-member-image" src="/images/bianca.png"></img>
//                             <div className="team-member-hover">
//                                 {/* <div className="sm-orange-circle circle-scale-quick"></div> */}
//                                 <div className="md-orange-circle circle-scale-front"></div>
//                                 <div className="lg-orange-circle circle-scale"></div>
//                                 <img className="golgi" src="images/golgi-apparatus.png"></img>
//                                 <img className="sm-golgi" src="images/golgi-apparatus.png"></img>
//                             </div>
//                         </div>                                
//                         <div style={{marginTop: "24px"}} className="team-member-name title-small">Bianca Wu</div>
//                         <div className="team-member-team longCaption">Logistics</div>
//                     </div>
//                     <div className="celine team-member">
//                         <div className="team-member-container">
//                             <img id="box" src="/images/lightest-pink-square.jpg"></img>
//                             <img className="team-member-image" src="/images/celine.png"></img>
//                             <div className="team-member-hover">
//                                 <div className="lg-red-circle circle-scale"></div>
//                                 <div className="md-red-circle circle-scale-delay"></div>
//                                 <img className="cool-shape" src="/images/ruffles.png"/>
//                                 <img className="cool-shape-2" src="/images/coolshape1.png"/>
//                             </div>
//                             {/* <div style={{transform: "translateZ(21px)"}} className="cover team-member-hover">
//                                 <img className="cool-shape-2" src="/images/coolshape1.png"/>
//                             </div> */}
//                         </div>                                
//                         <div style={{marginTop: "24px"}} className="team-member-name title-small">Celine Liu</div>
//                         <div className="team-member-team longCaption">Design</div>
//                     </div>
//                     <div className="chloe team-member">
//                         <div className="team-member-container">
//                             <img id="box" src="/images/lightest-pink-square.jpg"></img>
//                             <img className="team-member-image" src="/images/chloe.png"></img>
//                             <div className="team-member-hover">
//                                 <div className="lg-red-circle circle-scale"></div>
//                                 <div className="md-red-circle circle-scale-delay"></div>
//                                 <img className="cool-shape" src="/images/ruffles.png"/>
//                                 <img className="cool-shape-2" src="/images/coolshape1.png"/>
//                             </div>
//                             {/* <div style={{transform: "translateZ(21px)"}} className="cover team-member-hover">
//                                 <img className="cool-shape-2" src="/images/coolshape1.png"/>
//                             </div> */}
//                         </div>                                
//                         <div style={{marginTop: "24px"}} className="team-member-name title-small">Chloe Chow</div>
//                         <div className="team-member-team longCaption">Design</div>
//                     </div>
//                     <div className="christina team-member">
//                         <div className="team-member-container">
//                             <img id="box" src="/images/lightest-pink-square.jpg"></img>
//                             <img className="team-member-image" src="/images/christina.png"></img>
//                             <div className="team-member-hover">
//                                 <div className="lg-red-circle circle-scale"></div>
//                                 <div className="md-red-circle circle-scale-delay"></div>
//                                 <img className="cool-shape" src="/images/ruffles.png"/>
//                                 <img className="cool-shape-2" src="/images/coolshape1.png"/>
//                             </div>
//                             {/* <div style={{transform: "translateZ(21px)"}} className="cover team-member-hover">
//                                 <img className="cool-shape-2" src="/images/coolshape1.png"/>
//                             </div> */}
//                         </div>                                
//                         <div style={{marginTop: "24px"}} className="team-member-name title-small">Christina Cui</div>
//                         <div className="team-member-team longCaption">Logistics</div>
//                     </div>
//                     <div className="connie team-member">
//                         <div className="team-member-container">
//                             <img id="box" src="/images/lightest-green-square.jpg"></img>
//                             <img className="team-member-image" src="/images/connie.png"></img>
//                             <div className="team-member-hover">
//                                 {/* <div className="blue-circle"></div>
//                                 <div className="dark-blue-circle"></div>
//                                 <img className="cool-shape" src="/images/coolshape1.png"/>
//                                 <img className="cool-shape-2" src="/images/coolshape1.png"/> */}
//                                 <div className="blue-circle circle-scale"></div>
//                                 <div className="dark-blue-circle circle-scale-delay"></div>
//                                 <img className="rose" src="/images/rose_1_WP2.png"/>
//                                 <img className="rose2" src="/images/rose-2-WP-saturated.png"/>
//                             </div>
//                         </div>                                
//                         <div style={{marginTop: "24px"}} className="team-member-name title-small">Connie Yoon</div>
//                         <div className="team-member-team longCaption">Marketing</div>
//                     </div>
//                     <div className="emily team-member">
//                         <div className="team-member-container">
//                             <img id="box" src="/images/lightest-green-square.jpg"></img>
//                             <img className="team-member-image" src="/images/emily.png"></img>
//                             <div className="team-member-hover">
//                                 {/* <div className="blue-circle"></div>
//                                 <div className="dark-blue-circle"></div>
//                                 <img className="cool-shape" src="/images/coolshape1.png"/>
//                                 <img className="cool-shape-2" src="/images/coolshape1.png"/> */}
//                                 <div className="blue-circle circle-scale"></div>
//                                 <div className="dark-blue-circle circle-scale-delay"></div>
//                                 <img className="rose" src="/images/rose_1_WP2.png"/>
//                                 <img className="rose2" src="/images/rose-2-WP-saturated.png"/>
//                             </div>
//                         </div>                                
//                         <div style={{marginTop: "24px"}} className="team-member-name title-small">Emily Nguyen</div>
//                         <div className="team-member-team longCaption">Design</div>
//                     </div>
//                     <div className="esther team-member">
//                         <div className="team-member-container">
//                             <img id="box" src="/images/lightest-yellow-square.jpg"></img>
//                             <img className="team-member-image" src="/images/esther.png"></img>
//                             <div className="team-member-hover">
//                                 {/* <div className="sm-orange-circle circle-scale-quick"></div> */}
//                                 <div className="md-orange-circle circle-scale-front"></div>
//                                 <div className="lg-orange-circle circle-scale"></div>
//                                 <img className="golgi" src="images/golgi-apparatus.png"></img>
//                                 <img className="sm-golgi" src="images/golgi-apparatus.png"></img>
//                             </div>
//                         </div>                                
//                         <div style={{marginTop: "24px"}} className="team-member-name title-small">Esther Liu</div>
//                         <div className="team-member-team longCaption">Logistics {'\u2022'} Design</div>
//                     </div>
//                     <div className="evelyn team-member">
//                         <div className="team-member-container">
//                             <img id="box" src="/images/lightest-blue-square.jpg"></img>
//                             <img className="team-member-image" src="/images/evelyn.png"></img>
//                             <div className="team-member-hover">
//                                 <div className="blue-circle circle-scale"></div>
//                                 <div className="dark-blue-circle circle-scale"></div>
//                                 <img className="donut" src="/images/cake-donut.png"/>
//                                 <img className="sm-donut" src="/images/cake-donut.png"/>
//                             </div>
//                         </div>                                
//                         <div style={{marginTop: "24px"}} className="team-member-name title-small">Evelyn Yang</div>
//                         <div className="team-member-team longCaption">Web Dev {'\u2022'} Marketing</div>
//                     </div>
//                     <div className="joyce team-member">
//                         <div className="team-member-container">
//                             <img id="box" src="/images/lightest-pink-square.jpg"></img>
//                             <img className="team-member-image" src="/images/joyce.png"></img>
//                             <div className="team-member-hover">
//                                 <div className="lg-red-circle circle-scale"></div>
//                                 {/* <div className="md-red-circle circle-scale-delay"></div> */}
//                             </div>
//                             <div style={{overflow: "hidden"}} className="team-member-hover">
//                                 <img className="wings" src="/images/ruffles3.png"></img>
//                             </div>
//                         </div>                                
//                         <div style={{marginTop: "24px"}} className="team-member-name title-small">Joyce Tsui</div>
//                         <div className="team-member-team longCaption">Design</div>
//                     </div>
//                     <div className="spencer team-member">
//                         <div className="team-member-container">
//                             <img id="box" src="/images/lightest-green-square.jpg"></img>
//                             <img className="team-member-image" src="/images/spencer.png"></img>
//                             <div className="team-member-hover">
//                                 {/* <div className="blue-circle"></div>
//                                 <div className="dark-blue-circle"></div>
//                                 <img className="cool-shape" src="/images/coolshape1.png"/>
//                                 <img className="cool-shape-2" src="/images/coolshape1.png"/> */}
//                                 <div className="blue-circle circle-scale"></div>
//                                 <div className="dark-blue-circle circle-scale-delay"></div>
//                                 <img className="rose" src="/images/rose_1_WP2.png"/>
//                                 <img className="rose2" src="/images/rose-2-WP-saturated.png"/>
//                             </div>
//                         </div>                                
//                         <div style={{marginTop: "24px"}} className="team-member-name title-small">Spencer Zou</div>
//                         <div className="team-member-team longCaption">Web Dev {'\u2022'} Logistics</div>
//                     </div>
//                     <div className="van team-member">
//                         <div className="team-member-container">
//                             <img id="box" src="/images/lightest-yellow-square.jpg"></img>
//                             <img className="team-member-image" src="/images/van.png"></img>
//                             <div className="team-member-hover">
//                                 {/* <div className="sm-orange-circle circle-scale-quick"></div> */}
//                                 <div className="md-orange-circle circle-scale-delay"></div>
//                                 <div className="lg-orange-circle circle-scale"></div>
//                                 <img className="golgi" src="images/golgi-apparatus.png"></img>
//                                 <img className="sm-golgi" src="images/golgi-apparatus.png"></img>
//                             </div>
//                         </div>                                
//                         <div style={{marginTop: "24px"}} className="team-member-name title-small">Van Vo</div>
//                         <div className="team-member-team longCaption">Design</div>
//                     </div>
//                     <div className="fox team-member">
//                         <div className="team-member-container">
//                             <img id="box" src="/images/lightest-yellow-square.jpg"></img>
//                             <img className="team-member-image" src="/images/Fox-Headshot.png"></img>
//                             <div className="team-member-hover">
//                                 {/* <div className="sm-orange-circle circle-scale-quick"></div> */}
//                                 <div className="md-orange-circle circle-scale-delay"></div>
//                                 <div className="lg-orange-circle circle-scale"></div>
//                                 <img className="golgi" src="images/golgi-apparatus.png"></img>
//                                 <img className="sm-golgi" src="images/golgi-apparatus.png"></img>
//                             </div>
//                         </div>                                
//                         <div style={{marginTop: "24px"}} className="team-member-name title-small">Finn the Fox</div>
//                         <div className="team-member-team longCaption">Team Captain</div>
//                     </div>
//                 </div>
//             </div>
//             {/* unused */}
//             {/* <div className="spencer team-member">
//                 <div className="team-member-container">
//                     <img id="box" src="/images/light-green-square.jpg"></img>
//                     <img className="team-member-image" src="/images/spencer.png"></img>
//                     <div className="team-member-hover">
//                         <div className="blue-circle"></div>
//                         <div className="dark-blue-circle"></div>
//                         <svg className="color-smoke" preserveAspectRatio="xMidYMid slice"  viewBox="0 0 100 123">
//                             <filter width="100%" height="100%" x="0%" y="0%" id="noise">
//                             <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
//                                 <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
//                             </feTurbulence>
//                             <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
//                                                                 xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
//                             </filter>
//                             <foreignObject width="100%" height="100%">
//                             <img src="/images/cloud2.png" width="100%" height="auto" x="0" y="0" style={{filter: "url(#noise)"}}/>
//                             </foreignObject>
//                         </svg>
//                         <svg className="color-smoke-2" preserveAspectRatio="xMidYMid slice"  viewBox="0 0 100 115">
//                             <filter width="100%" height="100%" x="0%" y="0%" id="noise">
//                             <feTurbulence type="turbulence" baseFrequency="0.0547184" id="turbulence" numOctaves="1" result="turbulence" seed="5">
//                                 <animate id="noiseAnimate" attributeName="baseFrequency" values="0;.1;0,0" from="0" to="100" dur="10s" repeatCount="indefinite"></animate>
//                             </feTurbulence>
//                             <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="1"
//                                                                 xChannelSelector="R" yChannelSelector="R"></feDisplacementMap>
//                             </filter>
//                             <foreignObject width="100%" height="100%">
//                             <img src="/images/cloud7.png" width="100%" height="auto" x="0" y="0" style={{filter: "url(#noise)"}}/>
//                             </foreignObject>
//                         </svg>
//                     </div>
//                 </div>                                
//                 <div style={{marginTop: "24px"}} className="team-member-name title-small">Spencer Zou</div>
//                 <div className="team-member-team longCaption">Web Development</div>
//             </div> */}
//             <svg>
//                 <filter id="filter" x="0" y="0" width="100%" height="100%">
//                     <feTurbulence id="sea-filter" numOctaves="3" seed="5" baseFrequency="0.02 0.05"></feTurbulence>
//                     <feDisplacementMap scale="4" in="SourceGraphic"></feDisplacementMap>
//                     <animate href="#sea-filter" attributeName="baseFrequency" dur="60s" keyTimes="0;0.5;1" values="0.02 0.06;0.04 0.08;0.02 0.06" repeatCount="indefinite"></animate>
//                 </filter>
                
//             </svg>
//             <svg style={{transform: "translateZ(21px)"}} class="filter" xlmns="http://www.w3.org/2000/svg" version="1.1">
//                 <filter style={{transform: "translateZ(-21px)"}} id="filter2" filterUnits="objectBoundingBox" x="0" y="0" width="100%" height="100%">
//                     <feTurbulence style={{transform: "translateZ(21px)"}} id="z-filter" numOctaves="5" seed="5" baseFrequency="0.02 0.02"></feTurbulence>
//                     <feDisplacementMap style={{transform: "translateZ(21px)"}} scale="2" in="SourceGraphic"></feDisplacementMap>
//                     <animate href="#z-filter" attributeName="baseFrequency" dur="120s" keyTimes="0;0.5;1" values="0.02 0.02;0.04 0.04;0.02 0.02" repeatCount="indefinite"></animate>
//                 </filter>
//             </svg>
//         </div>
//         )
//     }
// }