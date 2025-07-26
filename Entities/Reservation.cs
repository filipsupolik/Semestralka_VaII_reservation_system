using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    class Reservation
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public DateTime ReservationDay { get; set; }

        [Required]
        public TimeSpan Start { get; set; }

        [Required]
        public TimeSpan End { get; set; }

        [Required]
        public int PeopleCount { get; set; }

        [Required]
        public Status Status { get; set; }  // Môžeš použiť enum, ak chceš

        public string CanceledBy { get; set; }

        public string Note { get; set; }

        // FK na Usera
        [Required]
        [ForeignKey(nameof(UserId))]
        public int UserId { get; set; }
        public User User { get; set; }

        // FK na ServiceOffer
        [Required]
        [ForeignKey(nameof(ServiceOfferId))]
        public int ServiceOfferId { get; set; }
        public ServiceOffer ServiceOffer { get; set; }
    }
}
