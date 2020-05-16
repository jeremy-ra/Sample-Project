using CourierManagementApp.Model;
using CourierManagementApp.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourierManagementApp.Service
{
    public class CustomerService : ICustomerService<TblCustomer>
    {
        private readonly IRepository<TblCustomer> _repo;

        public CustomerService(IRepository<TblCustomer> repo)
        {
            _repo = repo;
        }
        public int AddCustomer(TblCustomer customer)
        {
            _repo.Add(customer);
            return 1;
        }

        public int DeleteCustomer(int id)
        {
            _repo.Delete(id);
            return 1;
        }

        public IList<TblCustomer> GetAllCustomer()
        {
           return _repo.GetAll();
        }

        public TblCustomer GetCustomerData(int id)
        {
            return _repo.GetData(id);
        }

        public int UpdateCustomer(TblCustomer customer)
        {
            _repo.Update(customer);
            return 1;
        }
    }
}
