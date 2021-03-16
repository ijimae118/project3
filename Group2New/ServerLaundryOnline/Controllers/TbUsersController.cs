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
    public class TbUsersController : ControllerBase
    {
        private readonly EmployeeResourceDBContext _context;

        public TbUsersController(EmployeeResourceDBContext context)
        {
            _context = context;
        }

        // GET: api/TbUsers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TbUser>>> GetTbUsers()
        {
            return await _context.TbUsers.ToListAsync();
        }

        // GET: api/TbUsers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TbUser>> GetTbUser(int id)
        {
            var tbUser = await _context.TbUsers.FindAsync(id);

            if (tbUser == null)
            {
                return NotFound();
            }

            return tbUser;
        }

        // PUT: api/TbUsers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> PutTbUser(TbUser tbUser)
        {
            var edit = _context.TbUsers.SingleOrDefault(e => e.Id.Equals(tbUser.Id));
            if (edit != null)
            {
                edit.UserName = tbUser.UserName;
                edit.Password = tbUser.Password;
                edit.Address = tbUser.Address;
                edit.Email = tbUser.Email;
                edit.Telephone = tbUser.Telephone;
                await _context.SaveChangesAsync();
            }
            return Ok();
        }

        // POST: api/TbUsers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TbUser>> PostTbUser(TbUser tbUser)
        {
            _context.TbUsers.Add(tbUser);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTbUser", new { id = tbUser.Id }, tbUser);
        }

        // DELETE: api/TbUsers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTbUser(int id)
        {
            var tbUser = await _context.TbUsers.FindAsync(id);
            if (tbUser == null)
            {
                return NotFound();
            }

            _context.TbUsers.Remove(tbUser);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TbUserExists(int id)
        {
            return _context.TbUsers.Any(e => e.Id == id);
        }
    }
}
