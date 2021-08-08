import React from "react";
import "./FeedItem.css";
import AudioButtonSmall from "../Core/AudioButtonSmall";
import InnerFeedItem from "./InnerFeedItem";

const FeedItem = ({ item, onPlay }) => (
  <li>
    <div className="podcast-feed-container">
      <div className="feed-grid-container">
        <InnerFeedItem id="feedItemTitle">
          <p>{item.title}</p>
        </InnerFeedItem>

        <InnerFeedItem>
          <AudioButtonSmall glyphicon="play" onClick={() => onPlay()} />
        </InnerFeedItem>

        <InnerFeedItem>
          <p>{formatDate(item.datePublished)}</p>
        </InnerFeedItem>

        <InnerFeedItem>
          <p>{item.itunesItem.duration}</p>
        </InnerFeedItem>

        <InnerFeedItem>{}</InnerFeedItem>
      </div>
    </div>
  </li>
);

function formatDate(dateString) {
  let date = new Date(dateString);
  return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
}

export default FeedItem;
