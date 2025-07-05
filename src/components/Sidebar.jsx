import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import config from "../config";

export default function Sidebar() {
  const { github, linkedin, email } = config.contact;

  const items = [
    { icon: <FaLinkedin />, link: linkedin },
    { icon: <FaGithub />, link: github },
    { icon: <FaEnvelope />, link: `mailto:${email}` },
  ];

  return (
    <div className="fixed left-4 top-1/3 hidden md:flex flex-col space-y-4 z-50">
      {items.map((item, i) => (
        <a
          key={i}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-purple-600 text-xl transition"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}