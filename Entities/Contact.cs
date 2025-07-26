using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    class Contact
    {
        [Key]
        public int Id { get; set; }
        public string Email { get; set; }
        public string Phone_number { get; set; }
        [ForeignKey(nameof(User))]
        public int? User_id { get; set; }
        public User User { get; set; }
        [ForeignKey(nameof(Service_id))]
        public int? Service_id { get; set; }
        public ServiceEntity Service { get; set; }
    }
}
