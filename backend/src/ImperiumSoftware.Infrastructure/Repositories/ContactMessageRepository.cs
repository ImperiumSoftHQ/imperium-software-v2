using Microsoft.EntityFrameworkCore;
using ImperiumSoftware.Application.Interfaces;
using ImperiumSoftware.Domain.Entities;
using ImperiumSoftware.Infrastructure.Data;

namespace ImperiumSoftware.Infrastructure.Repositories;

public class ContactMessageRepository : IContactMessageRepository
{
    private readonly AppDbContext _context;

    public ContactMessageRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<ContactMessage>> GetAllAsync()
    {
        return await _context.ContactMessages
            .OrderByDescending(m => m.CreatedAt)
            .ToListAsync();
    }

    public async Task<ContactMessage> AddAsync(ContactMessage message)
    {
        _context.ContactMessages.Add(message);
        await _context.SaveChangesAsync();
        return message;
    }
}
