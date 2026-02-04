using ImperiumSoftware.Application.DTOs;
using ImperiumSoftware.Application.Interfaces;
using ImperiumSoftware.Domain.Entities;

namespace ImperiumSoftware.Application.Services;

public class ContactMessageService
{
    private readonly IContactMessageRepository _repository;

    public ContactMessageService(IContactMessageRepository repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<ContactMessageDto>> GetAllAsync()
    {
        var messages = await _repository.GetAllAsync();
        return messages.Select(m => new ContactMessageDto(
            m.Id,
            m.Name,
            m.Email,
            m.Subject,
            m.Message,
            m.CreatedAt
        ));
    }

    public async Task<CreateContactMessageResponse> CreateAsync(CreateContactMessageRequest request)
    {
        if (!string.IsNullOrEmpty(request.Honeypot))
        {
            return new CreateContactMessageResponse(true, "Message sent successfully.");
        }

        var message = new ContactMessage
        {
            Name = request.Name,
            Email = request.Email,
            Subject = request.Subject,
            Message = request.Message,
            CreatedAt = DateTime.UtcNow
        };

        await _repository.AddAsync(message);
        return new CreateContactMessageResponse(true, "Message sent successfully.");
    }
}
