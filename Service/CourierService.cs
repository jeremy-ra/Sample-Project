using CourierManagementApp.Model;
using CourierManagementApp.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourierManagementApp.Service
{
    public class CourierService : ICourierService<TblCourier>
    {

        private readonly IRepository<TblCourier> _repo;

        public CourierService(IRepository<TblCourier> repo)
        {
            _repo = repo;
        }
        public int AddCourier(TblCourier courier)
        {
            _repo.Add(courier);
            return 1;
        }

        public int DeleteCourier(int id)
        {
            _repo.Delete(id);
            return 1;
        }

        public IList<TblCourier> GetAllCourier()
        {
            return _repo.GetAll();           
        }

        public TblCourier GetCourierData(int id)
        {
            return _repo.GetData(id);
        }

        public int UpdateCourier(TblCourier courier)
        {
            _repo.Update(courier);
            return 1;
        }
    }
}
