import React, { Component } from 'react';
import Div100vh from 'react-div-100vh';

export default class Home extends Component {
  render() {
    return (
      <div className="menu" id="menu">
        <div className="menu-container">
          {/* <div className="bars">
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                  </div> */}
          <div className="menu-text">
            <div>
              <a href="/about" data-content="about" className="menu-link">
                about
                        </a>
            </div>
            <div>
              <a href="/resources" data-content="resources" className="menu-link">
                resources
                        </a>
            </div>
            <div>
              <a href="/events" data-content="events" className="menu-link">
                events
                        </a>
            </div>
            <div>
              <a href="https://designathon.sbcreativelab.com" data-content="designathon" className="menu-link">
                designathon
                        </a>
            </div>
          </div>
          <div className="menu-socials">
            <a target="_blank" href="https://www.facebook.com/sbcreativelab/">
              <div className="social-container">
                <i class="fab fa-lg fa-facebook"></i>
                <span class="social-background">
                  <span class="social-background-inner"></span>
                </span>
              </div>
            </a>
            <a target="_blank" href="https://www.instagram.com/sbcreativelab/">
              <div className="social-container">
                <i class="fab fa-lg fa-instagram"></i>
                <span class="social-background">
                  <span class="social-background-inner"></span>
                </span>
              </div>
            </a>
            <a target="_blank" href="https://www.linkedin.com/company/sbcreativelab/">
              <div className="social-container">
                <i class="fab fa-lg fa-linkedin"></i>
                <span class="social-background">
                  <span class="social-background-inner"></span>
                </span>
              </div>
            </a>
            <a target="_blank" href="https://rebrand.ly/sbcl-slack">
              <div className="social-container">
                <i class="fab fa-lg fa-slack"></i>
                <span class="social-background">
                  <span class="social-background-inner"></span>
                </span>
              </div>
            </a>
            <a target="_blank" href="https://discord.gg/fc8Rrn7VdV">
              <div className="social-container">
                <i class="fab fa-lg fa-discord"></i>
                <span class="social-background">
                  <span class="social-background-inner"></span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
