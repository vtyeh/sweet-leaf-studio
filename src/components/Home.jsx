import NavBar from "./NavBar";
import Social from "./Social";
import thisMe from "../assets/me.png";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <NavBar />
      <Social />

      {/* ── Hero ── */}
      <section id="main">
        <div>
          <span className="hero-name">
            <span className="hero-name-line" />
            venessa tai yeh
          </span>
          <div className="fancy-font">
            human-centered <i>web developer & poet</i> based in southern
            california.
          </div>
        </div>
        <img src="/shell_flower.png" className="hero-img" alt="soft wide petaled flower stuck inside an upside down snail shell" />
      </section>

      {/* ── About ── */}
      <section id="about" className="port-section">
        <div className="section-inner">
          <p className="section-label">About</p>
          <div className="about-grid">
            <img src={thisMe} className="about-img" alt="portrait of Venessa" />
            <div className="about-text">
              <h2><i>sweet leaf</i> studio</h2>
              <p>Hi! I'm Venessa, founder of sweet leaf studio. The name comes from my Chinese name:
                葉香儀. It also describes how I treat digital spaces as spaces worth tending to.
              </p>
              <p>
                I have 8 years of experience building full-stack
                applications for small teams. I have a background in sociology and
                philosophy, which means I bring as much attention to how a site{" "}
                <em>feels</em> to use as to how it's built. I'm also the creator
                and editor-in-chief of{" "}
                <a href="https://opol.space/" target="_blank" rel="noreferrer">
                  Opol
                </a>
                , a quiet space for poetry online.
              </p>
              <p>
                at sweet leaf studio, I work with therapists, private practices, and independent makers 
                who want a website that actually reflects what they do. I care about using tools that don't 
                extract—from you, your users, or anyone else.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="port-section">
        <div className="section-inner">
          <p className="section-label">Services</p>
          <div className="services-list">
            <div className="service-item">
              <span className="service-num">01</span>
              <div className="service-body">
                <h3>Custom Website Design</h3>
                <p>
                  Fully designed, hand-coded site built around your work—not a
                  template with your name on it. Includes up to 6 pages, mobile
                  responsiveness, and 30 days of support.
                </p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-num">02</span>
              <div className="service-body">
                <h3>Content-Driven Sites</h3>
                <p>
                  For magazines, journals, and publishers who need a CMS. Built
                  with Sanity or similar headless tools so your team can publish
                  independently.
                </p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-num">03</span>
              <div className="service-body">
                <h3>Maintenance & Care</h3>
                <p>
                  Ongoing partnership: updates, content edits, performance checks,
                  and someone who actually knows your site when something breaks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Poetry ── */}
      <section id="poetry" className="port-section">
        <div className="section-inner">
          <p className="section-label">Poetry</p>
          <div className="poetry-inner">
            <div>
              <p className="poetry-heading">
                Enjoy your coffee break with some <i>poetry</i>.
              </p>
              <a
                className="linkButton"
                href="https://opol.space/@venessa"
                target="_blank"
                rel="noreferrer"
              >
                read on Opol
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        created with figma, react, and github pages. icons from freepik and
        pixelmeetup. © sweet leaf studio {currentYear}
      </footer>
    </div>
  );
}