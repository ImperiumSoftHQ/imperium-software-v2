namespace ImperiumSoftware.Application.DTOs;

public record ContactMessageDto(
    int Id,
    string Name,
    string Email,
    string Subject,
    string Message,
    DateTime CreatedAt
);

public record CreateContactMessageRequest(
    string Name,
    string Email,
    string Subject,
    string Message,
    string? Honeypot
);

public record CreateContactMessageResponse(
    bool Success,
    string Message
);
