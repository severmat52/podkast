import React from "react";
import "./InnerFeedItem.css";

const InnerFeedItem = (display) => (
  <div className="feed-item">
    <div className="inner-feed-item">{display}</div>
  </div>
);

export default InnerFeedItem;