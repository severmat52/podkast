using PodKastService.Contracts.Models;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace PodKastService.Contracts.Models
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
