using Microsoft.EntityFrameworkCore;

namespace api.Models
{
    public class LetterContext : DbContext
    {
        public LetterContext(DbContextOptions<LetterContext> options)
            : base(options)
        {
        }
        public DbSet<Letter> Letters { get; set; }
    }
}