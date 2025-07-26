using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    class Country
    {
        [Key]
        public int Id { get; set; }
        [StringLength(20)]
        [Required]
        public string Name { get; set; }
        public ICollection<Address> Address_List { get; set; }
    }
}
