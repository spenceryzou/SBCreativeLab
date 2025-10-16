import React, { Component } from "react";
import { ReactComponent as Logo } from "./logo.svg";
import { useMediaQuery } from "react-responsive";
import Menu from "./Menu";
import ReactGA from "react-ga";

// const hexRgb = require('hex-rgb');
let backgroundColor = "#faf2e6";
// let primaryColor = "#1BB994";
let darkColor = "#356A69";

export class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wave: "",
      menuOpen: false,
    };
  }
  handleMenu() {
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen,
    }));
  }
  initializeReactGA() {
    ReactGA.initialize("UA-178117149-1");
    ReactGA.pageview("/events");
  }

  componentDidUpdate() {
    let menu = document.getElementById("menu");
    if (this.state.menuOpen === true) {
      menu.classList.add("drop");
      document.body.classList.add("no-scroll");
      document.body.addEventListener("touchmove", function (e) {
        e.preventDefault();
      });
    } else if (this.state.menuOpen === false) {
      menu.classList.remove("drop");
      console.log(menu.classList);
      document.body.classList.remove("no-scroll");
      document.body.removeEventListener("touchmove", function (e) {
        e.preventDefault();
      });
    }
  }

  componentDidMount() {
    var checkbox = document.querySelector("input[name=checkbox]");
    checkbox.addEventListener("change", this.handleMenu.bind(this));

    this.initializeReactGA();
  }

  render() {
    return (
      <div style={{ backgroundColor: backgroundColor }} className="content">
        <Menu />
        <div className="header">
          <div className="header-left">
            <div className="logo-wrapper">
              <a href="/">
                <Logo width="100%" display="block" height="auto" />
              </a>
            </div>
          </div>
          <div className="header-right">
            <div className="hamburger-circle">
              <div className="menu1 cross menu--1">
                <label>
                  <input name="checkbox" type="checkbox" />
                  <svg
                    className="menuSVG"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 80 80"
                  >
                    <circle cx="40" cy="40" r="30" />
                    <path
                      className="line--1"
                      d="M-10,30h62c13,0,6,28-4,18L25,25"
                    />
                    <path
                      className="line--1"
                      d="M-10,30h62c13,0,6,28-4,18L25,25"
                    />
                    <path className="line--2" d="M-10,40h70" />
                    <path className="line--2" d="M-10,40h70" />
                    <path
                      className="line--3"
                      d="M-10,50h62c13,0,6-28-4-18L25,55"
                    />
                    <path
                      className="line--3"
                      d="M-10,50h62c13,0,6-28-4-18L25,55"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingBottom: "3%" }} className="events">
          <div
            style={{ color: darkColor, marginBottom: "1rem" }}
            className="title about-title-2"
          >
            Events
          </div>
          <div className="calendar-months-container">
            <img
              className="calendar-month-image"
              alt="Calendar of 2025 SBCL events"
              src={`/images/events/2025-may.svg`}
            />
            <img
              className="calendar-month-image"
              alt="Calendar of 2025 SBCL events"
              src={`/images/events/2025-april.svg`}
            />
            <img
              className="calendar-month-image"
              alt="Calendar of 2025 SBCL events"
              src={`/images/events/2025-march.svg`}
            />
            <img
              className="calendar-month-image"
              alt="Calendar of 2025 SBCL events"
              src={`/images/events/2025-february.svg`}
            />
            <img
              className="calendar-month-image"
              alt="Calendar of 2025 SBCL events"
              src={`/images/events/2025-january.svg`}
            />
          </div>
        </div>
      </div>
    );
  }
}

export const withMediaQuery =
  (queries = []) =>
  (Component) =>
  (props) => {
    const mediaProps = {};
    Object.entries(queries).forEach((q) => {
      mediaProps[q[0]] = useMediaQuery({ query: q[1] });
    });
    return <Component {...mediaProps} {...props} />;
  };

export default withMediaQuery({ isMobile: "(max-width:1000px)" })(Events);
