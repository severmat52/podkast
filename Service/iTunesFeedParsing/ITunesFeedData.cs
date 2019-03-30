using System.Collections.Generic;

namespace podcastmaster.Service.iTunesFeedParsing
{
    public sealed class ITunesFeedData
    {
        public string Author { get; set; }
        public string Block { get; set; }
        public IEnumerable<ITunesCategory> Categories { get; set; }
        public string Image { get; set; }
        public string Explicit { get; set; }
        public string Complete { get; set; }
        public string NewFeedUrl { get; set; }
        public string Owner { get; set; }
        public string Summary { get; set; }
        public string Language { get; set; }
    }

    public sealed class ITunesCategory
    {
        public string Category { get; set; }
        public IEnumerable<string> SubCategories { get; set; }
    }
}