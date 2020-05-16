using System;
using System.Collections.Generic;

namespace CourierManagementApp.Model
{
    public partial class TblDelivery
    {
        public int DeliveryId { get; set; }
        public string Destination { get; set; }
        public string Origin { get; set; }
        public int? CourierId { get; set; }
        public string CourierType { get; set; }
        public DateTime? DeliveryDate { get; set; }
        public string ItemDetails { get; set; }
        public int? ReceiverId { get; set; }
        public string ReceiverName { get; set; }
        public string ReceiverAddress { get; set; }
        public string ReceiverContactNumber { get; set; }
        public string EmailAddress { get; set; }
        public int? SenderId { get; set; }
        public string SenderName { get; set; }
        public string SenderAddress { get; set; }
        public string SenderContactNumber { get; set; }
        public string Rate { get; set; }
        public string StaffName { get; set; }
        public string ContactNumber { get; set; }
        public string DeliveryStatus { get; set; }
        public DateTime? DateCreated { get; set; }
    }
}
