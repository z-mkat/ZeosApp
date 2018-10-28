using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace ZeosApp.Models
{
	public class PackInstance
	{
		[BsonIgnoreIfNull, BsonIgnore]
		public MongoDB.Bson.ObjectId? Id { get; set; }

		[BsonElement("PackInstanceID")]
		public string PackInstanceID { get; set; }

		[BsonElement("Price")]
		public string Price { get; set; }

		[BsonElement("Products")]
		public string[] Products { get; set; }
	}
}
