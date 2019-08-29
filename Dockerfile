FROM mcr.microsoft.com/dotnet/core/aspnet:2.1-stretch-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:2.1-stretch AS build
WORKDIR /src

RUN curl -sL https://deb.nodesource.com/setup_10.x |  bash -
RUN apt-get install -y nodejs

COPY ["podkast/podkast.csproj", "podkast/"]
COPY ["podkast.shared/Podkast.Shared.csproj", "podkast.shared/"]
RUN dotnet restore "podkast/podkast.csproj"
COPY . .
WORKDIR "/src/podkast"
RUN dotnet build "podkast.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "podkast.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Podkast.dll"]