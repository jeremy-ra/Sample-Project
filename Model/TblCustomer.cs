using System;
using System.Collections.Generic;

namespace CourierManagementApp.Model
{
    public partial class TblCustomer
    {
        public int CustomerId { get; set; }
        public string Name { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public string ZipCode { get; set; }
        public string Country { get; set; }
        public string Gender { get; set; }
        public string ContactNumber { get; set; }
        public string EmailAddress { get; set; }
        public DateTime? DateCreated { get; set; }
    }
}
