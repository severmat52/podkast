import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import './AudioPlayer.css';
import { connect } from 'react-redux';
import AudioButton from '../Core/AudioButton';
import { Howl, Howler } from 'howler';

class AudioPlayer extends Component{
    constructor(props){
        super(props);
        this.podcastUrl = props.selectedPodcastEpisode;
        this.sound = undefined;
        this.state = {
            playing: false,
            collapsed: false
        };
        Howler.volume(1);

    }

    render(){
        if(this.props.selectedPodcastEpisode !== undefined && this.podcastUrl !== this.props.selectedPodcastEpisode){
            this.podcastUrl = this.props.selectedPodcastEpisode;
            this.sound = new Howl({src: [this.podcastUrl]});
            this.sound.load();
            let self = this;
            this.sound.once('load', () => {
                self.sound.play();
                console.log('playing');
            });
            this.sound.play();
            this.setState({playing: true});
        }

        return this.state.collapsed 
            ? this.renderCollapsed()
            : this.renderAudioPlayer();
    }

    renderAudioPlayer(){
        return(
            <div className='audio-player'>
             <button className='collapseOrOpenButton' onClick={() => this.collapseOrOpen()}>
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
                    <label>{this.getFormattedMinutesAndSeconds(this.sound !== undefined ? this.sound.seek() : 0)}</label>
                    <input type='range'
                           value={this.sound !== undefined ? this.sound.seek() : 0}
                           onChange={e => console.log('on changed2')} //this.props.seekTo(this.props.audio, e.target.value)}
                           max={this.sound !== undefined ? this.sound.duration : 0}/>
                    <label>{this.getFormattedMinutesAndSeconds(this.sound !== undefined ? this.sound.duration : 0)}</label>
                </div>
            </div>
            </div>
        );
    }

    getFormattedMinutesAndSeconds(time){
        if(this.sound === undefined) return;

        const minutes = Math.round(time / 60);
        const seconds = Math.round(time % 60);
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutes}:${formattedSeconds}`;
    }


    renderCollapsed(){
        return  (<button id='audio-player-button-collapsed' className='collapseOrOpenButton' onClick={() => this.collapseOrOpen()}>
                <Glyphicon glyph='chevron-up' />
            </button>);
    }

    renderPlayOrPause(){
        if(!this.state.playing){
            return <AudioButton buttonStyle={controlButtonStyle} glyphicon='play' onClick={() => this.play()} />
        }
        return <AudioButton buttonStyle={controlButtonStyle} glyphicon='pause' onClick={() => this.pause()} />;
    }

    play(){
        if(this.sound !== undefined){
            this.sound.play();
        }
    }

    pause(){
        if(this.sound !== undefined){
            this.sound.pause();
        }
    }

    collapseOrOpen(){
        this.setState({collapsed: !this.state.collapsed});
    }
}


export default connect(
    state => state.search
  )(AudioPlayer);

  const controlButtonStyle = {
      height: '45px',
      width: '45px'
  }