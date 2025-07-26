using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    class ServiceEntity
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        // FK na User (admina)
        [Required]
        [ForeignKey(nameof(UserAdminId))]
        public int UserAdminId { get; set; }
        public User Admin { get; set; }

        public string ImageUrl { get; set; }

        [Required]
        public TimeSpan OpeningTime { get; set; }

        [Required]
        public TimeSpan ClosingTime { get; set; }

        [Required]
        public string Status { get; set; }  // napr. "Active", "Inactive" - môže byť enum

        // Vzťah na kategórie (môže byť viacero)
        public ICollection<Category> Categories { get; set; }

        // FK na Address (1:1 alebo 1:0..1)
        [ForeignKey(nameof(AddressId))]
        public int? AddressId { get; set; }
        public Address Address { get; set; }

        // FK na Contact (1:1 alebo 1:0..1)
        [ForeignKey(nameof(ContactId))]
        public int? ContactId { get; set; }
        public Contact Contact { get; set; }
    }
}
