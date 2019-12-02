import Head from "next/head";
import Header from "./header";

const Page = ({ header = true, footer = false, children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      {header && <Header />}
      <main>{children}</main>

      <style jsx global>{`
        @font-face {
          font-family: "Helvetica Neue UltraLight";
          font-weight: 300;

          src: url("/fonts/HelveticaNeue-UltraLight.otf");
        }

        :root {
          /* space */
          --gap-quarter: 0.25rem;
          --gap-half: 0.5rem;
          --gap: 1rem;
          --gap-double: 2rem;
          --small-gap: 4rem;
          --big-gap: 10rem;
          --main-content: 45rem;

          /* colors */
          --bg: #ffffff;
          --fg: #252424;

          /* type */
          --font-main: Helvetica Neue UltraLight, Arial, sans-serif;

          /* transition */
          --transition: 0.1s ease-in-out;
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-size: 16px;
          font-family: var(--font-main);
          background: var(--bg);
          color: var(--fg);
        }

        body {
          scroll-behavior: smooth;
          min-height: 100vh;
          font-family: var(--font-sans);
          display: flex;
          flex-direction: column;
          transition: color 0.1s ease-in-out, background 0.1s ease-in-out;
        }

        a {
          outline: none;
          font-weight: bold;
          text-decoration: none;
          transition: color var(--transition);
        }

        p a {
          color: #ff9c9e;
        }

        p a:hover,
        p a:focus,
        p a:active {
          color: #ffcfd0;
        }

        ul {
          list-style: none;
        }
      `}</style>
    </>
  );
};

export default Page;
