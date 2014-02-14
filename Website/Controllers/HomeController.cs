using System;
using System.Web.Mvc;

namespace Website.Controllers
{
    public class HomeController : Controller
    {
        private static string _jsessionId = Guid.NewGuid().ToString();

        public string Index()
        {
            return _jsessionId;
        }

        [HttpPost]
        [AllowCrossSiteJson]
        public void Edit(string id, FormCollection collection)
        {
            _jsessionId = id;
        }
    }

    public class AllowCrossSiteJsonAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            filterContext.RequestContext.HttpContext.Response.AddHeader("Access-Control-Allow-Origin", "*");
            base.OnActionExecuting(filterContext);
        }
    }
}