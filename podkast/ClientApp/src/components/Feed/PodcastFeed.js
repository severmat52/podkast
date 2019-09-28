import React, { Component } from 'react';
import { actionCreators } from '../../store/Search';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GridLoader } from 'react-spinners';
import FeedItem from './FeedItem';
import './PodcastFeed.css';

class PodcastFeed extends Component{
    render(){
        return(
            <div>
                <div className='podcast-details'>
                {this.renderPodcastDetails()}
                </div>
                <div className='feed-list'>
                    { this.props.loadingFeed ? this.renderLoadingSpinner() : this.renderFeedItems() }
                </div>
            </div>
        );
    }

    renderPodcastDetails(){
        const podcast = this.props.selectedPodcast;
        return <div className='podcast-details-container'>
                    <div className='podcast-details-grid-item'>
                        <img src={podcast.artworkUrl100}  />
                    </div>
                    <div className='podcast-details-grid-item'>
            <ul>
                <li> Title: {podcast.artistName} </li>
                <li> Episode Count: {podcast.trackCount} </li>
            </ul>
        </div>
            </div>;
    }

    renderFeedItems(){
            if(this.props.feed !== undefined){
                const items = this.props.feed.items;
                const mappedItems = items.map(i => <FeedItem item={i}
                                                             onPlay={() => this.props.selectedPlayEpisode(i.link)} />);
                return <ul>
                    {mappedItems}
                </ul>;
            }
    }

    renderLoadingSpinner(){
        return <div className='loading-podcasts' 
                    style={{display:'flex', justifyContent: 'center', alignItems:'center', marginTop: '30%'}}>
          <GridLoader 
            sizeUnit={'px'}
            size={50}
            color={'#375a7f'}
            loading={true} />
        </div>
      }
} 

export default connect(
    state => state.search,
    dispatch => bindActionCreators(actionCreators, dispatch)
  )(PodcastFeed);