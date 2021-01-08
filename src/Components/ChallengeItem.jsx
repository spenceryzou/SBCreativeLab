import React, { Component } from 'react';
import CircleType from 'circletype';

export default class ChallengeItem extends Component {
      
    constructor(props){
        super(props);

        this.state = {
            type: this.props.type,
            imgURL: this.props.imgURL,
            title: this.props.title,
            caption: this.props.caption,
            alt: this.props.alt,
        }
    }
    componentDidMount(){
        var circleType = new CircleType(document.getElementById(this.props.type)).radius(70);
    }

    render() {

      let image = (
        <img src={this.props.imgURL}/>
      )

      return (
          <div className="row d-flex align-items-center mb-5 pb-4">
              <div className="d-flex col-md-3 offset-md-1 justify-content-center align-items-center">
                <a target="_blank" href={ this.props.type === "Illustration" ? "https://www.notion.so/Editorial-Illustration-Challenge-204f2e627b7c4178a3ea0d75cddb83ee" : "https://www.notion.so/Playlist-Cover-Design-Challenge-e7504148e300435684e1c1dfc3fa264d"} className={`circle-container ${this.props.type}`}>
                    <div className="reverse-rotate">
                        <div className="rotate">
<<<<<<< HEAD
                            <div className="mono" id={this.props.type}>&nbsp;{this.props.type} · {this.props.type} · {this.props.type} · {this.props.type} ·</div>
=======
                            <div className="mono" id={this.props.type}>{' '}{this.props.type} · {this.props.type} · {this.props.type} · {this.props.type} · </div>
>>>>>>> 921effddf1d36e4e3b8e0f69e914e837959d65c3
                        </div>
                    </div>
                    {image}
                </a>
              </div>
              <div className="col-12 col-sm-8">
                <div className="h2">{this.props.title}</div>
                <div className="b1 mb-3">{this.props.caption}</div>
                <a target="_blank" href={ this.props.type === "Illustration" ? "https://www.notion.so/Editorial-Illustration-Challenge-204f2e627b7c4178a3ea0d75cddb83ee" : "https://www.notion.so/Playlist-Cover-Design-Challenge-e7504148e300435684e1c1dfc3fa264d"} className="button-small">More Details</a>
              </div>
          </div>
      );
    }
}