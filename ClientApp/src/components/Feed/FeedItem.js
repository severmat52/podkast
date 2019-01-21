import React from 'react';
import PropTypes from 'prop-types';
import './FeedItem.css';

const FeedItem = ({item, onPlay}) => (
    <li>
          <div className='podcast-feed-container'>
          <div className='feed-grid-container'>
                <div className='feed-item'>
                         {}
                </div>
               <div className='feed-item'>
                <p>
                {item.title}

                </p>
               </div>
               <div className='feed-item'>
                    <p>
                        {item.datePublished}
                    </p>
                </div>
               <div className='feed-item'>
                    <p>
                        {item.mediaLength}
                    </p>
               </div>
               <div>
                 {/* //  <button onClick={() => }> Play </button> */}
               </div>
           </div>
          </div>
    </li>
);

FeedItem.PropTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        author: PropTypes.string,
        id: PropTypes.string,
        link: PropTypes.string,
        datePublished: PropTypes.string,
        content: PropTypes.string,
        mediaUrl: PropTypes.string,
        mediaLength: PropTypes.string,
        mediaType: PropTypes.string
    })
};

export default FeedItem;