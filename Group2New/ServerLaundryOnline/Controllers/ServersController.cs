using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServerLaundryOnline.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerLaundryOnline.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServersController : ControllerBase
    //Lấy dữ liệu từ Database
    {
        EmployeeResourceDBContext db = new EmployeeResourceDBContext();

        [HttpGet("{id}")]
        public ActionResult GetTbPayslip(string id)
        {
            var user = db.TbPayslips.Find(id);
            if (user != null)
            {
                return Ok(user);
            }
            return null;
        }

        // Login

        [HttpPost("Login")]
        public ActionResult GetLogin(TbPayslip tbUser)
        {
            var log = db.TbPayslips.SingleOrDefault(u => u.Id.Equals(tbUser.Id));
            if (log != null)
            {
                return Ok(log);
            }
            return null;
        }

        [HttpGet]
        public ActionResult<IEnumerable<TbPayslip>> GetTbPayslips()
        {
            return Ok(db.TbPayslips.ToList());
        }

        // Add nhân viên mới
        [HttpPost]
        public ActionResult PostUser(TbPayslip user)
        {
            var newuser = db.TbPayslips.SingleOrDefault(u => u.Id.Equals(user.Id));
            if (newuser == null)
            {
                db.Add(user);
                db.SaveChanges();
                return Ok();
            }
            return null;
        }

        //Sửa thông tin 

        [HttpPut]
        public ActionResult EditTbPayslip(TbPayslip editTbPayslip)
        {
            var emp = db.TbPayslips.SingleOrDefault(e => e.Id.Equals(editTbPayslip.Id));
            if (emp != null)
            {
                emp.Password = editTbPayslip.Password;
                emp.Name2 = editTbPayslip.Name2;
                emp.Depart3 = editTbPayslip.Depart3;
                emp.Atm4 = editTbPayslip.Atm4;
                emp.SalMonth5 = editTbPayslip.SalMonth5;
                emp.Role6 = editTbPayslip.Role6;

                emp.CoefSal7 = editTbPayslip.CoefSal7;
                emp.CoefPosis8 = editTbPayslip.CoefPosis8;
                emp.LiabFac9 = editTbPayslip.LiabFac9;
                emp.MarSys10 = editTbPayslip.MarSys10;
                // Tính toán
                var x1 = (float.Parse(emp.CoefSal7)
                    + float.Parse(emp.CoefPosis8)
                    + float.Parse(emp.LiabFac9)
                    + float.Parse(emp.MarSys10)) / 10;

                editTbPayslip.TotalFac11 = x1.ToString();
                emp.TotalFac11 = editTbPayslip.TotalFac11;

                emp.AcWorkDay12 = editTbPayslip.AcWorkDay12;

                var x2 = x1 * 1490000; // Tinh luong co ban trong thang, voi quy dinh
                                       // luong toi thieu hien nay tai tp.HCM la 1.490.000 VND/nguoi/Thang
                var x22 = (x2 / 30) * float.Parse(emp.AcWorkDay12);
                editTbPayslip.BasicSal13 = x22.ToString();
                emp.BasicSal13 = editTbPayslip.BasicSal13;

                emp.OverSal14 = editTbPayslip.OverSal14;
                emp.SupPerDiem15 = editTbPayslip.SupPerDiem15;
                emp.PhoneSup16 = editTbPayslip.PhoneSup16;
                emp.TradeAllow17 = editTbPayslip.TradeAllow17;
                emp.SalIncrease18 = editTbPayslip.SalIncrease18;
                emp.MidSiMeal19 = editTbPayslip.MidSiMeal19;
                emp.BonusTet20 = editTbPayslip.BonusTet20;
                // Tính toán
                var x3 = float.Parse(emp.BasicSal13)
                    + float.Parse(emp.OverSal14)
                    + float.Parse(emp.SupPerDiem15)
                    + float.Parse(emp.PhoneSup16)
                    + float.Parse(emp.CoefSal7)
                    + float.Parse(emp.SalIncrease18)
                    + float.Parse(emp.MidSiMeal19)
                    + float.Parse(emp.BonusTet20);
                editTbPayslip.TotalIncome21 = x3.ToString();
                emp.TotalIncome21 = editTbPayslip.TotalIncome21;

                var x4 = float.Parse(emp.BasicSal13) * 0.080;
                editTbPayslip.SociInsur22 = x4.ToString();
                emp.SociInsur22 = editTbPayslip.SociInsur22;

                var x5 = float.Parse(emp.BasicSal13) * 0.015;
                editTbPayslip.HeathInsur23 = x5.ToString();
                emp.HeathInsur23 = editTbPayslip.HeathInsur23;

                var x6 = float.Parse(emp.BasicSal13) * 0.010;
                editTbPayslip.UnemploInsur24 = x6.ToString();
                emp.UnemploInsur24 = editTbPayslip.UnemploInsur24;

                emp.MonthlyUnFe25 = editTbPayslip.MonthlyUnFe25;
                // Tính toán
                var x7 = float.Parse(emp.SociInsur22)
                    + float.Parse(emp.HeathInsur23)
                    + float.Parse(emp.UnemploInsur24)
                    + float.Parse(emp.MonthlyUnFe25);
                editTbPayslip.TotalDeductions26 = x7.ToString();
                emp.TotalDeductions26 = editTbPayslip.TotalDeductions26;
                // Tính toán
                var x8 = float.Parse(emp.TotalIncome21) - float.Parse(emp.TotalDeductions26);

                editTbPayslip.SumReceived27 = x8.ToString();

                emp.SumReceived27 = editTbPayslip.SumReceived27;

                editTbPayslip.TransAtm28 = emp.SumReceived27;
                emp.TransAtm28 = editTbPayslip.TransAtm28;

                db.SaveChanges();
            }
            return Ok(emp);
        }

        // Xóa thông tin nhân viên

        [HttpGet("Delete/{id}")]
        public ActionResult DeleteTbPayslip(string id)
        {
            var emp = db.TbPayslips.Find(id);
            if (emp != null)
            {
                db.TbPayslips.Remove(emp);
                db.SaveChanges();
            }
            return Ok();
        }
    }
}

