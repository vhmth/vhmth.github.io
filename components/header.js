import InstagramIcon from "./icons/instagram";
import Link from "next/link";
import TwitterIcon from "./icons/twitter";

const Header = () => {
  return (
    <nav className="header">
      <Link href="/">
        <a className="name-link" aria-label="Navigate Home">
          vinay hiremath
        </a>
      </Link>
      <div className="social-links">
        <a target="_blank" href="https://twitter.com/vhmth">
          <TwitterIcon />
        </a>

        <a target="_blank" href="https://instagram.com/vhmth">
          <InstagramIcon />
        </a>
      </div>

      <style jsx>{`
        .header {
          width: 100%;
          height: 80px;
        }

        .name-link {
          font-size: 4rem;
        }

        .social-links {
          font-size: 1rem;
          margin-left: 8px;
        }
      `}</style>
    </nav>
  );
};

export default Header;
