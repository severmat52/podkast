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
            <div className='podcast-player-controls-grid'>
                <div className='podcast-player-controls-grid-item'>
                    <button id='rewindButton'>
                        Rewind
                    </button>
                </div>
                <div className='podcast-player-controls-grid-item'>
                {this.renderPlayOrPause()}
                </div>
                <div className='podcast-player-controls-grid-item'>
                    <button id='fastForwardButton'>
                        Forward
                    </button>
                </div>
            </div>
            </figure>
            </div>
        );
    }

    renderCollapsed(){
        return  (<button className='audio-player-button-collapsed' onClick={this.props.collapseAudioPlayer}>
                <Glyphicon glyph='chevron-up' />
            </button>);
    }

    renderPlayOrPause(){
        if(!this.props.playing){
            return <button id='playButton' classButton='playOrPauseButton' onClick={() => this.props.playAudioPlayer(this.props.audio)}>
                Play
            </button>;
        }
        return <button id='pauseButton' classButton='playOrPauseButton' onClick={() => this.props.pauseAudioPlayer(this.props.audio)}>
            Pause
        </button>; 
    }
}


export default connect(
    state => state.audioPlayer,
    dispatch => bindActionCreators(actionCreators, dispatch)
  )(AudioPlayer);