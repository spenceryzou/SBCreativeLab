import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';
 
export default class Home extends Component {
    render() {
        let backgroundColor="#F7FDF4"
        let primaryColor="#1BB994"
        let darkColor="#356A69"
        return (
            <div style={{backgroundColor: backgroundColor}} className="content">
                <div className="content-body">         
                    <div className="content-body-text">
                        <div className="center-container">            
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
            </div>
        )
    }
}
