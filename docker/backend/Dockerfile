# =============================================================================
# Stage 1: Build the .NET application
# =============================================================================
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /src

# Copy solution and project files first for better layer caching
COPY backend/ImperiumSoftware.sln ./
COPY backend/src/ImperiumSoftware.Domain/ImperiumSoftware.Domain.csproj ./src/ImperiumSoftware.Domain/
COPY backend/src/ImperiumSoftware.Application/ImperiumSoftware.Application.csproj ./src/ImperiumSoftware.Application/
COPY backend/src/ImperiumSoftware.Infrastructure/ImperiumSoftware.Infrastructure.csproj ./src/ImperiumSoftware.Infrastructure/
COPY backend/src/ImperiumSoftware.WebApi/ImperiumSoftware.WebApi.csproj ./src/ImperiumSoftware.WebApi/

# Restore dependencies
RUN dotnet restore

# Copy all source code
COPY backend/ ./

# Build and publish the application
RUN dotnet publish src/ImperiumSoftware.WebApi/ImperiumSoftware.WebApi.csproj \
    -c Release \
    -o /app/publish

# =============================================================================
# Stage 2: Runtime image
# =============================================================================
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime

WORKDIR /app

# Copy published application
COPY --from=build /app/publish .

# Expose port
EXPOSE 5000

# Set environment variables
ENV ASPNETCORE_URLS=http://+:5000
ENV ASPNETCORE_ENVIRONMENT=Production

# Start the application
ENTRYPOINT ["dotnet", "ImperiumSoftware.WebApi.dll"]
