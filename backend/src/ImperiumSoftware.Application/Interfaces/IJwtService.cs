using ImperiumSoftware.Domain.Entities;

namespace ImperiumSoftware.Application.Interfaces;

public interface IJwtService
{
    (string Token, DateTime ExpiresAt) GenerateToken(AdminUser user);
}
