import React, { Component } from 'react';
import { actionCreators } from '../store/Search';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GridLoader } from 'react-spinners';
import FeedItem from './Feed/FeedItem';

class PodcastFeed extends Component{
    render(){
        return(
            <div>
                { this.props.loadingFeed ? this.renderLoadingSpinner() : this.renderFeedItems() }
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
            color={'#333333'}
            loading={true} />
        </div>
      }
} 

export default connect(
    state => state.search,
    dispatch => bindActionCreators(actionCreators, dispatch)
  )(PodcastFeed);