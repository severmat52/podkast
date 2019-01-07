import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import './AudioPlayer.css';

class AudioPlayer extends Component{
    constructor(props){
        super(props);
        this.state = { collapsed: false }
    }
    render(){
        return this.state.collapsed 
            ? this.renderCollapsed()
            : this.renderAudioPlayer();
    }

    renderAudioPlayer(){
        return(
            <div className='audio-player'>
            <figure>
            <button onClick={() => this.setState({collapsed: !this.state.collapsed})}>
                <Glyphicon glyph='chevron-up' />
            </button>
            </figure>
            </div>
        );
    }

    renderCollapsed(){
        return  (<button className='audio-player-button-collapsed' onClick={() => this.setState({collapsed: !this.state.collapsed})}>
                <Glyphicon glyph='chevron-up' />
            </button>);
    }
}


export default AudioPlayer;