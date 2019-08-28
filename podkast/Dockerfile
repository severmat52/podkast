FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

RUN curl -sL https://deb.nodesource.com/setup_10.x |  bash -
RUN apt-get install -y nodejs

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["podkast/podkast.csproj", "podkast/"]
COPY ["podkast.shared/Podkast.Shared.csproj", "podkast.shared/"]
RUN dotnet restore "podkast/podkast.csproj"
COPY . .
WORKDIR "/src/podkast"
RUN dotnet build "podkast.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "podkast.csproj" -c Release -o /app

FROM base AS final
ENV ASPNETCORE_URLS http://*:5000
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Podkast.dll"]
