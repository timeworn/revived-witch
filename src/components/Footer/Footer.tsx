import React, { memo } from "react";
import "./Footer.css";
import siteData from "../../data/siteData";
import Link from "next/link";

const Footer: React.FC = memo(() => {
  return (
    <footer className="bg-footer relative">
      <div className="footer px-10 py-7">
        <p>{siteData.socials.mail}</p>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link href={siteData.socials.github} target="_blank">
              <svg
                className="fill-current"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.623-5.475 5.92.43.37.814 1.102.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .319.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
});

export default Footer;
