using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServerLaundryOnline.Models;

namespace ServerLaundryOnline.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TbInvoicesController : ControllerBase
    {
        private readonly EmployeeResourceDBContext _context;

        public TbInvoicesController(EmployeeResourceDBContext context)
        {
            _context = context;
        }

        // GET: api/TbInvoices
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TbInvoice>>> GetTbInvoices()
        {
            return await _context.TbInvoices.Select(s => new TbInvoice
            {
                Id = s.Id,
                UserId = s.UserId,
                Consignee = s.Consignee,
                Address = s.Address,
                Sdt = s.Sdt,
                Description = s.Description,
                Process = s.Process,
                User = _context.TbUsers.Where(a => a.Id == s.UserId).FirstOrDefault()
            }).ToListAsync();
        }

        // GET: api/TbInvoices/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TbInvoice>> GetTbInvoice(int id)
        {
            var tbInvoice = await _context.TbInvoices.FindAsync(id);

            if (tbInvoice == null)
            {
                return NotFound();
            }

            return tbInvoice;
        }

        // PUT: api/TbInvoices/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTbInvoice(int id, TbInvoice tbInvoice)
        {
            if (id != tbInvoice.Id)
            {
                return BadRequest();
            }

            _context.Entry(tbInvoice).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TbInvoiceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TbInvoices
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TbInvoice>> PostTbInvoice(TbInvoice tbInvoice)
        {
            _context.TbInvoices.Add(tbInvoice);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTbInvoice", new { id = tbInvoice.Id }, tbInvoice);
        }

        // DELETE: api/TbInvoices/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTbInvoice(int id)
        {
            var tbInvoice = await _context.TbInvoices.FindAsync(id);
            if (tbInvoice == null)
            {
                return NotFound();
            }

            _context.TbInvoices.Remove(tbInvoice);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TbInvoiceExists(int id)
        {
            return _context.TbInvoices.Any(e => e.Id == id);
        }
    }
}
