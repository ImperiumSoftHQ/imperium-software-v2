using ImperiumSoftware.Domain.Entities;

namespace ImperiumSoftware.Application.Interfaces;

public interface IAdminUserRepository
{
    Task<AdminUser?> GetByUsernameAsync(string username);
}
