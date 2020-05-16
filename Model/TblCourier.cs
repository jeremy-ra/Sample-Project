using System;
using System.Collections.Generic;

namespace CourierManagementApp.Model
{
    public partial class TblCourier
    {
        public int CourierId { get; set; }
        public string CourierType { get; set; }
        public string Description { get; set; }
        public DateTime? DateCreated { get; set; }
    }
}
