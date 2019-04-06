using System.Collections.Generic;
using System.Xml;
using System.Xml.Linq;

namespace podcastmaster
{

    public static class Extensions
    {

        public static string TrySelectSingleNode(this XmlNode @this, string selector){
            var node = @this.SelectSingleNode(selector);
            return node == null
                ? default
                : node.InnerText;
        }

        public static string TrySelect(this XElement element, string selector){
            var node = element.Element(selector);
            return node == null
                ? default
                : node.Value;
        }

        public static string TrySelect(this XElement element, string selector, string attribute)
        {
            var node = element.Element(selector);
            return node == null
                ? default
                : node.TryGetAttribute(attribute);
        }

        public static string TryGetAttribute(this XElement element, string attribute)
        {
            var value = element.Attribute(attribute);
            return value == null
                ? default
                : value.Value;
        }
    }
}