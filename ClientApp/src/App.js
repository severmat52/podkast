import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Search  from './components/Search';
import PodcastFeed from './components/PodcastFeed';

export default () => (
  <Layout>
    <Route exact path='/' component={Search} />
    <Route exact path='/feed' component={PodcastFeed} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
  </Layout>
);
