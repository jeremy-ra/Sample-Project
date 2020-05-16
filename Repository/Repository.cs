using CourierManagementApp.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourierManagementApp.Repository
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly TestDBContext context;
        private DbSet<T> entities;
       
        public Repository(TestDBContext context)
        {
            this.context = context;
            entities = context.Set<T>();
        }

        public int Add(T entity)
        {
            entities.Add(entity);
            context.SaveChanges();

            return 1;
        }

        public int Delete(int id)
        {
            T existing = entities.Find(id);
            if (existing != null)
            {
                entities.Remove(existing);
                context.SaveChanges();
            }
            return 1;
        }

        public IList<T> GetAll()
        {
            return entities.ToList();
        }

        public T GetData(int id)
        {
            T data = entities.Find(id);
            return data;
        }

        public int Update(T entity)
        {
            if (entity == null) throw new ArgumentNullException("entity");
           
            entities.Update(entity);
            context.SaveChanges();

            return 1;
        }
    }
}
