using System.Collections.Generic;

namespace Podkast.Shared.Dto.Parser
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
}