import React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import Search from "./components/Search";
import PodcastFeed from "./components/Feed/PodcastFeed";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import About from "./components/About";

export default () => (
  <div id="app">
    <Layout>
      <Route exact path="/" component={Search} />
      <Route exact path="/episodes" component={PodcastFeed} />
      <Route exact path="/about" component={About} />
    </Layout>
    <AudioPlayer />
  </div>
);
