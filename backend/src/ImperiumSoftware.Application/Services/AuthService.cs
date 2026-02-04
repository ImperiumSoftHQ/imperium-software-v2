using ImperiumSoftware.Application.DTOs;
using ImperiumSoftware.Application.Interfaces;

namespace ImperiumSoftware.Application.Services;

public class AuthService
{
    private readonly IAdminUserRepository _userRepository;
    private readonly IPasswordHasher _passwordHasher;
    private readonly IJwtService _jwtService;

    public AuthService(
        IAdminUserRepository userRepository,
        IPasswordHasher passwordHasher,
        IJwtService jwtService)
    {
        _userRepository = userRepository;
        _passwordHasher = passwordHasher;
        _jwtService = jwtService;
    }

    public async Task<LoginResponse?> LoginAsync(LoginRequest request)
    {
        var user = await _userRepository.GetByUsernameAsync(request.Username);
        if (user == null)
        {
            return null;
        }

        if (!_passwordHasher.Verify(request.Password, user.PasswordHash))
        {
            return null;
        }

        var (token, expiresAt) = _jwtService.GenerateToken(user);
        return new LoginResponse(token, expiresAt);
    }
}
