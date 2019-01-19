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
             <button onClick={this.props.collapseAudioPlayer}>
                <Glyphicon glyph='chevron-up' />
            </button>
            <div id='audio-player-grid'>
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
                <div id='audioSlider'>
                    <label>{this.props.audio.played.length}</label>
                    <input type='range' 
                            onChange={e => this.props.seekTo(this.props.audio, e.target.value)}
                           max={this.getFormattedMinutesAndSeconds(this.props.audio.duration)}/>
                    <label>{this.getFormattedMinutesAndSeconds(this.props.audio.duration)}</label>
                </div>
            </div>
            </div>
        );
    }

    getFormattedMinutesAndSeconds(time){
        const minutes = Math.round(time / 60);
        const seconds = Math.round(time % 60);
        return `${minutes}:${seconds}`;
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