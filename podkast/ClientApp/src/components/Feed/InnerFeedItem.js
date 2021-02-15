import React from "react";
import "./InnerFeedItem.css";

const InnerFeedItem = (props) => (
  <div className="feed-item">
    <div className="inner-feed-item">{props.children}</div>
  </div>
);

export default InnerFeedItem;