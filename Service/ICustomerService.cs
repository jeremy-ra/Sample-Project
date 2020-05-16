using CourierManagementApp.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourierManagementApp.Service
{
    public interface ICustomerService<T> where T: class
    {
        IList<TblCustomer> GetAllCustomer();
        int AddCustomer(TblCustomer customer);
        int UpdateCustomer(TblCustomer customer);
        TblCustomer GetCustomerData(int id);
        int DeleteCustomer(int id);
    }
}
