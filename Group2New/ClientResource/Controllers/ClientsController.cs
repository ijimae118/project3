using ClientResource.Models;
using Microsoft.AspNetCore.Http;
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
    public class ClientsController : Controller
    {
        private string uri = "http://localhost:58564/api/Servers/";

        public IActionResult Index(string outlog)
        {
            //catch session
            if (outlog == "logout")
            {
                HttpContext.Session.SetString("admin", "");
                return RedirectToAction("Login");
            }

            if (String.IsNullOrEmpty(HttpContext.Session.GetString("admin")))
            {
                return RedirectToAction("Login");
            }
            

            var httpclient = new HttpClient();
            var data = JsonConvert.DeserializeObject<IEnumerable<TbPatslip>>(httpclient.GetStringAsync(uri).Result);
            return View(data);
        }

        [HttpGet]
        public IActionResult Login()
        {
            //catch session
            if (!string.IsNullOrEmpty(HttpContext.Session.GetString("admin")))
            {
                return RedirectToAction("Index");
            }
            return View();
        }

        [HttpPost]
        public IActionResult Login([Bind("Id,Password")] TbPatslip TbPatslip)
        {
            HttpClient httpClient = new HttpClient();
            string url = uri + "Login/";
            var login = httpClient.PostAsJsonAsync<TbPatslip>(url, TbPatslip).Result;
            if (login.IsSuccessStatusCode)
            {
                var u = JsonConvert.DeserializeObject<TbPatslip>(httpClient.GetStringAsync(uri + TbPatslip.Id).Result);
                
                if (u.Password.Equals(TbPatslip.Password))
                {
                    if (u.Role6 == true)
                    {
                        HttpContext.Session.SetString("admin", u.Id);
                        return RedirectToAction("Index");
                    }
                    else
                    {
                        return RedirectToAction("Details", new { id = TbPatslip.Id });
                    }
                }
                else
                {
                    ViewBag.mess = "Invalid Password";
                }
                return View();
            }
            else
            {
                ViewBag.mess = "Invalid Id";
            }
            return View();
        }

        [HttpGet]
        public IActionResult Details(string id)
        {
            HttpClient httpClient = new HttpClient();
            var User = JsonConvert.DeserializeObject<TbPatslip>(httpClient.GetStringAsync(uri + id).Result);
            return View(User);
        }

        [HttpGet]
        public IActionResult Create()
        {
            if (String.IsNullOrEmpty(HttpContext.Session.GetString("admin")))
            {
                return RedirectToAction("Login");
            }
            return View();
        }

        [HttpPost]
        public IActionResult Create(TbPatslip TbPatslip)
        {
            HttpClient httpClient = new HttpClient();
            try
            {
                var newStaf = httpClient.PostAsJsonAsync<TbPatslip>(uri, TbPatslip).Result;
                if (newStaf.IsSuccessStatusCode)
                {
                    ViewBag.mess = "Create new Staf success!!!";
                }
                else
                {
                    ViewBag.mess = "Create fail!!!";
                }
            }
            catch (Exception)
            {
                throw;
            }
            return View();
        }

        [HttpGet]
        public ActionResult Edit(string id)
        {
            HttpClient httpClient = new HttpClient();
            var User = JsonConvert.DeserializeObject<TbPatslip>(httpClient.GetStringAsync(uri + id).Result);
            return View(User);
        }
        [HttpPost]
        public ActionResult Edit(TbPatslip tbPatslip)
        {
            var httpclient = new HttpClient();

            try
            {
                var model = httpclient.PutAsJsonAsync<TbPatslip>(uri, tbPatslip).Result;
                if (model.IsSuccessStatusCode)
                {
                    return RedirectToAction("Index");
                }
            }
            catch (Exception)
            {
                throw;
            }
            return View();
        }

        [HttpGet]
        public ActionResult Delete(string id)
        {
            HttpClient httpClient = new HttpClient();

            JsonConvert.DeserializeObject<TbPatslip>(httpClient.GetStringAsync(uri + "Delete/" + id).Result);

            return RedirectToAction("Index");
        }
    }
}

