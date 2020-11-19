import React, { Component } from 'react';

export default class WorkshopItem extends Component {
      
    constructor(props){
        super(props);

        this.state = {
            slidesLink: this.props.slidesLink,
            vidLink: this.props.vidLink,
            extraLink: this.props.extraLink,
            imgURL: this.props.imgURL,
            slidesCaption: this.props.noSlides ? "-" : this.props.slidesCaption || "Slide Deck",
            videoCaption: this.props.videoCaption || "Event Recording",
            extraCaption: this.props.extraCaption,
            alt: this.props.alt
        }
    }

    render() {

      let image = (
          <a target="_blank" href={this.state.slidesLink}>
              <img class="grid-item-img" alt={this.state.alt} src={this.state.imgURL}/>
          </a>
      )

      let slides;
      if(this.props.extra){
          slides = (
            <div className="grid-caption-inline">
                  <a target="_blank" href={this.state.slidesLink} class="grid-caption">{this.state.slidesCaption}</a>
                  <span className="grid-caption">&nbsp;+&nbsp;</span>
                  <a target="_blank" href={this.state.extraLink} target="_blank" class="grid-caption">{this.state.extraCaption}</a>
            </div>
          )
      } else{
          slides = (
              <div className="grid-caption-inline">
                  <a target="_blank" href={this.state.slidesLink} class="grid-caption">{this.state.slidesCaption}</a>
              </div>
          );
      } 

      let video = (
          <a target="_blank" href={this.state.vidLink} class="grid-caption">{this.state.videoCaption}</a>
      );

      let block;
      if(this.props.noSlides){
          block = (
              <div class="grid-item-container">
                  {image}
                  {video}
                  {slides}
              </div>
          );
      } else{
          block = (
              <div class="grid-item-container">
                  {image}
                  {slides}
                  {video}
              </div>
          );
      }

      return (
          <div class="grid-item">
              {block}
          </div>
      );
    }
}