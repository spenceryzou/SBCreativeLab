import React, { Component } from 'react';

export default class MerchItem extends Component {

    constructor(props){
        super(props);

        this.state = {
            imgURL: this.props.imgURL,
            alt: this.props.alt,
            caption: this.props.caption || "Merch Item",
            purchaseLink: this.props.link,
        }
    }

    render() {

        let image = (
            <img class="grid-item-img" alt={this.state.alt} src={this.state.imgURL}/>
        )

        let caption = (
            <div class="grid-caption" style={{fontSize: "1.5rem"}}>{this.state.caption}</div>
        );

        let block;
        block = (
            <div class="grid-item-container">
                {image}
                {caption}
            </div>
        );

        return (
            <div class="grid-item" style={{paddingLeft: 0, paddingRight: 30}}>
                {block}
            </div>
        );
    }
}
