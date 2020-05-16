using CourierManagementApp.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourierManagementApp.Service
{
    public interface IDeliveryService<T> where T: class
    {
        IList<TblDelivery> GetAllDelivery();
        int AddDelivery(TblDelivery delivery);
        int UpdateDelivery(TblDelivery delivery);
        TblDelivery GetDeliveryData(int id);
        int DeleteDelivery(int id);
    }
}
