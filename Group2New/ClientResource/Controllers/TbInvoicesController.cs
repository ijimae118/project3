using ClientResource.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;

namespace ClientResource.Controllers
{
    public class TbInvoicesController : Controller
    {
        private string uri = "http://localhost:58564/api/TbInvoices/";
        public IActionResult Index()
        {
            var httpclient = new HttpClient();

            var model = JsonConvert.DeserializeObject<IEnumerable<TbInvoice>>(httpclient.GetStringAsync(uri).Result);
            return View(model);

        }
        public ActionResult Details(string id)
        {
            var httpclient = new HttpClient();
            var emp = JsonConvert.DeserializeObject<TbInvoice>(httpclient.GetStringAsync(uri + id).Result);
            return View(emp);
        }

        [HttpGet]
        public ActionResult create()
        {
            return View();
        }
        [HttpPost]
        public ActionResult create(TbInvoice tbInvoice)
        {
            try
            {
                var httpclient = new HttpClient();
                var emp = httpclient.PostAsJsonAsync<TbInvoice>(uri, tbInvoice).Result;
                if (emp.IsSuccessStatusCode)
                {
                    ViewBag.mess = "Insert sucsesss";
                }
                else
                {
                    ViewBag.mess = "Insert Faile";
                }
            }
            catch (Exception e)
            {
                ModelState.AddModelError("", e.Message);
            }
            return RedirectToAction("Index");
        }
        [HttpGet]
        public IActionResult Edit(string id)
        {
            var httpclient = new HttpClient();
            var model = JsonConvert.DeserializeObject<TbInvoice>(httpclient.GetStringAsync(uri + id).Result);
            return View(model);
        }
        [HttpPost]
        public ActionResult Edit(string id, TbInvoice tbInvoice)
        {
            var httpclient = new HttpClient();
            var emp = httpclient.PutAsJsonAsync<TbInvoice>(uri + id, tbInvoice).Result;
            return RedirectToAction("Index");
        }
        public ActionResult Delete(string id)
        {
            HttpClient httpclient = new HttpClient();
            var model = httpclient.DeleteAsync(uri + id).Result;

            if (model.IsSuccessStatusCode)
            {
                TempData["mess"] = "Delete Ok";
            }
            return RedirectToAction("Index");
        }
    }
}
