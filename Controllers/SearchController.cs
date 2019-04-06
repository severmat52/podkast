using Microsoft.AspNetCore.Mvc;
using ReactCoreNet.Service;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Podcast.Controllers
{
    [Route("api/Search/")]
    public class SearchController : Controller
    {
        private readonly IPodcastSearchService _service;

        public SearchController(IPodcastSearchService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("{search}")]
        public async Task<IActionResult> Search([FromRoute] string search)
        {
            var results = await _service.SearchPodcasts(search);
            return Ok(results);

        }

        [HttpGet]
        [Route("Feed/{id}")]
        public async Task<IActionResult> GetFeed([FromRoute] long id)
        {
            try
            {
                var podcast = await _service.GetPodcastById(id);
                var result = _service.GetPodcastFeed(new Uri(podcast.Podcasts.First().FeedUrl));
                return Ok(result);
            }
            catch(Exception)
            {
                return BadRequest();
            }
           
        }
    }
}
