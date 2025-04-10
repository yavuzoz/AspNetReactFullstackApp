# 1. .NET SDK ile build aşaması
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY . .
RUN dotnet restore
RUN dotnet publish -c Release -o /app/publish

# 2. Runtime aşaması (daha küçük image)
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/publish .

# 3. Uygulamayı başlat
ENTRYPOINT ["dotnet", "backend.dll"]
