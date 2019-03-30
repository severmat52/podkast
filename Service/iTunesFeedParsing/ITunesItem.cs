namespace podcastmaster.Service.Parser
{
    public sealed class ITunesItem
    {
        public string Author { get; set; }
        public string Block { get; set; }
        public string Keywords { get; set; }
        public string Image { get; set; }
        public string Episode { get; set; }
        public string EpisodeType { get; set; }
        public string Duration { get; set; }
        public string Explicit { get; set; }
        public string IsClosedCaptioned { get; set; }
        public string Order { get; set; }
        public string Complete { get; set; }
        public string NewFeedUrl { get; set; }
        public string Owner { get; set; }
        public string SubTitle { get; set; }
        public string Summary { get; set; }
    }
}