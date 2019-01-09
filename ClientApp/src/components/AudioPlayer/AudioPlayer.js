import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import './AudioPlayer.css';
import { actionCreators } from '../../store/AudioPlayer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AudioPlayer extends Component{
    
    render(){
        return this.props.collapsed 
            ? this.renderCollapsed()
            : this.renderAudioPlayer();
    }

    renderAudioPlayer(){
        return(
            <div className='audio-player'>
            <figure>
            <button onClick={this.props.collapseAudioPlayer}>
                <Glyphicon glyph='chevron-up' />
            </button>

            </figure>
            </div>
        );
    }

    renderCollapsed(){
        return  (<button className='audio-player-button-collapsed' onClick={this.props.collapseAudioPlayer}>
                <Glyphicon glyph='chevron-up' />
            </button>);
    }
}


export default connect(
    state => state.audioPlayer,
    dispatch => bindActionCreators(actionCreators, dispatch)
  )(AudioPlayer);