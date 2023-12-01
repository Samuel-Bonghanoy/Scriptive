using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
  public class Letter 
  {
      public int Id {get; set;} = 1;
      public string? SenderName {get; set;} = "Default Sender";
      public string? SenderAddress {get; set;} = "Default Address";
      public string? SenderTitle {get; set;} = "Default Title";
      public string? SenderContactNum {get; set;} = "Default Contact Number";
      public string? SenderEmail {get; set;} = "default.sender@example.com";
      public string? RecipientName {get; set;} = "Default Recipient";
      public string? RecipientAddress {get; set;} = "Default Address";
      public string? RecipientTitle {get; set;} = "Default Title";
      public string? RecipientContactNum {get; set;} = "Default Contact Number";
      public string? RecipientEmail {get; set;} = "default.recipient@example.com";
      public string? Content {get; set;} = "Default Content";
      public string? Date {get; set;} = DateTime.Now.ToString();
      public string? Topic {get; set;} = "Default Topic";
  }
}