using System;
using System.Collections.Generic;

#nullable disable

namespace ServerLaundryOnline.Models
{
    public partial class TbService
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public double? Price { get; set; }
        public int? Rating { get; set; }
    }
}
