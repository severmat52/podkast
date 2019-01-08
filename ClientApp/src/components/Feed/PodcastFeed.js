import React, { Component } from 'react';
import { actionCreators } from '../../store/Search';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GridLoader } from 'react-spinners';
import FeedItem from './FeedItem';

class PodcastFeed extends Component{
    render(){
        const podcast = this.props.selectedPodcast;
        return(
            <div>
                <div>
                    <img src={podcast.artworkUrl100}  />
                </div>
                            <div>
                { this.props.loadingFeed ? this.renderLoadingSpinner() : this.renderFeedItems() }
            </div>
            </div>
        );
    }

    renderFeedItems(){
            if(this.props.feed !== undefined){
                const items = this.props.feed.items;
                const mappedItems = items.map(i => <FeedItem item={i} />);
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