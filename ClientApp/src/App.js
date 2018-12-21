import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import { Search } from './components/Search';

export default () => (
  <Layout>
    <Route exact path='/' component={Search} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
  </Layout>
);
