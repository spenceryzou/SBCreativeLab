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
                        <a href="/oops" data-content="resources" className="menu-link">
                        resources
                        </a>
                      </div>
                      <div>
                        <a href="/oops" data-content="events" className="menu-link">
                        events
                        </a>
                      </div>
                      <div>
                        <a href="/oops" data-content="suggestions" className="menu-link">
                        suggestions
                        </a>
                      </div>
                  </div>
                  <div className="menu-socials">
                      <a href="https://www.facebook.com/sbcreativelab/">
                        <div className="social-container">
                          <i class="fa fa-lg fa-facebook"></i>
                            <span class="social-background">
                              <span class="social-background-inner"></span>
                            </span>
                        </div>
                      </a>
                      <a href="https://www.instagram.com/sbcreativelab/">
                        <div className="social-container">
                          <i class="fa fa-lg fa-instagram"></i>
                            <span class="social-background">
                              <span class="social-background-inner"></span>
                            </span>
                        </div>
                      </a>
                      <a href="https://www.linkedin.com/company/sbcreativelab/">
                        <div className="social-container">
                          <i class="fa fa-lg fa-linkedin"></i>
                            <span class="social-background">
                              <span class="social-background-inner"></span>
                            </span>
                        </div>
                      </a>
                      <a href="https://sbcreativelab.slack.com/">
                        <div className="social-container">
                          <i class="fa fa-lg fa-slack"></i>
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
