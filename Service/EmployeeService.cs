using CourierManagementApp.Model;
using CourierManagementApp.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourierManagementApp.Service
{
    public class EmployeeService : IEmployeeService<TblEmployee>
    {
        private readonly IRepository<TblEmployee> _repo;

        public EmployeeService(IRepository<TblEmployee> repo)
        {
            _repo = repo;
        }
        public int AddEmployee(TblEmployee employee)
        {
            _repo.Add(employee);
            return 1;
        }

        public int DeleteEmployee(int id)
        {
            _repo.Delete(id);
            return 1;
        }

        public IList<TblEmployee> GetAllEmployee()
        {
            return _repo.GetAll();
        }

        public TblEmployee GetEmployeeData(int id)
        {
            return _repo.GetData(id);
        }

        public int UpdateEmployee(TblEmployee employee)
        {
            _repo.Update(employee);
            return 1;
        }
    }
}
