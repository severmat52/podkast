import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Search  from './components/Search';
import PodcastFeed from './components/Feed/PodcastFeed';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';

export default () => (
  <div id='app'>
<Layout>
    <Route exact path='/' component={Search} />
    <Route exact path='/feed' component={PodcastFeed} />
  </Layout>
  <AudioPlayer />
  </div>
  
);
