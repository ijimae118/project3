using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Description;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServerLaundryOnline.Models;

namespace ServerLaundryOnline.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TbServicesController : ControllerBase
    {
        private readonly EmployeeResourceDBContext _context;

        public TbServicesController(EmployeeResourceDBContext context)
        {
            _context = context;
        }

        // GET: api/TbServices
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TbService>>> GetTbServices()
        {
            return await _context.TbServices.ToListAsync();
        }

        // GET: api/TbServices/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TbService>> GetTbService(int id)
        {
            var tbService = await _context.TbServices.FindAsync(id);

            if (tbService == null)
            {
                return NotFound();
            }

            return tbService;
        }

        // PUT: api/TbServices/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTbService(int id, TbService tbService)
        {
            if (id != tbService.Id)
            {
                return BadRequest();
            }

            _context.Entry(tbService).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TbServiceExists(id))
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

        // POST: api/TbServices
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TbService>> PostTbService(TbService tbService)
        {
            _context.TbServices.Add(tbService);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTbService", new { id = tbService.Id }, tbService);
        }

        // DELETE: api/TbServices/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTbService(int id)
        {
            var tbService = await _context.TbServices.FindAsync(id);
            if (tbService == null)
            {
                return NotFound();
            }

            _context.TbServices.Remove(tbService);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        //ham search publisher
        [HttpGet("Search/{filter}")]       //(action/parameter)
        [ResponseType(typeof(TbService))]
        public IQueryable<TbService> GetSearch(string filter)
        {
            var Filter = from e in _context.TbServices
                         where e.Name.Contains(filter) || e.Price.Value.ToString().Contains(filter) || e.Type.Contains(filter) || e.Rating.Value.ToString().Contains(filter)
                         select e;
            return Filter;
        }

        private bool TbServiceExists(int id)
        {
            return _context.TbServices.Any(e => e.Id == id);
        }
    }
}
