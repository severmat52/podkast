import React from 'react';
import PropTypes from 'prop-types';
import './FeedItem.css';

const FeedItem = ({item}) => (
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
                        {formatDate(item.datePublished)}
                    </p>
                </div>
               <div className='feed-item'>
                    <p>
                        {item.itunesItem.duration}
                    </p>
               </div>
           </div>
          </div>
    </li>
);

function formatDate(dateString){
    let date = new Date(dateString);
    return date.getMonth() + 1 + '/' + date.getDate() + '/' +  date.getFullYear();
}

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
        mediaType: PropTypes.string,
        itunesItem: PropTypes.shape({
            duration: PropTypes.string
        })

    })
};

export default FeedItem;