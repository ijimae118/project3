using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClientResource.Models
{
    public class TbUser
    {
        public TbUser()
        {
            TbInvoices = new HashSet<TbInvoice>();
        }

        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public string Telephone { get; set; }
        public string Email { get; set; }

        public virtual ICollection<TbInvoice> TbInvoices { get; set; }
    }
}
