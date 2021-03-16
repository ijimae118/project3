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
    public class TbServicesController : Controller
    {
        private string uri = "http://localhost:58564/api/TbServices/";
        public IActionResult Index(string filter)
        {
            var httpclient = new HttpClient();
            if (!String.IsNullOrEmpty(filter))
            {

                var model = JsonConvert.DeserializeObject<IEnumerable<TbService>>(httpclient.GetStringAsync(uri + "Search/" + filter).Result);
                return View(model);
            }
            else
            {
                var model = JsonConvert.DeserializeObject<IEnumerable<TbService>>(httpclient.GetStringAsync(uri).Result);
                return View(model);
            }            
        }
        public ActionResult Details(string id)
        {
            var httpclient = new HttpClient();
            var emp = JsonConvert.DeserializeObject<TbService>(httpclient.GetStringAsync(uri + id).Result);
            return View(emp);
        }

        [HttpGet]
        public ActionResult create()
        {
            return View();
        }
        [HttpPost]
        public ActionResult create(TbService tbService)
        {
            try
            {
                var httpclient = new HttpClient();
                var emp = httpclient.PostAsJsonAsync<TbService>(uri, tbService).Result;
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
            var model = JsonConvert.DeserializeObject<TbService>(httpclient.GetStringAsync(uri + id).Result);
            return View(model);
        }
        [HttpPost]
        public ActionResult Edit(string id , TbService tbService)
        {
            var httpclient = new HttpClient();
            var emp = httpclient.PutAsJsonAsync<TbService>(uri + id, tbService).Result;
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
