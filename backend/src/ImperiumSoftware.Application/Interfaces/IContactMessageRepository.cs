using ImperiumSoftware.Domain.Entities;

namespace ImperiumSoftware.Application.Interfaces;

public interface IContactMessageRepository
{
    Task<IEnumerable<ContactMessage>> GetAllAsync();
    Task<ContactMessage> AddAsync(ContactMessage message);
}
