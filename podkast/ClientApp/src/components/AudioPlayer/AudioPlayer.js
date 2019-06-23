import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import './AudioPlayer.css';
import { actionCreators } from '../../store/AudioPlayer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AudioButton from '../Core/AudioButton';

class AudioPlayer extends Component{
    render(){
        if(this.props.audioPlayer.episode !== this.props.search.selectedEpisode){
            this.props.playEpisode(this.props.search.selectedEpisode);
        }
        
        return this.props.audioPlayer.collapsed 
            ? this.renderCollapsed()
            : this.renderAudioPlayer();
    }

    componentDidMount(){
        this.addAudioEventListeners(this.props.audioPlayer.audio);
    }

    componentDidUpdate(prevProps){
        this.addAudioEventListeners(this.props.audioPlayer.audio);
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
                    <label>{this.getFormattedMinutesAndSeconds(this.props.audioPlayer.audio.currentTime)}</label>
                    <input type='range'
                           value={this.props.audioPlayer.audio.currentTime}
                           onChange={e => this.props.seekTo(this.props.audioPlayer.audio, e.target.value)}
                           max={this.props.audioPlayer.audio.duration}/>
                    <label>{this.getFormattedMinutesAndSeconds(this.props.audioPlayer.audio.duration)}</label>
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
        if(!this.props.audioPlayer.playing){
            return <AudioButton buttonStyle={controlButtonStyle} glyphicon='play' onClick={() => this.props.playAudioPlayer(this.props.audioPlayer.audio)} />
        }
        return <AudioButton buttonStyle={controlButtonStyle} glyphicon='pause' onClick={() => this.props.pauseAudioPlayer(this.props.audioPlayer.audio)} />;
    }
}


export default connect(
    state => state,
    dispatch => bindActionCreators(actionCreators, dispatch)
  )(AudioPlayer);

  const controlButtonStyle = {
      height: '45px',
      width: '45px'
  }