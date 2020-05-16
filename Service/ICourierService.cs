using CourierManagementApp.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourierManagementApp.Service
{
    public interface ICourierService<T> where T: class
    {
        IList<TblCourier> GetAllCourier();
        int AddCourier(TblCourier courier);
        int UpdateCourier(TblCourier courier);
        TblCourier GetCourierData(int id);
        int DeleteCourier(int id);
    }
}
