import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <footer className="footer items-center py-6 px-10 bg-base-300 text-neutral-content">
      <aside className="items-center grid-flow-col">
        <p>Copyright © 2023 - All rights reserved by Samuel Bonghanoy</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a>
          <GitHubIcon
            sx={{
              width: "2rem",
              height: "2rem",
              fill: "#f4f4f4",
              "&:hover": { fill: "#FFC24A" },
            }}
          />
        </a>
        <a>
          <TwitterIcon
            sx={{
              width: "2rem",
              height: "2rem",
              fill: "#f4f4f4",
              "&:hover": { fill: "#FFC24A" },
            }}
          />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
