﻿using PodKastService.Contracts.Models;
using Podly.FeedParser;
using System;
using System.Threading.Tasks;

namespace ReactCoreNet.Service
{
    public interface IPodcastSearchService
    {
        Task<PodcastListResult> SearchPodcasts(string search);

        IFeed GetPodcastFeed(Uri uri);

        Task<PodcastListResult> GetPodcastById(long id);
    }
}