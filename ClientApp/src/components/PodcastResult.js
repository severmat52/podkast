import React from 'react';
import PropTypes from 'prop-types';

const PodcastResult = ({podcast}) => (
    <li>
           <div>
             {podcast.collectionName}
           </div>
           <div>
               {podcast.artistName}
           </div>
           <div>
               Description: {podcast.longDescription}
           </div>
           <img src={podcast.artworkUrl100} />
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