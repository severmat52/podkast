import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import './AudioPlayer.css';
import { actionCreators } from '../../store/AudioPlayer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AudioButton from '../Core/AudioButton';

class AudioPlayer extends Component{
    render(){
        this.props.reloadAudio();
        return this.props.collapsed 
            ? this.renderCollapsed()
            : this.renderAudioPlayer();
    }

    componentDidMount(){
        this.addAudioEventListeners(this.props.audio);
    }

    componentDidUpdate(prevProps){
        this.addAudioEventListeners(this.props.audio);
    }

    addAudioEventListeners(audio){
        if(audio){
            audio.loadedmetadata = () => this.setState({});
            audio.ontimeupdate = () => this.setState({});
        }
    }

    renderAudioPlayer(){
        return(
            <div className='audio-player'>
             <button className='collapseOrOpenButton' onClick={this.props.collapseAudioPlayer}>
                <Glyphicon glyph='chevron-up' />
            </button>
            <div id='audio-player-grid'>
               <div className='podcast-player-controls-grid'>
                    <div className='podcast-player-controls-grid-item' />
                  <div className='podcast-player-controls-grid-item'>
                        <AudioButton buttonStyle={controlButtonStyle} glyphicon='fast-backward' />
                 </div>
                     <div className='podcast-player-controls-grid-item'>
                        {this.renderPlayOrPause()}
                   </div>
                    <div className='podcast-player-controls-grid-item'>
                        <AudioButton buttonStyle={controlButtonStyle} glyphicon='fast-forward' />
                    </div>
                </div>
                <div id='audioSlider'>
                    <label>{this.getFormattedMinutesAndSeconds(this.props.audio.currentTime)}</label>
                    <input type='range'
                           value={this.props.audio.currentTime}
                           onChange={e => this.props.seekTo(this.props.audio, e.target.value)}
                           max={this.props.audio.duration}/>
                    <label>{this.getFormattedMinutesAndSeconds(this.props.audio.duration)}</label>
                </div>
            </div>
            </div>
        );
    }

    getFormattedMinutesAndSeconds(time){
        const minutes = Math.round(time / 60);
        const seconds = Math.round(time % 60);
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutes}:${formattedSeconds}`;
    }


    renderCollapsed(){
        return  (<button id='audio-player-button-collapsed' className='collapseOrOpenButton' onClick={this.props.collapseAudioPlayer}>
                <Glyphicon glyph='chevron-up' />
            </button>);
    }

    renderPlayOrPause(){
        if(!this.props.playing){
            return <AudioButton buttonStyle={controlButtonStyle} glyphicon='play' onClick={() => this.props.playAudioPlayer(this.props.audio)} />
        }
        return <AudioButton buttonStyle={controlButtonStyle} glyphicon='pause' onClick={() => this.props.pauseAudioPlayer(this.props.audio)} />;
    }
}


export default connect(
    state => state.audioPlayer,
    dispatch => bindActionCreators(actionCreators, dispatch)
  )(AudioPlayer);

  const controlButtonStyle = {
      height: '45px',
      width: '45px'
  }