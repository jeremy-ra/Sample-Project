using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CourierManagementApp.Model;
using CourierManagementApp.Service;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CourierManagementApp.Controllers
{
    [Route("api/[controller]")]
    public class CourierController : Controller
    {
        ICourierService<TblCourier> _courierService;

        public CourierController(ICourierService<TblCourier> courierService)
        {
            _courierService = courierService;
        }
        
        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<TblCourier> Courier()
        {
            return _courierService.GetAllCourier();
        }

        [HttpPost]
        [Route("Create")]
        public int Create(TblCourier courier)
        {
            return _courierService.AddCourier(courier);
        }

        [HttpGet]
        [Route("Details/{id}")]
        public TblCourier Details(int id)
        {
            TblCourier result = new TblCourier();
            result = _courierService.GetCourierData(id);
            if (result == null)
            {
                return new TblCourier();

            }
            else
            {
                return result;
            }
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit(TblCourier courier)
        {
            return _courierService.UpdateCourier(courier);
        }


        [HttpDelete]
        [Route("Delete/{id}")]
        public int Delete(int id)
        {
            return _courierService.DeleteCourier(id);
        }
    }
}
