using System.Xml;
using System.Xml.Linq;

namespace podcastmaster{

    public static class Extensions{

        public static string TrySelectSingleNode(this XmlNode @this, string selector){
            var node = @this.SelectSingleNode(selector);
            return node == null
                ? default(string)
                : node.InnerText;
        }

        public static string TrySelect(this XElement element, string selector){
            var node = element.Element(selector);
            return node == null
                ? default(string)
                : node.Value;
        }
    }
}