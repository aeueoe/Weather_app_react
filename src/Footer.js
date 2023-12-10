import "./Footer.css";

export default function Footer() {
  return (
    <footer className="container">
      This project was coded by Julia Atamas and is{" "}
      <a
        href="https://github.com/aeueoe/weather"
        target="_blank"
        rel="noopener noreferrer"
      >
        open-sourced on GitHub
      </a>{" "}
      and{" "}
      <a
        href="https://main--clever-sunburst-bc81d4.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        hosted on Netlify
      </a>
    </footer>
  );
}
