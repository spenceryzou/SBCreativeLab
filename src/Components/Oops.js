import React, { Component } from 'react'
import { Link } from "react-router-dom";

let backgroundColor="#F7FDF4";
let darkColor="#356A69";

export default class Oops extends Component {

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
                            <Link to="/">(take me home pls)</Link>
                        </div>
                    </div>
                </div>    
            </div>
            
        )
    }
}
