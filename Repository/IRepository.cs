using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourierManagementApp.Repository
{
    public interface IRepository<T> where T: class
    {
        int Add(T entity);
        int Delete(int id);
        int Update(T entity);
        IList<T> GetAll();
        T GetData(int id);
    }
}
