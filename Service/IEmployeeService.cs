using CourierManagementApp.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourierManagementApp.Service
{
    public interface IEmployeeService<T> where T: class
    {
        IList<T> GetAllEmployee();
        int AddEmployee(T employee);
        int UpdateEmployee(T employee);
        TblEmployee GetEmployeeData(int id);
        int DeleteEmployee(int id);
    }
}
