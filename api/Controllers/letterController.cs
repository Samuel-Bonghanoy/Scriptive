using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using api.Models;

namespace api.Controllers
{
    [ApiController]
    [Route("api/letter")]
    public class LetterController : ControllerBase
    {
        private static Letter letter = new Letter 
        {
            Id = 1,
            SenderName = "John Doe",
            SenderAddress = "123 Main St",
            SenderTitle = "Mr.",
            SenderContactNum = "1234567890",
            SenderEmail = "john.doe@example.com",
            RecipientName = "Jane Smith",
            RecipientAddress = "456 High St",
            RecipientTitle = "Ms.",
            RecipientContactNum = "0987654321",
            RecipientEmail = "jane.smith@example.com",
            Content = "Hello, this is a sample letter.",
            Date = DateTime.Now.ToString(),
            Topic = "Sample Letter"
        };

        [HttpGet]
        public IActionResult Get() {
            return Ok(letter);
        }
    }
}