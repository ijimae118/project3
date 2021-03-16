using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using ServerLaundryOnline.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerLaundryOnline
{
    public class Startup
    {
        public static string ConnectionString { get; private set; }
        public const string ALLOW_ORIGINS = "allowOrigins";
                
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;

            Startup.ConnectionString = Configuration["ConnectionStrings:DefaultConnection"];
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddControllersWithViews();
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ServerLaundryOnline", Version = "v1" });
            });

            services.AddCors(c =>
            {
                c.AddPolicy(name: ALLOW_ORIGINS,
                              builder =>
                              {
                                  string allowHosts = this.Configuration["AllowedHosts"] ?? "*";
                                  builder.WithOrigins(allowHosts).AllowAnyHeader().AllowAnyMethod();
                              });
            });
            
            services.AddDbContext<EmployeeResourceDBContext>(options => options.UseSqlServer(Startup.ConnectionString));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseStaticFiles();
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ServerLaundryOnline v1"));
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }
            

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors(ALLOW_ORIGINS);

            app.UseEndpoints(endpoints =>
            {
                //endpoints.MapControllerRoute(
                //    name: "default",
                //    pattern: "{controller=Home}/{action=Index}/{id?}");        /*/swagger/index.html*/
                endpoints.MapControllers();
            });
        }
    }
}
