import React from 'react';
import PropTypes from 'prop-types';
import './PodcastResult.css';

const PodcastResult = ({podcast}) => (
    <li>
           <div className='grid-container'>
                <div className='grid-item'>
                    <img src={podcast.artworkUrl100} />
                </div>
                <div className='grid-item'>
                    <div>
                         {podcast.collectionName}
                    </div>
                    <div>
                        {podcast.artistName}
                    </div>
                </div>
           </div>
           
    </li>
);

PodcastResult.PropTypes = {
    podcast: PropTypes.shape({
        artistId: PropTypes.string,
        collectionId: PropTypes.number,
        artistName: PropTypes.string,
        collectionName: PropTypes.string,
        collectionCensoredName: PropTypes.string,
        artistViewUrl: PropTypes.string,
        collectionViewUrl :PropTypes.string,
        artworkUrl100: PropTypes.string,
        releaseDate: PropTypes.string,
        collectionExplicitness: PropTypes.string,
        trackCount: PropTypes.number,
        country: PropTypes.string,
        primaryGenreName: PropTypes.string,
        contentAdvisoryRating: PropTypes.string,
        copyright: PropTypes.string,
        longDescription: PropTypes.string,
        feedUrl: PropTypes.string,
    })
};

export default PodcastResult;