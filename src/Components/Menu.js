import React, { Component } from 'react'
const facebook = "./images/facebook.svg"
const instagram = "./images/instagram.svg"
const linkedin = "./images/linkedin.svg"
const youtube = "./images/youtube.svg"
const close = "./images/Hamburger Menu Close.svg"
 
export default class Home extends Component {

    render() {
        let closeMenu = this.props.closeMenu;

        return (
              <div className="menu" id="menu">
                <div className="menu-container">
                  <div className="bars">
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                    <div className="column"></div>
                  </div>
                  <div className="menu-text">
                      <div>
                        <a href="/oops" data-content="about" className="menu-link">
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
                      <a href="/oops">
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
