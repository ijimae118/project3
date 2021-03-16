using System;
using System.Collections.Generic;

#nullable disable

namespace ServerLaundryOnline.Models
{
    public partial class TbInvoice
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public string Consignee { get; set; }
        public string Address { get; set; }
        public string Sdt { get; set; }
        public string Description { get; set; }
        public string Process { get; set; }

        public virtual TbUser User { get; set; }
    }
}
