using Microsoft.EntityFrameworkCore;
using ImperiumSoftware.Application.Interfaces;
using ImperiumSoftware.Domain.Entities;
using ImperiumSoftware.Infrastructure.Data;

namespace ImperiumSoftware.Infrastructure.Repositories;

public class AdminUserRepository : IAdminUserRepository
{
    private readonly AppDbContext _context;

    public AdminUserRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<AdminUser?> GetByUsernameAsync(string username)
    {
        return await _context.AdminUsers
            .FirstOrDefaultAsync(u => u.Username == username);
    }
}
