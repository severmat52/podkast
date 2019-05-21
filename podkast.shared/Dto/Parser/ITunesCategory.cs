using System.Collections.Generic;

public sealed class ITunesCategory
{
    public string Category { get; set; }
    public IEnumerable<string> SubCategories { get; set; }
}