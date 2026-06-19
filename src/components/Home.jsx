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
            <div className="about-img-frame">
              <img src={thisMe} className="about-img" alt="portrait of Venessa" />
            </div>
            <div className="about-text">
              <h2><i>sweet leaf</i> studio</h2>
              <p><i>" Some people worry that artificial intelligence will make us feel inferior, but then, anybody in his right mind should have an inferiority complex every time he looks at a flower. "</i> - Alan C. Kay</p>
              <p>Hi! I'm Venessa, founder of sweet leaf studio. "Sweet leaf" comes from my Taiwanese name:
                葉香儀. I think of digital spaces as real spaces, where people actually spend time in, and tend to them as such.
                I'm also the creator of <a href="https://opol.space/" target="_blank" rel="noreferrer">Opol</a>, a quiet space for poetry.
              </p>
              <p>
                I have a background in sociology and philosophy, and 8 years of experience building full-stack
                applications for small teams. This combination shapes the way I build: efficient on the inside 
                and delightful on the outside.
              </p>
              <p>
                At sweet leaf studio, I work with therapists, private practices, and independent makers 
                who want a website that becomes a part of the holistic experience and energy they wish to bring to their clients.
              </p>
              <p>When I'm not coding, you can find me snowboarding with my husband, cuddling with our two cats, drinking way too much boba milk tea, or rewatching LOTR for the 100th time. I also have an ever-growing anti-library.</p>
              <p>To get in touch, email me at hello@sweetleaf.studio</p>
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
                <h3>Custom Website Design // $2200</h3>
                <p>
                  A fully designed, hand-coded website built around your practice or work. Includes up to 6 pages, mobile responsiveness, a content management system so you can update your own copy without touching code, an initial consultation, two rounds of feedback, and 30 days of support after launch.                </p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-num">02</span>
              <div className="service-body">
                <h3>Maintenance & Care // $600</h3>
                <p>
                  An annual care plan covering content updates, performance checks, and troubleshooting so you don't have to think about it.                </p>
              </div>
            </div>
            <div className="service-item">
              <span className="service-num">03</span>
              <div className="service-body">
                <h3>Consultation // $150</h3>
                <p>
                  A one-hour conversation about your goals, your current site, or what a new one might look like.                </p>
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
                Read on Opol
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        created with figma, react, github, and netlify. icons from freepik and
        pixelmeetup. © sweet leaf studio {currentYear}
      </footer>
    </div>
  );
}