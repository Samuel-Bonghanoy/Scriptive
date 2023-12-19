using Microsoft.EntityFrameworkCore;

namespace api.Models
{
    public class SampleDBContext : DbContext
    {
        public SampleDBContext(DbContextOptions<SampleDBContext> options)
            : base(options)
        {
        }
        public DbSet<Letter> Letters { get; set; }
    }
}