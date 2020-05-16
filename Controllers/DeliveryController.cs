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
    public class DeliveryController : Controller
    {
        IDeliveryService<TblDelivery> _deliveryService;

        public DeliveryController(IDeliveryService<TblDelivery> deliveryService)
        {
            _deliveryService = deliveryService;
        }

        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<TblDelivery> Customer()
        {
            return _deliveryService.GetAllDelivery();
        }

        [HttpPost]
        [Route("Create")]
        public int Create(TblDelivery customer)
        {
            return _deliveryService.AddDelivery(customer);
        }

        [HttpGet]
        [Route("Details/{id}")]
        public TblDelivery Details(int id)
        {
            TblDelivery result = new TblDelivery();
            result = _deliveryService.GetDeliveryData(id);
            if (result == null)
            {
                return new TblDelivery();

            }
            else
            {
                return result;
            }
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit(TblDelivery customer)
        {
            return _deliveryService.UpdateDelivery(customer);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public int Delete(int id)
        {
            return _deliveryService.DeleteDelivery(id);
        }
    }
}
