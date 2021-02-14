import React from 'react';
import './FeedItem.css';
import AudioButtonSmall  from '../Core/AudioButtonSmall';

const FeedItem = ({item, onPlay}) => (
    <li>
          <div className='podcast-feed-container'>
          <div className='feed-grid-container'>
               <div className='feed-item' id='feedItemTitle'>
               <div className='inner-feed-item'>
               <p>
                    {  item.title }
                </p>
               </div>

               </div>
               <div className='feed-item'>
               <div className='inner-feed-item'>

                    <AudioButtonSmall glyphicon='play' onClick={() => onPlay()} />
                    </div>
               </div>
               <div className='feed-item'>
               <div className='inner-feed-item'>

                    <p>
                        {formatDate(item.datePublished)}
                    </p>
                </div>
                </div>
               <div className='feed-item'>
               <div className='inner-feed-item'>

                    <p>
                        {item.itunesItem.duration}
                    </p>
                    </div>
               </div>
               <div className='feed-item'>
               <div className='inner-feed-item'>

                         {}
                </div>
                </div>
               <div>
                 {/* //  <button onClick={() => }> Play </button> */}
               </div>
           </div>
          </div>
    </li>
);

function formatDate(dateString){
    let date = new Date(dateString);
    return date.getMonth() + 1 + '/' + date.getDate() + '/' +  date.getFullYear();
}

export default FeedItem;