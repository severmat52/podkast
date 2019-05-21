using System.Collections.Generic;
using System.Runtime.Serialization;

namespace Podkast.Shared.Dto.Search
{
    [DataContract]
    public class PodcastListResult
    {
        [DataMember(Name = "resultCount")]
        public int Count { get; set; }

        [DataMember(Name = "results")]
        public List<Podcast> Podcasts { get; set; }

    }
}
