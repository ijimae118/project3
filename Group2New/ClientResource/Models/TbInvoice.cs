using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientResource.Models
{
    public class TbInvoice
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
