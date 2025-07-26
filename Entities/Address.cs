using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    class Address
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Street { get; set; }
        [Required]
        public string Street_number { get; set; }
        public string City { get; set; }
        [ForeignKey(nameof(Country_Id))]
        public int Country_Id { get; set; }
        public Country Country { get; set; }
    }
}
