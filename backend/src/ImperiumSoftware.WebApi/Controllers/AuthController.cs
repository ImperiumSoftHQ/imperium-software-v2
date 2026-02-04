using Microsoft.AspNetCore.Mvc;
using ImperiumSoftware.Application.DTOs;
using ImperiumSoftware.Application.Services;

namespace ImperiumSoftware.WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly AuthService _authService;

    public AuthController(AuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public async Task<ActionResult<LoginResponse>> Login([FromBody] LoginRequest request)
    {
        var response = await _authService.LoginAsync(request);
        if (response == null)
        {
            return Unauthorized(new { message = "Invalid username or password" });
        }
        return Ok(response);
    }
}
