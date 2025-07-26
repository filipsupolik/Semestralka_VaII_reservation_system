using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    class ServiceOffer
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        [Required]
        public TimeSpan Duration { get; set; }

        [Required]
        [Column(TypeName = "decimal(10, 2)")]
        public decimal Price { get; set; }

        [Required]
        public Status Status { get; set; }  // napr. "Active", "Inactive"

        // FK na Service
        [Required]
        [ForeignKey(nameof(ServiceId))]
        public int ServiceId { get; set; }
         public Service Service { get; set; }
    }
}
