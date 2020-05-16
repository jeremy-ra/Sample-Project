using CourierManagementApp.Model;
using CourierManagementApp.Repository;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourierManagementApp.Service
{
    public class DeliveryService : IDeliveryService<TblDelivery>
    {
        private readonly IRepository<TblDelivery> _repo;

        public DeliveryService(IRepository<TblDelivery> repo)
        {
            _repo = repo;
        }

        public int AddDelivery(TblDelivery delivery)
        {
            _repo.Add(delivery);
            return 1;
        }

        public int DeleteDelivery(int id)
        {
            _repo.Delete(id);
            return 1;
        }

        public IList<TblDelivery> GetAllDelivery()
        {
            return _repo.GetAll();
        }

        public TblDelivery GetDeliveryData(int id)
        {
            return _repo.GetData(id);
        }

        public int UpdateDelivery(TblDelivery delivery)
        {
            _repo.Update(delivery);
            return 1;
        }
    }
}
