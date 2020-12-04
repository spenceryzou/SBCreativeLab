import React, { Component } from 'react';

export default class EventItem extends Component {
      
    constructor(props){
        super(props);

        this.state = {
            link: this.props.link,
            imgURL: this.props.imgURL,
            title: this.props.title,
            date: this.props.date,
            alt: this.props.alt,
            alignRight: this.props.alignRight || false
        }
    }

    render() {

      let image = (
          <a target="_blank" href={this.state.link}>
              <img class="event-card-img" alt={this.state.alt} src={this.state.imgURL}/>
          </a>
      )

      let text = (
        <div className="event-text">
            <div className="event-title-container">
                <a target="_blank" href={this.state.link} className="event-title icon-title title-small color-black">
                    {this.state.title}
                </a>
                <div className="subtitle-med color-black event-date">
                    {this.state.date}
                </div>
            </div>
            <div className="event-subtitle-container">
                <a target="_blank" href={this.state.link} className="event-subtitle subtitle-med color-black">
                    LEARN MORE
                </a>
            </div>
        </div>
          
      )

      let block = (
              <div className={this.state.alignRight? "event-card-right" : "event-card"}>
                  {image}
                  {text}
              </div>
      );

      return (
          <div style={{paddingTop: "2rem"}} className="event-row">
              {block}
          </div>
      );
    }
}