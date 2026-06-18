import githubIcon from "../assets/github.png";
import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";

const social_list = [
  {
    icon: githubIcon,
    altName: "github",
    link: "https://github.com/vtyeh",
  },
  {
    icon: linkedinIcon,
    altName: "linkedin",
    link: "https://www.linkedin.com/in/venessayeh/",
  },
  // {
  //   icon: opolIcon,
  //   altName: "opol",
  //   link: "https://opol.space/@venessa",
  // },
  {
    icon: instagramIcon,
    altName: "instagram",
    link: "https://www.instagram.com/sweet._.leaf/",
  },
];

export default function Social() {
  return (
    <div className={"contactLinks"}>
      {social_list.map((social, index) => (
        <a key={index} href={social.link} target="_blank" rel="noreferrer">
          <img
            src={social.icon}
            alt={social.altName}
            className={"socialIcon"}
          />
        </a>
      ))}
    </div>
  );
}
