import { useState } from "react";

export default function NavBar() {
  const [active, setActive] = useState(null);

  function scrollSmoothTo(elementId) {
    const element = document.getElementById(elementId);

    if (element) {
      setActive(elementId);
      element.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="navbar">
      <button onClick={() => scrollSmoothTo("main")}>
        <div className={"chinese"}>
          <span>葉</span>
          <span>香</span>
          <span>儀</span>
        </div>
      </button>
      <div className={"navbarLinks"}>
        <button
          className={active === "about" ? "active" : ""}
          onClick={() => scrollSmoothTo("about")}
        >
          about
        </button>
        <button
          className={active === "services" ? "active" : ""}
          onClick={() => scrollSmoothTo("services")}
        >
          services
        </button>
        <button
          className={active === "poetry" ? "active" : ""}
          onClick={() => scrollSmoothTo("poetry")}
        >
          poetry
        </button>
      </div>
    </div>
  );
}
