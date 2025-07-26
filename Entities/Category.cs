using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    class Category
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(10)]
        public string Name { get; set; }
        [StringLength(50)]
        public string Description { get; set; }
        [ForeignKey(nameof(Parent_Id))]
        public int Parent_Id { get; set; }

        public ICollection<Category> SubCategories { get; set; }
    }
}
