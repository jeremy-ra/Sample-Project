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
    public class EmployeeController : Controller
    {
        IEmployeeService<TblEmployee> _employeeService;

        public EmployeeController(IEmployeeService<TblEmployee> employeeService)
        {
            _employeeService = employeeService;
        }

        [Route("GetAll")]
        [HttpGet]
        public IEnumerable<TblEmployee> Employee()
        {
            return _employeeService.GetAllEmployee();
        }

        
        [Route("Create")]
        [HttpPost]
        public int Create(TblEmployee employee)
        {
            return _employeeService.AddEmployee(employee);
        }

        
        [Route("Details/{id}")]
        [HttpGet]
        public TblEmployee Details(int id)
        {
            TblEmployee result = new TblEmployee();
            result = _employeeService.GetEmployeeData(id);
            if (result == null)
            {
                return new TblEmployee();

            }
            else
            {
                return result;
            }
        }

        
        [Route("Edit")]
        [HttpPut]
        public int Edit(TblEmployee employee)
        {
            return _employeeService.UpdateEmployee(employee);
        }

        
        [Route("Delete/{id}")]
        [HttpDelete]
        public int Delete(int id)
        {
            return _employeeService.DeleteEmployee(id);
        }
    }
}
