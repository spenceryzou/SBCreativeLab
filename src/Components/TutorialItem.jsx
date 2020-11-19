import React, { Component } from 'react';

export default class TutorialItem extends Component {
      
    constructor(props){
        super(props);

        this.state = {
            link: this.props.link,
            vidLink: this.props.vidLink,
            extraLink: this.props.extraLink,
            imgURL: this.props.imgURL,
            caption: this.props.noSlides ? "-" : this.props.caption || "Tutorial Resource",
            videoCaption: this.props.videoCaption || "Event Recording",
            extraCaption: this.props.extraCaption,
            alt: this.props.alt
        }
    }

    render() {

      let image = (
          <a target="_blank" href={this.state.link}>
              <img class="grid-item-img" alt={this.state.alt} src={this.state.imgURL}/>
          </a>
      )

      let caption = (
          <a target="_blank" class="grid-caption" href={this.state.link}>
              {this.state.caption}
          </a>
      )

      let block = (
          <div class="grid-item-container">
              {image}
              {caption}
          </div>
      );

      return (
          <div class="grid-item">
              {block}
          </div>
      );
    }
}