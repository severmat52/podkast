import React from 'react';
import './PodcastResult.css';
import { Link } from 'react-router-dom';

const PodcastResult = ({podcast, requestGetFeed}) => (
    <li>
        <Link to={'/episodes'}>
          <div className='podcast-result-container'
               onClick={() => requestGetFeed(podcast)}>
          <div className='grid-container'>
                <div className='grid-item'>
                    <img src={podcast.artworkUrl100} alt='podcastImage' />
                </div>
                <div className='grid-item'>
                    <div style={{fontWeight:"bold"}}>
                         {podcast.collectionName}
                    </div>
                    <div>
                        {podcast.artistName}
                    </div>
                </div>
           </div>
          </div>
        </Link>
    </li>
);

export default PodcastResult;