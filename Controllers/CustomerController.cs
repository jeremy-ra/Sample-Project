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
    public class CustomerController : Controller
    {
        ICustomerService<TblCustomer> _customerService;

        public CustomerController(ICustomerService<TblCustomer> customerService)
        {
            _customerService = customerService;
        }

        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<TblCustomer> Customer()
        {
            return _customerService.GetAllCustomer();
        }


        [HttpPost]
        [Route("Create")]
        public int Create(TblCustomer customer)
        {
            return _customerService.AddCustomer(customer);
        }

        [HttpGet]
        [Route("Details/{id}")]
        public TblCustomer Details(int id)
        {
            TblCustomer result = new TblCustomer();
            result = _customerService.GetCustomerData(id);
            if (result == null)
            {
                return new TblCustomer();

            }
            else
            {
                return result;
            }
        }


        [HttpPut]
        [Route("Edit")]
        public int Edit(TblCustomer customer)
        {
            return _customerService.UpdateCustomer(customer);
        }


        [HttpDelete]
        [Route("Delete/{id}")]
        public int Delete(int id)
        {
            return _customerService.DeleteCustomer(id);
        }
    }
}
