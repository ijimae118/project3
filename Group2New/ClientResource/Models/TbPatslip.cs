using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ClientResource.Models
{
    public class TbPatslip
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Required(ErrorMessage = "ID can not blanc")]
        [Display(Name = "Identifine")]
        public string Id { get; set; }

        [Required(ErrorMessage = "Password can not blanc")]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [Required(ErrorMessage = "Name2 can not blanc")]
        [Display(Name = "Receiver Name ")]
        public string Name2 { get; set; }

        [Required(ErrorMessage = "Depart3 can not blanc")]
        [Display(Name = "Department ")]
        public string Depart3 { get; set; }

        [Required(ErrorMessage = "ATM4 can not blanc")]
        [Display(Name = "ATM account ")]
        public string Atm4 { get; set; }

        [Required(ErrorMessage = "SalMonth5 can not blanc")]
        [Display(Name = "Date Recieved")]
        public DateTime? SalMonth5 { get; set; }

        [Required(ErrorMessage = "Role6 can not blanc")]
        [Display(Name = "Role")]
        public bool? Role6 { get; set; }

        [Required(ErrorMessage = "CoefSal7 can not blanc")]
        [Display(Name = "Coeff.Salary ")]
        public string CoefSal7 { get; set; }

        [Required(ErrorMessage = "CoefPosis8 can not blanc")]
        [Display(Name = "Pos.allowance")]
        public string CoefPosis8 { get; set; }

        [Required(ErrorMessage = "LiabFac9 can not blanc")]
        [Display(Name = "Liability factor")]
        public string LiabFac9 { get; set; }

        [Required(ErrorMessage = "MarSys10 can not blanc")]
        [Display(Name = "Marital system ")]
        public string MarSys10 { get; set; }

        
        [Display(Name = "Sum FACTOR")]
        public string TotalFac11 { get; set; }

        [Required(ErrorMessage = "AcWorkDay12 can not blanc")]
        [Display(Name = "Actual workdays ")]
        public string AcWorkDay12 { get; set; }

       
        [Display(Name = "Basic salary")]
        public string BasicSal13 { get; set; }

        [Required(ErrorMessage = "OverSal14 can not blanc")]
        [Display(Name = "Overtime salary ")]
        public string OverSal14 { get; set; }

        [Required(ErrorMessage = "SupPerDiem15 can not blanc")]
        [Display(Name = "Supp.per.diem ")]
        public string SupPerDiem15 { get; set; }

        [Required(ErrorMessage = "PhoneSup16 can not blanc")]
        [Display(Name = "Phone Fun.support ")]
        public string PhoneSup16 { get; set; }

        [Required(ErrorMessage = "TradeAllow17 can not blanc")]
        [Display(Name = "Trade.Un.allowance")]
        public string TradeAllow17 { get; set; }

        [Required(ErrorMessage = "SalIncrease18 can not blanc")]
        [Display(Name = "Incr.consciousness ")]
        public string SalIncrease18 { get; set; }

        [Required(ErrorMessage = "MidSiMeal19 can not blanc")]
        [Display(Name = "Mid shift meal")]
        public string MidSiMeal19 { get; set; }

        [Required(ErrorMessage = "BonusTet20 can not blanc")]
        [Display(Name = "Bonuses holidays TET")]
        public string BonusTet20 { get; set; }

      
        [Display(Name = "Sum INCOME")]
        public string TotalIncome21 { get; set; }

      
        [Display(Name = "Social insurance")]
        public string SociInsur22 { get; set; }

        
        [Display(Name = "Health insurance")]
        public string HeathInsur23 { get; set; }

        
        [Display(Name = "Unemployment insurance")]
        public string UnemploInsur24 { get; set; }

        [Required(ErrorMessage = "MonthlyUnFe25 can not blanc")]
        [Display(Name = "Union fee ")]
        public string MonthlyUnFe25 { get; set; }

       
        [Display(Name = "Sum DEDUCTIONS")]
        public string TotalDeductions26 { get; set; }

       
        [Display(Name = "Sum RECEIVED")]
        public string SumReceived27 { get; set; }

      
        [Display(Name = "The amount transferred to ATM")]
        public string TransAtm28 { get; set; }

        [Display(Name = "Sum Salary Have payed")]
        public double SalarySum { get; set; }
        
    }
}
