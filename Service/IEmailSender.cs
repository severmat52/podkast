using System.Threading.Tasks;

namespace PodClubIOWebsite.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
