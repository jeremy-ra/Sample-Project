using System;
using System.Collections.Generic;

namespace CourierManagementApp.Model
{
    public partial class TblEmployee
    {
        public int EmployeeId { get; set; }
        public string Name { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public string ZipCode { get; set; }
        public string Country { get; set; }
        public string Department { get; set; }
        public string Gender { get; set; }
        public string ContactNumber { get; set; }
        public string Designation { get; set; }
        public DateTime? DateCreated { get; set; }
    }
}
