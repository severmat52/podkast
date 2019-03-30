using System.Xml;

namespace podcastmaster{

    public static class Extensions{

        public static string TrySelectSingleNode(this XmlNode @this, string selector){
            var node = @this.SelectSingleNode(selector);
            return node == null
                ? default(string)
                : node.InnerText;
        }
    }
}