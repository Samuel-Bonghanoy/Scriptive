import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

import { useEffect } from "react";

function SocialMedia() {
  return (
    <ul className="mt-2 flex gap-5 sm:w-full md:w-[80%] mb-8 items-center sm:justify-center md:justify-start mx-auto">
      <li>
        <a
          href="https://www.linkedin.com/in/samuel-bonghanoy-55283a250/"
          className="hover:cursor-pointer "
        >
          <LinkedInIcon
            sx={{
              width: "2.7rem",
              height: "2.7rem",
              fill: "#000000",
              "&:hover": { fill: "#961418" },
            }}
          />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/Samuel-Bonghanoy"
          className="hover:cursor-pointer"
        >
          <GitHubIcon
            sx={{
              width: "2.7rem",
              height: "2.7rem",
              fill: "#000000",
              "&:hover": { fill: "#961418" },
            }}
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/sampeoplewantitall/"
          className="hover:cursor-pointer"
        >
          <InstagramIcon
            sx={{
              width: "2.7rem",
              height: "2.7rem",
              fill: "#000000",
              "&:hover": { fill: "#961418" },
            }}
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/Sampeoplewantitall/"
          className="hover:cursor-pointer"
        >
          <FacebookIcon
            sx={{
              width: "2.7rem",
              height: "2.7rem",
              fill: "#000000",
              "&:hover": { fill: "#961418" },
            }}
          />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/NotSamBonghanoy"
          className="hover:cursor-pointer"
        >
          <TwitterIcon
            sx={{
              width: "2.7rem",
              height: "2.7rem",
              fill: "#000000",
              "&:hover": { fill: "#961418" },
            }}
          />
        </a>
      </li>
      <li>
        <a
          href="https://mail.google.com/mail/u/0/#inbox"
          className="hover:cursor-pointer sm:hidden md:block"
        >
          <EmailIcon
            sx={{
              width: "2.7rem",
              height: "2.7rem",
              fill: "#000000",
              "&:hover": { fill: "#961418" },
            }}
          />
        </a>
      </li>
    </ul>
  );
}

export default SocialMedia;
