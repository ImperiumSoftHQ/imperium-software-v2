using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ImperiumSoftware.Application.DTOs;
using ImperiumSoftware.Application.Services;

namespace ImperiumSoftware.WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MessagesController : ControllerBase
{
    private readonly ContactMessageService _messageService;

    public MessagesController(ContactMessageService messageService)
    {
        _messageService = messageService;
    }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<IEnumerable<ContactMessageDto>>> GetAll()
    {
        var messages = await _messageService.GetAllAsync();
        return Ok(messages);
    }

    [HttpPost]
    public async Task<ActionResult<CreateContactMessageResponse>> Create(
        [FromBody] CreateContactMessageRequest request)
    {
        var response = await _messageService.CreateAsync(request);
        return Ok(response);
    }
}
