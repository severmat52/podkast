using System;
using System.Threading.Tasks;
using Podkast.Shared.Dto.Parser;
using Podkast.Shared.Dto.Search;
using Podly.FeedParser;

namespace ReactCoreNet.Service
{
    public class PodcastSearchService : IPodcastSearchService
    {
        private readonly HttpFeedFactory _factory;
        private readonly iTunesSearch.Library.iTunesSearchManager _searchManager;

        public PodcastSearchService(
            HttpFeedFactory factory,
            iTunesSearch.Library.iTunesSearchManager searchManager)
        {
            _factory = factory;
            _searchManager = searchManager;
        }

       

        public async Task<PodcastListResult> GetPodcastById(long id)
        {
            var result = await _searchManager.GetPodcastById(id);
            return result;
        }

        public IFeed GetPodcastFeed(Uri uri)
        {
            var feed = _factory.CreateFeed(uri);
            return feed;
        }

        public async Task<PodcastListResult> SearchPodcasts(string search)
        {
            var searchResult = await _searchManager.GetPodcasts(search);
            return searchResult;
        }
    }
}
