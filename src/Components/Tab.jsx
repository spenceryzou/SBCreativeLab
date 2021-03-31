import React, { Component } from 'react'
import { Link, Route, Switch } from "react-router-dom";
import {HashLink} from 'react-router-hash-link'

export default class Tab extends Component {
    addStyling = () => {
        if(this.props.tab.id === this.props.activeTab){
            return {color: '#FBA5B3'}
        }
        else{
            return {color: 'black'}
        }
    }
    render() {
        return (
            <HashLink smooth to={`/designathon#${this.props.tab.title}`} className ='tab' style={this.addStyling()} onClick={this.props.changeTab}>{this.props.tab.title}</HashLink>
        )
    }
}
