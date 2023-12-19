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
        private static List<Letter> letters = new List<Letter>
        {
            new Letter
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
            },
            new Letter
            {
                Id = 2,
                SenderName = "Alice Johnson",
                SenderAddress = "789 Oak St",
                SenderTitle = "Mrs.",
                SenderContactNum = "9876543210",
                SenderEmail = "alice.johnson@example.com",
                RecipientName = "Bob Williams",
                RecipientAddress = "567 Pine St",
                RecipientTitle = "Mr.",
                RecipientContactNum = "0123456789",
                RecipientEmail = "bob.williams@example.com",
                Content = "Greetings! Here's another sample letter.",
                Date = DateTime.Now.AddDays(-1).ToString(),
                Topic = "Greetings Letter"
            },
            new Letter
            {
                Id = 3,
                SenderName = "Charlie Brown",
                SenderAddress = "246 Elm St",
                SenderTitle = "Dr.",
                SenderContactNum = "5556667777",
                SenderEmail = "charlie.brown@example.com",
                RecipientName = "Lucy Miller",
                RecipientAddress = "135 Maple St",
                RecipientTitle = "Miss",
                RecipientContactNum = "3334445555",
                RecipientEmail = "lucy.miller@example.com",
                Content = "Dear Lucy, I hope this letter finds you well.",
                Date = DateTime.Now.AddDays(-2).ToString(),
                Topic = "Friendly Letter"
            },
            new Letter
            {
                Id = 4,
                SenderName = "David Lee",
                SenderAddress = "111 Birch St",
                SenderTitle = "Mr.",
                SenderContactNum = "7778889999",
                SenderEmail = "david.lee@example.com",
                RecipientName = "Eva Taylor",
                RecipientAddress = "222 Cedar St",
                RecipientTitle = "Mrs.",
                RecipientContactNum = "8889990000",
                RecipientEmail = "eva.taylor@example.com",
                Content = "Hey Eva, just dropping you a quick note.",
                Date = DateTime.Now.AddDays(-3).ToString(),
                Topic = "Quick Note"
            },
            // Add more letters as needed.
        };


        
        [HttpGet]
        public IActionResult Get() {
            return Ok(letters);
        }
    }
}